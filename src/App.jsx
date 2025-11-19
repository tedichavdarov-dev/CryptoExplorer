import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CryptoDetail from "./pages/CryptoDetail.jsx";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
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
