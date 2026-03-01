import React from "react";

const CounterDisplay = React.memo(({ count, goal }) => {
  console.log("Counter rendered");

  return (
    <div>
      <h3>{count} / {goal} glasses completed</h3>
    </div>
  );
});

CounterDisplay.displayName = "CounterDisplay";

export default CounterDisplay;