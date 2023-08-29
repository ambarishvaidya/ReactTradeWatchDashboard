import React, { useState, useMemo, useRef, useCallback, useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import { AgGridReact } from "ag-grid-react";
import hubConnection from "./Signalr";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

var numberFormatter = Intl.NumberFormat("en-US", {
  maximumFractionDigits: 4,
});

var myValueFormatter = (p) => numberFormatter.format(p.value);

let tickerData = [];

function SpotTickingAgGrid(props) {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState([]); // Set rowData to Array of Objects, one Object per Row
  const gridStyle = useMemo(() => ({ height: 460, width: 720 }), []);

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "Ticker", filter: true, width: 100 },
    {
      field: "Bid",
      width: 200,
      valueFormatter: myValueFormatter,
      cellRenderer: "agAnimateShowChangeCellRenderer",
    },
    {
      field: "Ask",
      width: 200,
      valueFormatter: myValueFormatter,
      cellRenderer: "agAnimateShowChangeCellRenderer",
    },
    { field: "Last", width: 200, enableCellChangeFlash: true },
  ]);

  useEffect(() => {
    hubConnection.on("ForexTick", (value) => {
      const newItem = JSON.parse(value);
      const node = gridRef.current.api.getRowNode(newItem.Ticker);
      if (node === undefined) {
        console.log("Adding " + newItem.Ticker);
        gridRef.current.api.applyTransactionAsync({
          add: [newItem],
        });
      } else {
        gridRef.current.api.applyTransactionAsync({
          update: [newItem],
        });
      }
    });
  }, []);

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  const getRowId = useCallback((params) => {
    return params.data.Ticker;
  });

  const gridOptions = useMemo(() => ({ rowHeight: 30 }));

  return (
    <div>
      <div className="ag-theme-alpine-dark" style={gridStyle}>
        <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API
          getRowId={getRowId}
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          gridOptions={gridOptions}
        />
      </div>
    </div>
  );
}

export default SpotTickingAgGrid;
