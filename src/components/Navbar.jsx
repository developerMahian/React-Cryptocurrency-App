import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Typography, Avatar, Button } from "antd";
import {
	HomeOutlined,
	MoneyCollectOutlined,
	FundOutlined,
	BulbOutlined,
	MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(true);
	const [screenSize, setScreenSize] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		screenSize < 800 ? setIsNavOpen(false) : setIsNavOpen(true);
	}, [screenSize]);

	return (
		<nav className="navbar">
			<Link to="/" className="logo-container">
				<Avatar src={icon} />
				<span className="logo-name">Cryptoverse</span>
				<Button
					className="menu-control-container"
					onClick={() => setIsNavOpen(!isNavOpen)}
				>
					<MenuOutlined />
				</Button>
			</Link>

			{isNavOpen && (
				<Menu theme="dark" mode="inline" className="navigation">
					<Menu.Item key="1" icon={<HomeOutlined size={12} />}>
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item key="2" icon={<FundOutlined />}>
						<Link to="/cryptocurrencies">Cryptocurrencies</Link>
					</Menu.Item>
					<Menu.Item key="3" icon={<BulbOutlined />}>
						<Link to="/news">News</Link>
					</Menu.Item>
				</Menu>
			)}
		</nav>
	);
};

export default Navbar;
