import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCryptoDetail } from "../api/CryptoApi.js";

const CryptoDetail = () => {
  const { id } = useParams(); // Obtenemos el ID desde la URL
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCryptoDetail(id)
      .then((res) => {
        setCrypto(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar detalle:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-5">Cargando detalle...</p>;
  if (!crypto) return <p className="text-center mt-5 text-danger">Criptomoneda no encontrada</p>;

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">
        ← Volver al listado
      </Link>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-center mb-4">
            <img src={crypto.image.large} alt={crypto.name} width="60" className="me-3" />
            <h2>{crypto.name} ({crypto.symbol.toUpperCase()})</h2>
          </div>

          <p className="mb-2"><strong>Precio actual:</strong> ${crypto.market_data.current_price.usd.toLocaleString()}</p>
          <p className="mb-2"><strong>Ranking global:</strong> #{crypto.market_cap_rank}</p>
          <p className="mb-2"><strong>Market Cap:</strong> ${crypto.market_data.market_cap.usd.toLocaleString()}</p>
          <p className="mb-2"><strong>Volumen 24h:</strong> ${crypto.market_data.total_volume.usd.toLocaleString()}</p>
          <p className="mb-2"><strong>Circulating Supply:</strong> {crypto.market_data.circulating_supply.toLocaleString()}</p>

          <div className="mt-3">
            <h5>Descripción:</h5>
            <p dangerouslySetInnerHTML={{ __html: crypto.description.en || "Sin descripción" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetail;
