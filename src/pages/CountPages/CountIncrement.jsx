import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/counterSlice";

export default function CountIncrement() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const step = useSelector((state) => state.counter.step);

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div className="text-center p-5 border-2 border-gray-400 my-2">
      <button
        onClick={handleIncrement}
        className="px-6 py-3 text-base font-black border-2 border-gray-400 cursor-pointer mb-4 hover:bg-gray-100"
      >
        증가 (+{step})
      </button>
      <div className="flex justify-around text-sm">
        <div>
          Step: <strong>{step}</strong>
        </div>
        <div>
          Count: <strong>{count}</strong>
        </div>
      </div>
    </div>
  );
}
