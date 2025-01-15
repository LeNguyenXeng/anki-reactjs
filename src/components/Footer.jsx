import { Col, Container, Navbar, Row } from "react-bootstrap";
import "../css/Footer.css";
import Logo from "../images/logo.png";
import AppStore from "../images/appstore.png";
import CHPlay from "../images/chplay.png";
import SocialMedia from "./SocialMedia";
import Download from "./Download";

function Footer() {
  const socialMeida = [
    {
      icon: "bi bi-facebook",
    },
    {
      icon: "bi bi-twitter",
    },
    {
      icon: "bi bi-tiktok",
    },
  ];
  const download = [
    {
      img: AppStore,
    },
    {
      img: CHPlay,
    },
  ];
  return (
    <Container>
      <Row>
        <Col xs={12} md={4} lg={4}>
          {" "}
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="47"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            <span className="name-logo">Anki</span>
            <div className="text-footer">
              <p>Chính sách bảo mật</p>
              <p className="text-footer-2">Điều khoản dịch vụ</p>
            </div>
          </Navbar.Brand>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <div>
            <p className="dowload">Tải app tại đây:</p>
            <div className="app">
              {download.map((dowloads) => (
                <Download img={dowloads.img} />
              ))}
            </div>
            <p className="copy">Copyright @2025, Anki All rights reserved.</p>
          </div>
        </Col>
        <Col xs={12} md={4} lg={4}  className="socail-full">
          <div>
            <p className="contact">Theo dõi chúng tôi tại</p>
            <div className="social-media">
              {socialMeida.map((item) => (
                <SocialMedia icon={item.icon} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
