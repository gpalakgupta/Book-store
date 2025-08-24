import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import FeaturedBooks from "./components/FeaturedBooks.jsx";
import LoginPage from "./components/Login.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Sabhi routes Layout ke andar render honge */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<FeaturedBooks />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<h1>Cart Page Coming Soon!</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}
