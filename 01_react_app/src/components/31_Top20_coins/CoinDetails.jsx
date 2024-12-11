import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id);

  const fetchCoinD = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.coinlore.net/api/ticker/?id=${id}`
      );
      const data = await response.json();
      setCoin(data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCoinD();
  }, [id]);

  return (
    <>
      {!loading && (
        <div className="coin-detail">
          <div className="name-symbol">
            <h1 className="name">{coin.name}</h1>
            <h2 className="symbol">{coin.symbol}</h2>
          </div>
          <div className="market-description">
            <p className="coin-rank">Rank: {coin.rank}</p>
            <p className="coin-price">Price: {coin.price_usd}</p>
            <p className="coin-market-cap">Market Cap: {coin.market_cap_usd}</p>
            <p className="coin-total-supply">Total Supply: {coin.tsupply}</p>
            <p className="coin-max-supply">
              Max Supply: {coin.msupply || "N/A"}
            </p>
          </div>
        </div>
      
      )}
        {loading && <p>loading....</p>}
    </>
  );
};

export default CoinDetails;
