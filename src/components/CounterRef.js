import React, { useRef } from "react";

function CounterRef() {
    //call useRef and pass an initial value
  const count = useRef(0);

  function handleClick() {
     //to update the value of the ref in Reacts's internals
    count.current = count.current + 1;
    console.log(count.current);
  }

  return (
    <div>
      <h1>CounterRef</h1>
      <button onClick={handleClick}>{count.current}</button>
    </div>
  );
}

export default CounterRef;


