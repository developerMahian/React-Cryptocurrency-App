import { useState } from "react";
import moment from "moment";
import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const News = ({ simplified }) => {
	const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newsCategory: newsCategory,
		newsCount: simplified ? 6 : 15,
	});
	const { data: coinData } = useGetCryptosQuery(60);

	if (!cryptoNews?.value) return <h1>Fetching Data...</h1>;

	const { Option } = Select;
	const { Title } = Typography;
	const demoImg =
		"https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

	return (
		<>
			<Row gutter={[22, 22]}>
				{simplified ? null : (
					<Col span={24}>
						<Select
							className="select-news"
							showSearch
							placeholder="Select a Topic"
							optionFilterProp="children"
							onChange={(value) => setNewsCategory(value)}
							filterOption={(inputValue, option) =>
								option.children.toLowerCase().indexOf(inputValue.toLowerCase())
							}
						>
							<Option value="Cryptocurrency">Cryptocurrency</Option>
							{coinData?.data?.coins.map((coin) => (
								<Option value={coin.name}>{coin.name}</Option>
							))}
						</Select>
					</Col>
				)}

				{cryptoNews?.value.map((news, i) => (
					<Col xs={24} sm={12} lg={8} key={i}>
						<Card className="news-card" hoverable>
							<a href={news.url} target="_blank" rel="noreferrer">
								<div className="news-image-container">
									<Title className="news-title" level={4}>
										{news.name}
									</Title>
									<img
										src={news?.image?.thumbnail?.contentUrl || demoImg}
										alt="News Image"
										width={80}
										height={80}
									/>
								</div>
								<p>
									{news.description.length > 140
										? `${news.description.substring(0, 140)}...`
										: news.description}
								</p>
								<div className="provider-container">
									<div>
										<Avatar
											src={
												news.provider[0]?.image?.thumbnail?.contentUrl ||
												demoImg
											}
											alt="News Provider"
											style={{ marginRight: "10px" }}
										/>
										<p>{news.provider[0]?.name}</p>
									</div>
									<p>{moment(news.datePublished).startOf("ss").fromNow()}</p>
								</div>
							</a>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
};

export default News;
