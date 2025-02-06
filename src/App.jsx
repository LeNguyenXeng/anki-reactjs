import Banner from "./components/Banner";
import Intro from "./components/Intro";
import "./App.css";
import WhyIsAnki from "./components/WhyIsAnki";
import Banner1 from "../src/images/banner1.png";
import Banner2 from "../src/images/banner2.png";
import Banner3 from "../src/images/banner3.png";
import Slide from "./components/Slide";
import Article from "./components/Article";
import { useEffect, useState } from "react";
import { getPosts } from "./service/posts";

function App() {
  const banners = [
    {
      id: 1,
      img: Banner1,
      title: "Gói từ vựng được chọn lọc",
      des: "Các gói từ vựng đã được Anki lựa chọn và chuẩn hóa một cách chỉnh chu",
      position: "left",
    },
    {
      id: 2,
      img: Banner2,
      title: "Phương pháp lặp thông minh",
      des: "Với phương pháp lặp từ vựng thông minh. Anki sẽ giúp bạn tập trung vào những từ vựng khó nhất đối với bạn",
      position: "right",
    },
    {
      id: 3,
      img: Banner3,
      title: "Cách học thú vị",
      des: "Chỉ cần đoán từ và quẹt trái, quẹt phải, bạn đã có thể thuần thục một cách nhánh chóng các bộ từ vựng",
      position: "left",
    },
  ];

  const [articles, setArticles] = useState([]);
  const getPostsApi = async () => {
    try {
      const data = await getPosts(3);
      setArticles(data);
    } catch (error) {}
  };
  useEffect(() => {
    getPostsApi();
  }, []);

  return (
    <>
      <Banner />
      <div className="intro">
        <p className="anki-title">Anki dành cho bạn</p>
        <div className="line"></div>
        <Intro />
      </div>
      <div className="why-is-anki">
        <p className="anki-title">Tại sao lại là Anki?</p>
        <div className="line"></div>
        {banners.map((item) => (
          <WhyIsAnki
            key={item.id}
            img={item.img}
            title={item.title}
            des={item.des}
            position={item.position}
          />
        ))}
      </div>
      <div className="cont-slide">
        <p className="anki-title-slide">Trải nghiệm của khách hàng</p>
        <div className="line-slide"></div>
        <Slide />
      </div>
      <div className="why-is-anki">
        <p className="anki-title">Bài Viết</p>
        <div className="line"></div>
        <Article data={articles} />
      </div>
    </>
  );
}
export default App;
