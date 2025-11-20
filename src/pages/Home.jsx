import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3")
      .then((res) => {
        setCryptos(res.data); 
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
      <h1>Listado de Criptomonedas</h1>
      <div className="row">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          cryptos.map((crypto) => (
            Return (
              <UserCard
                key={crypto.id}
                name={crypto.name}
                symbol={crypto.symbol}
                price={crypto.current_price}
              ></UserCard>
            )
          ))
        )}
      </div>
    </div>
  )
}

export default Home;
