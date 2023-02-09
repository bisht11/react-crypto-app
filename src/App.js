import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import Coin from "./routes/Coin";
import { Routes, Route } from "react-router-dom";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data[0]); // development only
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
