import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-icon">₿</div>
        </div>
        <h2 className="profile-name">Crypto Trader Pro</h2>
        <p className="profile-wallet">0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb</p>
      </div>

      <div className="profile-description">
        <p>
          Trader profesional especializado en análisis técnico y trading de criptomonedas.
          Miembro activo de la comunidad crypto desde 2017.
        </p>
      </div>

      <div className="profile-stats">
        <h3>Estadísticas</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Portfolio Value</span>
            <span className="stat-value">$47,250.00</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Total Trades</span>
            <span className="stat-value">1,247</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Win Rate</span>
            <span className="stat-value">68.3%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Member Since</span>
            <span className="stat-value">2017</span>
          </div>
        </div>
      </div>

      <div className="profile-abilities">
        <h3>Holdings</h3>
        <ul>
          <li>₿ Bitcoin (BTC) - 0.5 BTC</li>
          <li>⟠ Ethereum (ETH) - 5.2 ETH</li>
          <li>◎ Solana (SOL) - 120 SOL</li>
          <li>⬡ Cardano (ADA) - 2,500 ADA</li>
        </ul>
      </div>

      <div className="profile-status">
        <p className="status-online">Trading Status: Active ✅</p>
      </div>
    </div>
  );
};

export default Profile;