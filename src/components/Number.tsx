"use client";

import React from "react";

export default function MathNumbers() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      // Check if count is greater than 1 before decrementing
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="radius-full h-8 w-8 rounded-full bg-slate-200 hover:bg-slate-300"
        onClick={decrement}
      >
        <span className="text-2xl">-</span>
      </button>
      <p>{count}</p>
      <button
        className="radius-full h-8 w-8 rounded-full bg-slate-200  hover:bg-slate-300"
        onClick={increment}
      >
        <span className="text-2xl">+</span>
      </button>
    </div>
  );
}
