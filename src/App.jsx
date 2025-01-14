import { Container, Navbar } from "react-bootstrap";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import "./App.css";
import WhyIsAnki from "./components/WhyIsAnki";
import Banner1 from "../src/images/banner1.png"
import Banner2 from "../src/images/banner2.png";
import Banner3 from "../src/images/banner3.png";

function App() {
  const banners = [
    {
      img: Banner1,
      title: "Gói từ vựng được chọn lọc",
      des: "Các gói từ vựng đã được Anki lựa chọn và chuẩn hóa một cách chỉnh chu",
      position: "left",
    },
    {
      img: Banner2,
      title: "Phương pháp lặp thông minh",
      des: "Với phương pháp lặp từ vựng thông minh. Anki sẽ giúp bạn tập trung vào những từ vựng khó nhất đối với bạn",
      position: "right",
    },
    {
      img: Banner3,
      title: "Cách học thú vị",
      des: "Chỉ cần đoán từ và quẹt trái, quẹt phải, bạn đã có thể thuần thục một cách nhánh chóng các bộ từ vựng",
      position: "left",
    },
  ];
  return (
    <div>
      <Menu />
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
          <WhyIsAnki img={item.img} title={item.title} des={item.des} position={item.position} />
        ))}
      </div>
    </div>
  );
}
export default App;
