import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../store/counterSlice";

export default function CountIncrement() {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  return (
    <div>
      <button className="border-2 p-2 cursor-pointer" onClick={handleIncrement}>
        증가
      </button>
    </div>
  );
}
