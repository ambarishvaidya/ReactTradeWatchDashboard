import SpotSubcriptions from "./SpotSubscriptions";
import SpotTickingAgGrid from "./SpotTickingAgGrid";
// import SpotTickingGraph from "./SpotTickingGraph";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <p className="h1 p-1 font-weight-bold text-center text-light bg-dark mb-3">
            <strong>Forex Service</strong>
          </p>
        </div>
        <div className="col-12">
          <SpotSubcriptions />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-sm-7">
          <SpotTickingAgGrid />
        </div>
      </div>
      {/* <div className="col-12">
          <SpotTickingGraph />
        </div> */}
    </div>
  );
}

export default App;
