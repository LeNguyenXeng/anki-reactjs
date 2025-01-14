import { Card, Col, Container, Row } from "react-bootstrap";
import CardWhoIs from "./CardWhoIs";
import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Icon4 from "../images/icon4.png";
import "../css/Card.css";

function Intro() {
  const cardWhoIs = [
    {
      img: Icon1,
      title: "Ở trường",
      des: "Học theo nhóm từ của giáo viên hoặc bạn bè, bạn có thể tạo nhóm từ và chia sẻ cho các thành viên khác.",
      color: "#3A5AFF",
    },
    {
      img: Icon2,
      title: "Tại nơi làm việc",
      des: "Lúc mệt mỏi hãy dừng lại và lướt trái, lướt phải, bạn sẽ cải thiện khả năng ngôn ngữ của mình tăng một cách đáng kể.",
      color: "#FFC43B",
    },
    {
      img: Icon3,
      title: "Ở nhà",
      des: "Ôn luyện mọi lúc mọi nơi sẽ giúp bạn tăng khả năng nhớ từ vựng mỗi ngày.",
      color: "#3CC5FF",
    },
    {
      img: Icon4,
      title: "Ứng dụng học tập",
      des: "Là ứng dụng học tập với phương pháp đơn giản và mới lạ giúp bạn không nhàm chán trong con đường học tập của mình.",
      color: "#FF3B53",
    },
  ];
  return (
    <div >
      <Container>
        <Row>
          {cardWhoIs.map((item) => (
            <CardWhoIs
              img={item.img}
              title={item.title}
              des={item.des}
              color={item.color}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Intro;
