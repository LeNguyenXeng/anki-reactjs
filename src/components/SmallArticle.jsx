import { Card, Col } from "react-bootstrap";
import "../css/Article.css";
import moment from "moment/moment";

function SmallArticle({ img, title, des, date }) {
  return (
    <Col xs={12} md={6} lg={4}>
      <div className="border-box">
        <Card>
          <Card.Img className="card-border-img" variant="top" src={img} />
          <Card.Body>
            <Card.Title className="card-border-title">{title}</Card.Title>
            <Card.Text className="card-border-des">
              <p dangerouslySetInnerHTML={{ __html: des }}></p>
            </Card.Text>
            <Card.Text className="card-border-date">
              {/* {date} */}
              {moment(date).format('DD/MM/yyyy')}

            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}
export default SmallArticle;
