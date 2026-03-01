import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../Components/Navbar";
import CounterDisplay from "../Components/CounterDisplay";

function WaterTracker() {

  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount) {
      setCount(Number(savedCount));
    }
  }, []);

  // Save count
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  // API Call
  useEffect(() => {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => {
        setTip(data.slip.advice);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch tip");
        setLoading(false);
      });
  }, []);

  // useCallback for optimization
  const addWater = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const removeWater = useCallback(() => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  }, []);

  const reset = () => {
    setCount(0);
  };

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  return (
    <div>
      <Navbar />

      <h2>Water Tracker</h2>

      <div style={{ border: "1px solid black", padding: "20px", width: "300px" }}>

        <CounterDisplay count={count} goal={goal} />

        <button onClick={addWater}>+</button>
        <button onClick={removeWater}>-</button>
        <button onClick={reset}>Reset</button>

        <br /><br />

        <input
          type="number"
          value={goal}
          onChange={handleGoalChange}
        />

        {count >= goal && <p>Goal Reached 🎉</p>}

        <hr />

        <h4>Health Tip</h4>

        {loading && (
          <div style={{ background: '#eee', height: '24px', width: '80%', borderRadius: '4px', margin: '8px auto', animation: 'pulse 1s infinite' }} />
        )}
        {error && <p>{error}</p>}
        {!loading && tip && <p>{tip}</p>}

      </div>
      <button style={{ display: 'block', margin: '32px auto 0 auto', padding: '8px 24px' }} onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }}>Logout</button>
    </div>
  );
}

export default WaterTracker;