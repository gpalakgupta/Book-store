import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import FeaturedBooks from "./components/FeaturedBooks.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Signup from "./pages/signUp.jsx";
import ForgotPassword from "./pages/forgetPassword.jsx";
import CartPage from "./pages/cartPage.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Sabhi routes Layout ke andar render honge */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<FeaturedBooks />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
