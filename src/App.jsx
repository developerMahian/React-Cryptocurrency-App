import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
	Homepage,
	Exchanges,
	Cryptocurrencies,
	CryptoDetails,
	News,
} from "./pages";
import { Footer, Navbar } from "./components";

import "./App.scss";

const App = () => {
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
