import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import "../components/layouts/Navbar";
import "../components/layouts/Footer";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";

function MyApp({ Component, pageProps }) {
  // to load bootstrap js
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
