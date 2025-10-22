"use client";
import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState<number | string>("");
  const [num2, setNum2] = useState<number | string>("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = (operator: string) => {
    const a = Number(num1);
    const b = Number(num2);
    if (isNaN(a) || isNaN(b)) {
      alert("Please enter valid numbers!");
      return;
    }

    let res = 0;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        if (b === 0) {
          alert("Cannot divide by zero!");
          return;
        }
        res = a / b;
        break;
      default:
        return;
    }
    setResult(res);
  };

  return (
    <div className="max-w-sm mx-auto p-4 border rounded-lg shadow-md mt-10 text-center">
      <h1 className="text-2xl font-bold mb-4">🧮 Simple Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        className="w-full p-2 mb-4 border rounded"
      />

      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => calculate("+")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => calculate("-")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          −
        </button>
        <button
          onClick={() => calculate("*")}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          ×
        </button>
        <button
          onClick={() => calculate("/")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          ÷
        </button>
      </div>

      {result !== null && (
        <div className="text-lg font-semibold">
          ✅ Result: <span className="font-bold">{result}</span>
        </div>
      )}
    </div>
  );
}
