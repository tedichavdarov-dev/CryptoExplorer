import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCryptoList } from "../api/CryptoApi.js";

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ useEffect para llamar a la API al montar el componente
  useEffect(() => {
    getCryptoList()
      .then((res) => {
        setCryptos(res.data); // Guardamos los datos en el estado
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar criptomonedas:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-5">Cargando criptomonedas...</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Top Criptomonedas</h1>

      <div className="row">
        {cryptos.map((crypto) => (
          <div key={crypto.id} className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <img src={crypto.image} alt={crypto.name} width="40" className="me-3" />
                <div>
                  <h5 className="card-title">{crypto.name}</h5>
                  <p className="card-text mb-1">Precio: ${crypto.current_price.toLocaleString()}</p>
                  <p
                    className={`mb-0 ${
                      crypto.price_change_percentage_24h >= 0 ? "text-success" : "text-danger"
                    }`}
                  >
                    {crypto.price_change_percentage_24h.toFixed(2)}% (24h)
                  </p>
                  <Link to={`/crypto/${crypto.id}`} className="btn btn-primary btn-sm mt-2">
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
