import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center text-5xl my-2">{count}</h1>
      <div className="bg-white p-3 flex flex-col items-center">
        <button className="btn btn-neutral btn-outline my-3" onClick={()=>setCount(count+1)}>Increment</button>
        <button className="btn btn-neutral btn-outline" onClick={()=>setCount(count-1)}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
