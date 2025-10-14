import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../store/counterSlice";

export default function CountDecrement() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const step = useSelector((state) => state.counter.step);

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="text-center p-5 border-2 border-gray-400 my-2">
      <button
        onClick={handleDecrement}
        className="px-6 py-3 text-base font-black border-2 border-gray-400 cursor-pointer mb-4 hover:bg-gray-100"
      >
        감소 (-{step})
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
