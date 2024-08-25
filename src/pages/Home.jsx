import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const mobiles = useSelector((state) => state.cart.mobiles); // Accessing mobiles from Redux state

  if (!mobiles || mobiles.length === 0) {
    return <p>No mobiles available</p>;
  }

  return (
    <ul>
      {mobiles.map((mobile) => (
        <li key={mobile.id}>{mobile.name}</li>
      ))}
    </ul>
  );
}

export default HomePage;
