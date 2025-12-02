import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

import Home from "./pages/Home/Home";
import CryptoDetail from "./pages/CryptoDetails/CryptoDetail.jsx";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

function App() {
  return (
    <div className="bg-black text-light min-vh-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto/:id" element={<CryptoDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
