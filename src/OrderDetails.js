import React from "react";
import { useNavigate } from "react-router-dom";
function OrderDetails() {
const navigateBack = useNavigate();
  function handleBackClick() {
    navigateBack(-1);
  }
  return (
    <>
      <div>OrderDetails</div>
      <button onClick={handleBackClick}>Back</button>
    </>
  );
}

export default OrderDetails;
