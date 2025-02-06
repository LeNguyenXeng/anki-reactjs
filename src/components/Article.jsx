import { Container, Row } from "react-bootstrap";

import "../css/Article.css";
import SmallArticle from "./SmallArticle";

function Article({data}) {  
  return (
    <Container className="cont-art">
      <Row>
        {data.map((item) => (
          <SmallArticle key={item.id} title={item?.title?.rendered} img={item?.better_featured_image?.source_url} des={item?.excerpt?.rendered} date={item.date} />
        ))}
      </Row>
     
    </Container>
  );
}
export default Article;
