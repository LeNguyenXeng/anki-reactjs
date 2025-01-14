import { Col, Container, Row } from "react-bootstrap";
import "../css/WhyIsAnki.css";

function WhyIsAnki({ img, title, des, position }) {
  return (
    <Container>
      <div className="view-why-is-anki">
        {position === "right" ? (
          <Row>
            <Col xs={12} md={6} lg={6}>
              <h3 className="title-why-is-anki">{title}</h3>
              <p className="des-why-is-anki">{des}</p>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="view-img">
                <img className="banner-img" src={img} alt="" />
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className="view-img">
                <img className="banner-img" src={img} alt="" />
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <h3 className="title-why-is-anki">{title}</h3>
              <p className="des-why-is-anki">{des}</p>
            </Col>
          </Row>
        )}
      </div>
    </Container>
  );
}
export default WhyIsAnki;
