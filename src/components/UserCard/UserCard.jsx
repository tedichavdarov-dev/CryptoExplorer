const UserCard = ({ name, symbol, price, change24h, action }) => {
  const glowStyle =
    change24h >= 0
      ? {
          transform: "scale(1.02)",
          border: "1px solid rgba(0, 255, 76, 1)",
          boxShadow: "0 0 20px rgba(9, 255, 0, 1), 0 0 40px rgba(0, 255, 21, 1) inset",
        }
      : {
          transform: "scale(1.02)",
          border: "1px solid rgba(255, 0, 0, 1)",
          boxShadow: "0 0 20px rgba(255, 0, 0, 1), 0 0 40px rgba(255, 0, 0, 1) inset",
        };

  const formattedPrice = price.toFixed(2);
  const safeSymbol = symbol.toUpperCase();

  return (
    <div
      className="bg-black p-4 rounded-md mb-4 cursor-pointer hover:scale-105 transition-transform"
      style={glowStyle} // <--- aplica el estilo aquí
      onClick={action}
    >
      <h2 className="text-md">{name}</h2>
      <p className="text-sm text-secondary">{safeSymbol}</p>
      <p className="number-ticker text-sm">${formattedPrice}</p>
      <p className={`${change24h >= 0 ? "text-success" : "text-danger"}`}>
        {change24h >= 0 ? "▲" : "▼"}
        {change24h >= 0 ? "+" : ""}
        {change24h.toFixed(2)}%
      </p>
    </div>
  );
};

export default UserCard;
