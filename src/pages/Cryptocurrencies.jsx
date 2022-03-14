import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Card, Row, Col, Input } from "antd";
import millify from "millify";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
	const cardCount = simplified ? 4 : 100;
	const { data, isLoading } = useGetCryptosQuery(cardCount);
	const [cryptos, setCryptos] = useState(data?.data?.coins);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const filteredItem = data?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setCryptos(filteredItem);
	}, [data, searchTerm]);

	if (isLoading) return <h1>Fetching Data...</h1>;

	return (
		<>
			{simplified ? null : (
				<div className="search-crypto">
					<Input
						type="text"
						placeholder="Search Cryptocurrencies"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			)}

			<Row gutter={[24, 24]} className="crypto-card-container">
				{cryptos?.map((currency) => (
					<Col
						xs={24}
						sm={12}
						lg={6}
						className="crypto-card"
						key={currency.rank}
					>
						<Link to={`/crypto/${currency.rank}`}>
							<Card
								title={currency.name}
								extra={<img className="crypto-image" src={currency.iconUrl} />}
								hoverable
							>
								<p>Price: {millify(currency.price)}</p>
								<p>Market Cap: {millify(currency.marketCap)}</p>
								<p>Daily Change: {currency.change}%</p>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Cryptocurrencies;
