import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../../store/counterSlice";

export default function CountDecrement() {
  const dispatch = useDispatch();
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button className="border-2 p-2 cursor-pointer" onClick={handleDecrement}>
        감소
      </button>
    </div>
  );
}
