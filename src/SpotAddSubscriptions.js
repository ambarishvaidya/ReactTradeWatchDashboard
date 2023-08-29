import { useState } from "react";
import React from "react";

function SpotAddSubscriptions() {
  const [bid, setBid] = useState("");
  const [ask, setAsk] = useState("");
  const [spread, setSpread] = useState("");
  const [frequency, setFrequency] = useState("");
  const [ccyPair, setCcyPair] = useState("");
  const [response, setResponse] = useState("");

  function start() {
    alert("Starting...");
    fetch("https://localhost:7129/api/v1/start", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setResponse("Started...");
      } else {
        setResponse(response);
      }
    });
  }

  function stop() {
    fetch("https://localhost:7129/api/v1/stop", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setResponse("Stopped!!!");
      } else {
        setResponse("");
      }
    });
  }

  function pause() {
    fetch("https://localhost:7129/api/v1/pause", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setResponse("...Paused...");
      } else {
        setResponse("");
      }
    });
  }

  function resume() {
    fetch("https://localhost:7129/api/v1/resume", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setResponse("...Resumed");
      } else {
        setResponse("");
      }
    });
  }

  function addSubscription() {
    let input = {
      CurrencyPair: ccyPair,
      Bid: bid,
      Ask: ask,
      Spread: spread,
      PublishFrequencyInMs: frequency,
    };
    console.log(input);
    fetch("https://localhost:7129/api/v1/addsubscription", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    }).then((response) => {
      if (response.ok) {
        setAsk("");
        setBid("");
        setCcyPair("");
        setFrequency("");
        setSpread("");
      } else {
        const responseData = response.json();
        alert(responseData.message);
      }
    });
  }

  return (
    <>
      <div className="row my-3">
        <div className="col-sm-2 form-floating">
          <input
            type="text"
            className="form-control"
            id="ccyPair"
            placeholder="Currency Pair"
            value={ccyPair}
            onChange={(e) => setCcyPair(e.target.value)}
          />
          <label htmlFor="ccyPair" className="form-label">
            Currency Pair
          </label>
        </div>
        <div className="col-sm-2 form-floating">
          <input
            type="text"
            className="form-control"
            id="bid"
            placeholder="Bid"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
          />
          <label htmlFor="bid" className="form-label">
            Bid
          </label>
        </div>
        <div className="col-sm-2 form-floating">
          <input
            type="text"
            className="form-control"
            id="bid"
            placeholder="Ask"
            value={ask}
            onChange={(e) => setAsk(e.target.value)}
          />
          <label htmlFor="ask" className="form-label">
            Ask
          </label>
        </div>
        <div className="col-sm-2 form-floating">
          <input
            type="text"
            className="form-control"
            id="spread"
            placeholder="Spread"
            value={spread}
            onChange={(e) => setSpread(e.target.value)}
          />
          <label htmlFor="spread" className="form-label">
            Spread
          </label>
        </div>
        <div className="col-sm-2 form-floating">
          <input
            type="text"
            className="form-control"
            id="frequency"
            placeholder="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          />
          <label htmlFor="frequency" className="form-label">
            Frequency
          </label>
        </div>
        <button type="submit" className="col-sm-2 btn btn-primary" onClick={() => addSubscription()}>
          Add
        </button>
      </div>
      <div className="row my-3">
        <div className="col-sm-8 ">
          <input
            type="text"
            className="form-control"
            id="response"
            placeholder="Response"
            onChange={(e) => setResponse(e.target.value)}
          />
        </div>

        <div className="col-sm-4">
          <div className="row">
            <button type="button" className="col-sm btn btn-success mx-1" onClick={() => start()}>
              Start
            </button>
            <button type="button" className="col-sm btn btn-danger mx-1" onClick={() => stop()}>
              Stop
            </button>
            <button type="button" className="col-sm btn btn-info mx-1" onClick={() => pause()}>
              Pause
            </button>
            <button type="button" className="col-sm btn btn-dark mx-1" onClick={() => resume()}>
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpotAddSubscriptions;
