import './UserCard.css';

const UserCard = ({ name, symbol, price, change24h, action }) => {
  const isPositive = change24h >= 0;
  const formattedPrice = price.toFixed(2);
  const safeSymbol = symbol.toUpperCase();

  return (
    <div
      className={`crypto-card ${isPositive ? 'positive' : 'negative'}`}
      onClick={action}
    >
      <div className="crypto-card-header">
        <h2 className="crypto-name">{name}</h2>
        <span className="crypto-symbol">{safeSymbol}</span>
      </div>

      <div className="crypto-card-body">
        <div className="crypto-price">
          <span className="price-label">Price</span>
          <span className="price-value">${formattedPrice}</span>
        </div>

        <div className="crypto-change">
          <span className={`change-badge ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? "▲" : "▼"}
            {isPositive ? "+" : ""}
            {change24h.toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="crypto-card-glow"></div>
    </div>
  );
};

export default UserCard;
