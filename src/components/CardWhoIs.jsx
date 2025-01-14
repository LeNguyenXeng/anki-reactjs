import { Card, Col } from "react-bootstrap";
import "../css/Intro.css";

function CardWhoIs({img, title, des, color}) {
  return (
    <Col xs={12} md={4} lg={3}>
      <Card className="card-img">
        <div className="bg-icon" style={{backgroundColor: color}}>
          <img  className="img-icon" src={img} alt="" />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {des}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );  
}
export default CardWhoIs;

