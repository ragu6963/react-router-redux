import React from "react";
import { useSelector } from "react-redux";

export default function CountView() {
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="text-center p-5 border-2 border-gray-400 my-2">
      <h2 className="mb-2 text-lg font-bold">현재 카운트</h2>
      <div className="text-6xl font-black">{count}</div>
    </div>
  );
}
