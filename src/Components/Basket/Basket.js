import React from "react";
import BasketInfo from "./section/BasketInfo";
import BasketAddress from "./section/BasketAddress";
function Basket() {
  return (
    <div>
      <div style={{ margin: "3rem auto" }}>
        <BasketInfo />
      </div>
      <div style={{ margin: "3rem auto" }}>
        <BasketAddress />
      </div>
    </div>
  );
}

export default Basket;
