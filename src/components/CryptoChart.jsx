import { Row, Typography } from "antd";

const CryptoChart = ({ coinName, coinPrice, coinHistory }) => {
	const { Title } = Typography;

	console.log(coinHistory);

	return (
		<>
			<Row className="chart-header">
				<Title level={2} className="chart-title">
					{coinName}
				</Title>
			</Row>
		</>
	);
};

export default CryptoChart;
