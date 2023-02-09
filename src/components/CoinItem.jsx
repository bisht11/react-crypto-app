import React from "react";
import "./Coins.css";

// format of an individual coin to be rendered
const CoinItem = (props) => {
  return (
    // data to be rendered
    <div className="coin-row">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coins.image} alt="coin here" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>{props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hide-mobile">
        ₹{props.coins.total_volume.toLocaleString()}
      </p>
      <p className="hide-mobile">₹{props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
