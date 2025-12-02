import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard/UserCard.jsx";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/tickers")
      .then((res) => {
        setCryptos(res.data.slice(0, 50));
      })
      .catch((err) => {
        console.error("Error al cargar criptomonedas:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          <span className="gradient-text">CRYPTO</span> TERMINAL
        </h1>
        <p className="hero-subtitle">Professional cryptocurrency analytics and real-time data</p>
        <div className="hero-divider"></div>
      </div>

      <div className="crypto-grid">
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading crypto data...</p>
          </div>
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
    </div>
  );
};

export default Home;
