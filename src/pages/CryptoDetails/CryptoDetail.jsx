import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./CryptoDetail.css";

const CryptoDetail = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);
  const glowStyle =
    crypto && crypto.quotes && crypto.quotes.USD
      ? crypto.quotes.USD.percent_change_24h >= 0
        ? {
            transform: "scale(1.02)",
            border: "1px solid rgba(0, 255, 76, 1)",
            boxShadow: "0 0 20px rgba(9, 255, 0, 1), 0 0 40px rgba(0, 255, 21, 1) inset",
          }
        : {
            transform: "scale(1.02)",
            border: "1px solid rgba(255, 0, 0, 1)",
            boxShadow: "0 0 20px rgba(255, 0, 0, 1), 0 0 40px rgba(255, 0, 0, 1) inset",
          }
      : {};
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

  return (
    <div className="mt-5">
      {loading ? (
        <p>Cargando...</p>
      ) : crypto ? (
          <div
            className="mx-5 my-5 p-4  mb-4 cursor-pointer hover:scale-105 transition-transform"
            style={glowStyle}
          >
          <Link to="/" className="mb-4 btn btn-success mt-3">Volver al listado</Link>
          <h1>{crypto.name} ({crypto.symbol})</h1>
          <p>Precio: ${crypto.quotes.USD.price.toFixed(2)}</p>
          <p>Cambio 24h: {crypto.quotes.USD.percent_change_24h}%</p>
          <p>Capitalización de mercado: ${crypto.quotes.USD.market_cap.toLocaleString()}</p>
          <p>Volumen 24h: ${crypto.quotes.USD.volume_24h.toLocaleString()}</p>
          <p>Total supply: {crypto.total_supply ? crypto.total_supply.toLocaleString() : 'No disponible'}</p>
          <p>Max supply: {crypto.max_supply ? crypto.max_supply.toLocaleString() : 'No disponible'}</p>
          <p>Beta value: {crypto.beta_value ? crypto.beta_value.toFixed(2) : 'No disponible'}</p>
          <p>first data at: {crypto.first_data_at ? new Date(crypto.first_data_at).toLocaleDateString() : 'No disponible'}</p>
          <p>last updated at: {crypto.last_updated ? new Date(crypto.last_updated).toLocaleDateString() : 'No disponible'}</p>
        </div>
      ) : (
        <p>Criptomoneda no encontrada.</p>
      )}
    </div>
  );
};

export default CryptoDetail;
