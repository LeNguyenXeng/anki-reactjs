import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../css/Banner.css";
import Banner1 from "../images/banner.png";
function Banner() {
  return (
    <Container className="cont">
      <Row>
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <Card.Text className="title">Make learning fun!</Card.Text>
              <Card.Text className="des">Học mọi thứ nhanh chóng với Anki</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <img src={Banner1} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
export default Banner;
