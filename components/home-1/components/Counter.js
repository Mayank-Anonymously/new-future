import React, { useState } from "react";

const Counter = ({ setDivState }) => {
  const [counter, setCounter] = useState(1);
  const [counterChild, setCounterChild] = useState(0);
  const [counterInfant, setCounterInfant] = useState(0);

  const handleCounterInc = () => {
    setCounter(counter + 1);
  };
  const handleCounterDec = () => {
    setCounter(counter - 1);
  };
  const handleCounterIncChildren = () => {
    setCounterChild(counterChild + 1);
  };
  const handleCounterDecChildren = () => {
    setCounterChild(counterChild - 1);
  };
  const handleCounterIncInfant = () => {
    setCounterInfant(counterInfant + 1);
  };
  const handleCounterDecInfant = () => {
    setCounterInfant(counterInfant - 1);
  };
  return (
    <div className="passenger">
      <span className="counter-head">
        <h4>Select Passenger</h4>
      </span>
      <span className="travellers-counter">
        <h4>Adult</h4>
        <div className="d-flex align-itemss-center">
          <i className="btn fa fa-plus " onClick={handleCounterInc}>
            {" "}
          </i>
          <h4>{counter}</h4>
          <i class="btn fa fa-solid fa-minus" onClick={handleCounterDec}></i>
        </div>
      </span>
      <span className="travellers-counter">
        <h4>Children</h4>
        <div className="d-flex">
          <i className="fa fa-plus btn" onClick={handleCounterIncChildren}>
            {" "}
          </i>
          <h4>{counterChild}</h4>
          <i
            class="fa fa-solid fa-minus btn"
            onClick={handleCounterDecChildren}
          ></i>
        </div>
      </span>
      <span className="travellers-counter">
        <h4>Infant</h4>
        <div className="d-flex">
          <i className="fa fa-plus btn" onClick={handleCounterIncInfant}>
            {" "}
          </i>
          <h4>{counterInfant}</h4>
          <i
            class="fa fa-solid fa-minus btn"
            onClick={handleCounterDecInfant}
          ></i>
        </div>
        <span class="btn btn-primary" onClick={() => setDivState(0)}>
          Done
        </span>
      </span>
    </div>
  );
};

export default Counter;
