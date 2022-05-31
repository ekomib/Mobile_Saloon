import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LoginModal from "./OptionModal";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Fusion Braids</title>
      </Head>

      <header>
        <NavBar />
      </header>

      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
      <LoginModal />
    </div>
  );
};

export default Layout;
