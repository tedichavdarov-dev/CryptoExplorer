import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCryptoDetail } from "../api/CryptoApi.js";

const CryptoDetail = () => {
  const { id } = useParams();
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
};

export default CryptoDetail;
