import { Link } from "react-router-dom";

const Footer = () => (
	<footer className="footer">
		<div className="footer__nav">
			<Link to="/">Home</Link>
			<Link to="/cryptocurrencies">Cryptocurrencies</Link>
			{/* <Link to="/exchanges">Exchanges</Link> */}
			<Link to="/news">News</Link>
		</div>
		<div className="footer__copyright">
			© 2022 Cryptoverse All Rights Reserved
		</div>
	</footer>
);

export default Footer;
