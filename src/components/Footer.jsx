import { Link } from "react-router-dom";
import { Typography, Space } from "antd";

const Footer = () => (
	<footer>
		<Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
			Cryptoverse <br />
			All Rights Reserved
		</Typography.Title>
		<Space>
			<Link to="/">Home</Link>
			<Link to="/exchanges">Exchanges</Link>
			<Link to="/news">News</Link>
		</Space>
	</footer>
);

export default Footer;
