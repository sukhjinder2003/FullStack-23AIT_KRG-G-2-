import React from "react";

const EmissionCard = React.memo(({ title, value }) => {
  console.log("Rendering:", title);

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
});

export default EmissionCard;
