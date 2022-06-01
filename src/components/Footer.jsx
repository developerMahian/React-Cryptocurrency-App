import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  GithubOutlined,
  SkypeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => (
  <footer className="footer">
    <div className="footer__nav">
      <Link to="/">Home</Link>
      <Link to="/cryptocurrencies">Cryptocurrencies</Link>
      {/* <Link to="/exchanges">Exchanges</Link> */}
      <Link to="/news">News</Link>
    </div>

    <div className="footer__my-info">
      <Button
        type="link"
        icon={<TwitterOutlined />}
        href="https://twitter.com/DeveloperMahian"
        target="_blank"
        rel="noreferrer"
      />

      <Button
        type="link"
        icon={<SkypeOutlined />}
        href="https://join.skype.com/invite/wecW1GItckDh"
        target="_blank"
        rel="noreferrer"
      />

      <Button
        type="link"
        icon={<GithubOutlined />}
        href="https://github.com/developerMahian"
        target="_blank"
        rel="noreferrer"
      />
    </div>

    <div className="footer__copyright">
      © 2022 Cryptoverse Made by{" "}
      <a
        href="https://join.skype.com/invite/wecW1GItckDh"
        target="_blank"
        rel="noreferrer"
      >
        <strong>Mahian Ahmed</strong>
      </a>{" "}
      | All Rights Reserved
    </div>
  </footer>
);

export default Footer;
