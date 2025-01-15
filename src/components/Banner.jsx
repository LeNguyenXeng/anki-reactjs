import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../css/Banner.css";
import Banner1 from "../images/banner.png";
function Banner() {
  return (
    <Container className="cont">
      <Row>
        <Col xs={12} md={6} xl={6} lg={6}>
          <Card>
            <Card.Body>
              <Card.Text className="title">Make learning fun!</Card.Text>
              <Card.Text className="des">Học mọi thứ nhanh chóng với Anki</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}  xl={6} lg={6}>
          <img className="banner" src={Banner1} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
export default Banner;
