import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Avatar, Button } from "antd";
import {
  HomeOutlined,
  // MoneyCollectOutlined,
  FundOutlined,
  BulbOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/logo.png";

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
      <div className="logo-container">
        <Link to="/" className="logo">
          <Avatar src={icon} size="large" />
          <span className="logo-name">Cryptoverse</span>
        </Link>

        <Button
          className="menu-control-container"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <MenuOutlined />
        </Button>
      </div>

      <div
        style={{
          visibility: !isNavOpen && "hidden",
          transform: !isNavOpen && "scaleY(0)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Menu theme="dark" mode="inline" className="navigation">
          <Menu.Item key="1" icon={<HomeOutlined size={12} />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          {/* <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
						<Link to="/exchanges">Exchanges</Link>
					</Menu.Item> */}
          <Menu.Item key="3" icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
