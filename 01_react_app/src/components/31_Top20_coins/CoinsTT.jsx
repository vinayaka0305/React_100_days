import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";


const CoinsTT = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchCoinsDetails();
  }, []);

  const fetchCoinsDetails = async () => {
    try {
      const reponse = await fetch("https://api.coinlore.net/api/tickers/");
      const data = await reponse.json();
    //   console.log(data.data);
      setCoins(data.data.slice(0,20));
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <div>
        <h1>Top 20 Crypto Coins</h1>
        <div className="coins-cont">
          {coins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      </div>
  );
};

export default CoinsTT;
