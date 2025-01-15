import { Card, Carousel, Col, Container, Figure, Row } from "react-bootstrap";

function Slider({ titleLeft, img, name, des }) {
  return (
    
      <Row>
        <Col xs={12} md={6} lg={6} className="row-comment">
          <Row className="row-border">
            <Col lg={8}>
              <div className="view-rate">
                <h1 className="text-left">{titleLeft}</h1>
                <div className="slider_arround"></div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="view-image">
                <Figure.Image src={img} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <div className="view-slide">
            <Card>
              <Card.Body>
                <Card.Title className="slide-title">{name}</Card.Title>
                <Card.Text className="slide-des">{des}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
  );
}

export default Slider;
