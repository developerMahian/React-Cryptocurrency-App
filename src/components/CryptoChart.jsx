import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import millify from "millify";

const CryptoChart = ({ coinName, coinPrice, coinHistory }) => {
	const coinHistoryPrices = [];
	const coinHistoryTimes = [];
	const { Title } = Typography;

	for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
		coinHistoryPrices.push(coinHistory?.data?.history[i].price);
		coinHistoryTimes.push(
			new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
		);
	}

	const chartData = {
		labels: coinHistoryTimes,
		datasets: [
			{
				label: "Price in USD",
				data: coinHistoryPrices,
				fill: false,
				backgroundColor: "#0071bd",
				borderColor: "#0071bd",
			},
		],
	};

	const chartOptions = {
		scales: {
			y: {
				beginAtZero: false,
			},
			x: {
				beginAtZero: false,
			},
		},
	};

	return (
		<>
			<Row className="chart-header">
				<Title level={2} className="chart-title">
					{coinName} Price Chart
				</Title>
				<Col className="price-container">
					<Title level={5} className="price-change">
						Total Change: {coinHistory?.data?.change}%
					</Title>
					<Title level={5} className="current-price">
						Current {coinName} Price: {`$${millify(coinPrice)}`}
					</Title>
				</Col>
			</Row>

			<Line data={chartData} options={chartOptions}></Line>
		</>
	);
};

export default CryptoChart;
