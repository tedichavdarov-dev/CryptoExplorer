import { use, useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard/UserCard.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/tickers")
      .then((res) => {
        setCryptos(res.data.slice(0, 50)); // Mostrar solo las primeras 50 criptomonedas
      })
      .catch((err) => {
        console.error("Error al cargar criptomonedas:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1>CRYPTO TERMINAL</h1>
      <p className="mb-4 text-secondary">Professional cryptocurrency analytics and data</p>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        cryptos.map((crypto) => (
          <UserCard
            key={crypto.id}
            name={crypto.name}
            symbol={crypto.symbol}
            price={crypto.quotes.USD.price}
            change24h={crypto.quotes.USD.percent_change_24h}
            action={() => navigate(`/crypto/${crypto.id}`)}
          />
        ))
      )}
    </div>
    
  );
};

export default Home;
