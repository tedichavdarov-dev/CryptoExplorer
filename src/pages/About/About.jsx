import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">
          ABOUT <span className="gradient-text">CRYPTO TERMINAL</span>
        </h1>
        <div className="about-divider"></div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2 className="section-title">Nuestra Misión</h2>
          <p>
            CryptoExplorer es una plataforma educativa y de análisis en tiempo real que permite
            explorar las criptomonedas más populares del mercado. Proporcionamos datos actualizados
            sobre precios, capitalización de mercado, volumen y estadísticas detalladas de cada activo digital.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Características</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Datos en Tiempo Real</h3>
              <p>Acceso a información actualizada de las principales criptomonedas</p>
            </div>
            <div className="feature-card">
              <h3>Análisis Detallado</h3>
              <p>Estadísticas completas y métricas de mercado para cada crypto</p>
            </div>
            <div className="feature-card">
              <h3>Interfaz Rápida</h3>
              <p>Navegación fluida y diseño optimizado para traders</p>
            </div>
            <div className="feature-card">
              <h3>Comunidad Global</h3>
              <p>Únete a miles de traders y entusiastas del crypto</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">Tecnologías</h2>
          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">React Router</span>
            <span className="tech-badge">Axios</span>
            <span className="tech-badge">CoinPaprika API</span>
            <span className="tech-badge">CSS3</span>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">Información Legal</h2>
          <p className="disclaimer">
            CryptoExplorer es una plataforma educativa y de demostración. La información
            proporcionada no constituye asesoramiento financiero. El trading de criptomonedas
            conlleva riesgos significativos y puede resultar en la pérdida total de su inversión.
            Siempre realice su propia investigación antes de invertir.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
