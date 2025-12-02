import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./CryptoDetail.css";

const CryptoDetail = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCryptoDetail = async (id) => {
      try {
        const res = await axios.get(`https://api.coinpaprika.com/v1/tickers/${id}`);
        setCrypto(res.data);
      } catch (err) {
        console.error("Error al cargar detalle:", err);
      } finally {
        setLoading(false);
      }
    };

    getCryptoDetail(id);
  }, [id]);

  if (loading) {
    return (
      <div className="detail-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading crypto data...</p>
        </div>
      </div>
    );
  }

  if (!crypto) {
    return (
      <div className="detail-container">
        <p className="error-text">Criptomoneda no encontrada.</p>
      </div>
    );
  }

  const isPositive = crypto.quotes.USD.percent_change_24h >= 0;

  return (
    <div className="detail-container">
      <Link to="/" className="back-button">
        ← Volver al listado
      </Link>

      <div className={`detail-card ${isPositive ? 'positive' : 'negative'}`}>
        <div className="detail-header">
          <div>
            <h1 className="detail-title">{crypto.name}</h1>
            <span className="detail-symbol">{crypto.symbol}</span>
          </div>
          <span className={`change-badge ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? "▲" : "▼"}
            {isPositive ? "+" : ""}
            {crypto.quotes.USD.percent_change_24h.toFixed(2)}%
          </span>
        </div>

        <div className="detail-price-section">
          <div className="price-label">Current Price</div>
          <div className="price-value">${crypto.quotes.USD.price.toFixed(2)}</div>
        </div>

        <div className="detail-stats-grid">
          <div className="stat-card">
            <div className="stat-label">Market Cap</div>
            <div className="stat-value">${crypto.quotes.USD.market_cap.toLocaleString()}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Volume 24h</div>
            <div className="stat-value">${crypto.quotes.USD.volume_24h.toLocaleString()}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Total Supply</div>
            <div className="stat-value">
              {crypto.total_supply ? crypto.total_supply.toLocaleString() : 'N/A'}
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Max Supply</div>
            <div className="stat-value">
              {crypto.max_supply ? crypto.max_supply.toLocaleString() : 'N/A'}
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Beta Value</div>
            <div className="stat-value">
              {crypto.beta_value ? crypto.beta_value.toFixed(2) : 'N/A'}
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">First Data</div>
            <div className="stat-value">
              {crypto.first_data_at ? new Date(crypto.first_data_at).toLocaleDateString() : 'N/A'}
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Last Updated</div>
            <div className="stat-value">
              {crypto.last_updated ? new Date(crypto.last_updated).toLocaleDateString() : 'N/A'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetail;
