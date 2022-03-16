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

			<main>
				<Layout className="main-container">
					<div className="routes">
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/news" element={<News />} />
							<Route path="/exchanges" element={<Exchanges />} />
							<Route path="/crypto/:coinId" element={<CryptoDetails />} />
							<Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
						</Routes>
					</div>
				</Layout>

				<Footer />
			</main>
		</div>
	);
};

export default App;
