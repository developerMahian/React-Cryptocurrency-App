// import millify from "millify";
// import {
// 	useGetCryptoExchangesQuery,
// 	useGetCryptosQuery,
// } from "../services/cryptoApi";
// import { Avatar, Col, Collapse, Row, Typography } from "antd";

// const Exchanges = () => {
// 	const { data, isFetching } = useGetCryptoExchangesQuery("Qwsogvtv82FCd");
// 	const exchangeData = data?.data;
// 	const { data: coinData } = useGetCryptosQuery(60);

// 	if (isFetching) return <PageLoading />;

// 	console.log(exchangeData, coinData);

// 	const { Text } = Typography;
// 	const { Panel } = Collapse;

// 	return (
// 		<>
// 			<Row>
// 				<Col span={6}>Exchanges</Col>
// 				<Col span={6}>24h Trade Volume</Col>
// 				<Col span={6}>Markets</Col>
// 				<Col span={6}>Change</Col>
// 			</Row>
// 			<Row>
// 				<Col span={24}>
// 					<Collapse>
// 						<Panel
// 							showArrow={false}
// 							header={
// 								<Row style={{ width: "100%" }}>
// 									<Col span={6}>
// 										<Avatar
// 											className="exchange-image"
// 											// src={exchange.iconUrl}
// 										/>
// 										<Text>
// 											{/* <strong>{exchange.name}</strong> */}
// 											<strong>name</strong>
// 										</Text>
// 									</Col>
// 									{/* <Col span={6}>${millify(exchange.volume)}</Col>
// 										<Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
// 										<Col span={6}>{millify(exchange.marketShare)}%</Col> */}
// 									<Col span={6}>shit</Col>
// 									<Col span={6}>shit</Col>
// 									<Col span={6}>shit</Col>
// 								</Row>
// 							}
// 						>
// 							{/* {HTMLReactParser(exchange.description || "")} */}
// 						</Panel>
// 					</Collapse>
// 				</Col>
// 			</Row>
// 		</>
// 	);
// };

// export default Exchanges;
