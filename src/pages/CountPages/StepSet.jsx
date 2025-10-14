import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../store/counterSlice";

export default function StepSet() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.counter.step);

  const handleStepChange = (newStep) => {
    dispatch(setStep(newStep));
  };

  return (
    <div className="text-center p-5 border-2 border-gray-400 my-2">
      <h3 className="mb-5 text-xl font-black">Step 설정</h3>
      <div className="flex gap-4 justify-center mb-5">
        <button
          onClick={() => handleStepChange(1)}
          className={`px-5 py-3 text-base font-black border-2 cursor-pointer ${
            step === 1
              ? "border-black bg-black text-white"
              : "border-gray-400 hover:bg-gray-100"
          }`}
        >
          Step 1
        </button>
        <button
          onClick={() => handleStepChange(5)}
          className={`px-5 py-3 text-base font-black border-2 cursor-pointer ${
            step === 5
              ? "border-black bg-black text-white"
              : "border-gray-400 hover:bg-gray-100"
          }`}
        >
          Step 5
        </button>
        <button
          onClick={() => handleStepChange(10)}
          className={`px-5 py-3 text-base font-black border-2 cursor-pointer ${
            step === 10
              ? "border-black bg-black text-white"
              : "border-gray-400 hover:bg-gray-100"
          }`}
        >
          Step 10
        </button>
      </div>
      <div className="p-3 border border-gray-400 text-base font-black">
        현재 Step: <strong>{step}</strong>
      </div>
    </div>
  );
}
