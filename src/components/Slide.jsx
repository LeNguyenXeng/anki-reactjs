import {
  Carousel,
  Container,
} from "react-bootstrap";
import "../css/Slider.css";
import LeoNguyen from "../images/leonguyen.jpg";
import Martha from "../images/martha.jpg";
import Lealia from "../images/lealia.jpg";
import Slider from "./Slider";

function Slide() {
  const sliderItem = [
    {
      titleLeft:
        "Anki đã chinh phục trái tim của tôi với khả năng học mạnh mẽ của nó.",
      img: Martha,
      name: "Martha",
      des: "Anki là một ứng dụng học tập cực kỳ mạnh mẽ và linh hoạt. Nó cho phép bạn tạo và quản lý thẻ học để nhớ từ vựng, kiến thức, hoặc bất kỳ thông tin nào bạn muốn ghi nhớ. Điểm mạnh lớn nhất của nó nằm ở khả năng tùy chỉnh và tích hợp các thuật toán thông minh giúp bạn học thẻ flash một cách hiệu quả. Nếu bạn đang tìm cách học tiếng hoặc bất kỳ chủ đề nào, Anki là một công cụ bạn không nên bỏ lỡ",
    },
    {
      titleLeft:
        "Tôi đã nghiện Anki vì khả năng giữ thông tin trong trí nhớ của nó.",
      img: LeoNguyen,
      name: "Leo Nguyen",
      des: "Anki là người bạn tốt nhất của người học ngoại ngữ. Hệ thống lặp lại khoảng thời gian của nó làm cho việc ghi nhớ từ vựng trở nên dễ dàng. Khả năng thêm âm thanh, hình ảnh và ví dụ vào các thẻ flashcard nâng cao trải nghiệm học ngoại ngữ. Các bộ flashcard được cộng đồng rộng lớn đóng góp của Anki bao gồm gần như mọi ngôn ngữ, từ ngôn ngữ phổ biến đến những ngôn ngữ ít phổ biến, biến nó thành một kho tàng đáng quý cho các người yêu thích ngoại ngữ. Tính linh hoạt của ứng dụng cho phép bạn điều chỉnh hành trình học ngoại ngữ theo nhu cầu cụ thể của bạn, đảm bảo tiến bộ đều đặn. Nếu bạn nghiêm túc muốn thống thạo một ngôn ngữ mới, Anki là người bạn không thể thiếu trong hành trình chinh phục khả năng thông thạo ngoại ngữ của bạn.",
    },
    {
      titleLeft: "Tôi thực sự yêu thích Anki và muốn giới thiệu nó đến bạn.",
      img: Lealia,
      name: "Lealia",
      des: "Anki là ứng dụng học ngoại ngữ hàng đầu của tôi, và tôi rất phấn khích để giới thiệu nó đến các học viên của mình. Với các thẻ flashcard có thể tùy chỉnh, nó phù hợp với mọi trình độ học viên. Hệ thống lặp lại khoảng thời gian đảm bảo bạn ghi nhớ từ vựng một cách dễ dàng. Hỗ trợ đa phương tiện và một cộng đồng rộng lớn biến nó thành một công cụ mạnh mẽ. Hãy sử dụng Anki và quan sát kỹ năng ngôn ngữ của bạn tiến bộ đáng kinh ngạc.",
    },
  ];
  return (
    <Container>
      <Carousel>
        {sliderItem.map((item, index) => (
          <Carousel.Item key={index}>
            <Slider
              img={item.img}
              titleLeft={item.titleLeft}
              name={item.name}
              des={item.des}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
export default Slide;
