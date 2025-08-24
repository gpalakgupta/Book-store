import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />  {/* Yahan pe child page ka content aayega */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
