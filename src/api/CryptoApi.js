import axios from "axios";

// Creamos una instancia de Axios con la URL base de CoinGecko
const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

// ✅ Obtener lista de criptomonedas
export const getCryptoList = () => {
  return api.get("/coins/markets", {
    params: {
      vs_currency: "usd",      // Precio en USD
      order: "market_cap_desc", // Orden por capitalización de mercado
      per_page: 50,             // Cantidad de monedas a traer
      page: 1,                  // Página 1
      sparkline: false,
    },
  });
};

// ✅ Obtener detalle de una criptomoneda por ID
export const getCryptoDetail = (id) => {
  return api.get(`/coins/${id}`, {
    params: {
      localization: false,       // Sin traducciones
      tickers: false,
      market_data: true,
      community_data: false,
      developer_data: false,
      sparkline: false,
    },
  });
};

export default api;
