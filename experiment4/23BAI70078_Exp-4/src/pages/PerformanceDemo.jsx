import React, { useState, useMemo, useCallback } from "react";
import CounterChild from "../components/CounterChild";

function expensiveCalculation(num) {
  console.log("🟡 Expensive calculation running...");
  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += num;
  }
  return result;
}

const PerformanceDemo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // 🔥 useMemo prevents recalculation unless count changes
  const total = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  // 🔥 useCallback prevents child re-render
  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div style={{ padding: "20px", color: dark ? "white" : "black", background: dark ? "#111" : "#fff" }}>
      <h2>React Performance Optimization Demo</h2>

      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <p>Theme: {dark ? "Dark" : "Light"}</p>

      <CounterChild onIncrement={handleIncrement} total={total} />
    </div>
  );
};

export default PerformanceDemo;
