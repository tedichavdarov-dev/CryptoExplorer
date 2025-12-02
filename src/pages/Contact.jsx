import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    wallet: "",
    cryptoFavorita: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.wallet) {
      alert("Por favor rellena nombre, correo y wallet para unirte al club crypto.");
      return;
    }

    alert(
      `¡Bienvenido al club ${formData.nombre}! Tu wallet ha sido registrada y pronto recibirás las últimas noticias crypto.`
    );

    setFormData({
      nombre: "",
      correo: "",
      wallet: "",
      cryptoFavorita: ""
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">
          <span className="gradient-text">JOIN</span> THE CLUB
        </h1>
        <p className="contact-subtitle">Únete a nuestra comunidad crypto exclusiva</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label className="form-label">
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>

        <label className="form-label">
          Correo:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>

        <label className="form-label">
          Wallet Address:
          <input
            type="text"
            name="wallet"
            value={formData.wallet}
            onChange={handleChange}
            className="form-input"
            placeholder="0x..."
            required
          />
        </label>

        <label className="form-label">
          Criptomoneda favorita:
          <input
            type="text"
            name="cryptoFavorita"
            value={formData.cryptoFavorita}
            onChange={handleChange}
            className="form-input"
            placeholder="Bitcoin, Ethereum, etc."
          />
        </label>

        <button type="submit" className="form-button">
          Join Now
        </button>
      </form>
    </div>
  );
};

export default Contact;
