import React, { useState } from "react";
let interval;
export default function Timer() {
  const [msec, setMsec] = useState(0);
  let [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const start = () => {
    interval = setInterval(() => setMsec((prevmsec) => prevmsec + 1), 100);
    console.log(msec);
  };

  const stop = () => clearInterval(interval);

  const test = () => {
    if (msec === 99) {
      setMin(sec + 1);
    }
  };
  return (
    <div className="d-flex justify-content-center pt-5 ">
      <button onClick={start} className="w-25 btn btn-info">
        <h1>Start</h1>
      </button>
      <h1 className="mx-5 ">
        {min}:{sec}.{msec}{" "}
      </h1>
      <button onClick={stop} className="w-25 btn btn-danger">
        <h1>Stop</h1>
      </button>
    </div>
  );
}
