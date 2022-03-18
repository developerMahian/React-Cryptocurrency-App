import millify from "millify";
import {
	useGetCryptoExchangesQuery,
	useGetCryptosQuery,
} from "../services/cryptoApi";
import { Avatar, Col, Collapse, Row, Typography } from "antd";

const Exchanges = () => {
	const { Text } = Typography;
	const { Panel } = Collapse;
	const { data, isFetching } = useGetCryptoExchangesQuery();
	// const exchangeData = data?.data?.exchanges;

	if (isFetching) return <h1>Fetching Data...</h1>;

	console.log(data);

	return (
		<>
			<Row>
				<Col span={6}>Exchanges</Col>
				<Col span={6}>24h Trade Volume</Col>
				<Col span={6}>Markets</Col>
				<Col span={6}>Change</Col>
			</Row>
			<Row>
				{/* {exchangesList.map((exchange) => ( */}
				<Col span={24}>
					<Collapse>
						<Panel
							// key={exchange.uuid}
							showArrow={false}
							header={
								// <Row key={exchange.uuid}>
								<Row>
									<Col span={6}>
										<Text>
											{/* <strong>{exchange.rank}.</strong> */}
											<strong>1.</strong>
										</Text>
										<Avatar
											className="exchange-image"
											// src={exchange.iconUrl}
										/>
										<Text>
											{/* <strong>{exchange.name}</strong> */}
											<strong>name</strong>
										</Text>
									</Col>
									{/* <Col span={6}>${millify(exchange.volume)}</Col>
										<Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
										<Col span={6}>{millify(exchange.marketShare)}%</Col> */}
									<Col span={6}>shit</Col>
									<Col span={6}>shit</Col>
									<Col span={6}>shit</Col>
								</Row>
							}
						>
							{/* {HTMLReactParser(exchange.description || "")} */}
						</Panel>
					</Collapse>
				</Col>
				{/* ))} */}
			</Row>
		</>
	);
};

export default Exchanges;
