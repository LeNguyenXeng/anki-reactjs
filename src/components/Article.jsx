import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Welcome2025 from "../images/welcome-2025.jpg";
import Noel from "../images/noel.jpg";
import TuVung from "../images/tu-vung-tieng-anh-co-tam-quan-trong-nhu-the-nao.png";
import "../css/Article.css";
import SmallArticle from "./SmallArticle";

function Article() {
  const article = [
    {
      img: Welcome2025,
      title:
        "Learn English Effectively with Anki, Kickstart the New Year with a Free Month!",
      des: "The new year is the perfect time to set fresh goals and dive into learning a new language. If you’ve been struggling to find an effective method to boost your English skills, Anki might just be the tool you need. Let’s explore how you can leverage this powerful app to learn English",
      date: "26/12/2024",
    },
    {
      img: Noel,
      title: "Christmas, A Festive Season and a Fun Way to Learn English",
      des: "The Christmas season is here, bringing with it chilly weather, twinkling lights, and festive cheer everywhere. It’s not just a time for family gatherings and warm wishes but also an excellent opportunity to learn English in a fun and natural way.",
      date: "24/12/2024",
    },
    {
      img: TuVung,
      title: "7 Cách Học Từ Vựng Tiếng Anh Hiệu Quả",
      des: "Học từ vựng tiếng Anh là một phần quan trọng trong hành trình chinh phục ngôn ngữ này. Tuy nhiên, để nhớ nhiều từ vựng, hiểu đúng nghĩa và áp dụng hiệu quả thì không phải ai cũng biết cách. Trong bài viết này, chúng tôi sẽ chia sẻ 7 phương pháp giúp bạn học từ vựng hiệu quả nhất.",
      date: "11/12/2024",
    },
  ];
  return (
    <Container className="cont-art">
      <Row>
        {article.map((item) => (
          <SmallArticle title={item.title} img={item.img} des={item.des} date={item.date} />
        ))}
      </Row>
      <div>
        <p className="see-more">Xem thêm</p>
      </div>
    </Container>
  );
}
export default Article;
