import React from "react";

import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <div className="coin-card">
      <h3>{coin.name}</h3>
      <h3>{coin.symbol}</h3>
      <h3>Rank : {coin.rank}</h3>
      <p className="coin-price">Price: ${coin.price_usd}</p>
      <Link className="view-details-link" to={`/coins/${coin.id}`}>
        View Details
      </Link>
    </div>
  );
};

export default CoinCard;
