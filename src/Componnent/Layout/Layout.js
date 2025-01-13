"use client";
import Footer from "./Footer/Footer";
import Manubar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Manubar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
