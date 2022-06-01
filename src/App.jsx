import React from "react";
import { Routes, Route } from "react-router-dom";

import { Homepage, Cryptocurrencies, CryptoDetails, News } from "./pages";
import { Footer, Navbar } from "./components";

import "./App.scss";

const App = () => {
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.info = () => {};
    console.error = () => {};
    console.debug = () => {};
  }

  return (
    <div className="app">
      <header>
        <Navbar />
      </header>

      <div className="main-wrapper">
        <main className="main-container">
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/news" element={<News />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              {/* <Route path="/exchanges" element={<Exchanges />} /> */}
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
