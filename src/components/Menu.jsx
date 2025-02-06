import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../images/logo.png";
import "../css/Menu.css";
import { useNavigate } from "react-router-dom";
function Menu() {
  let navigate = useNavigate();

  const navigateBlogs = () => {
    navigate("/blogs");
  };
  const navigateHome = () => {
    navigate("/");
  };
  const navigatePrivacy = () => {
    navigate("/privacy");
  };
  const navigateService = () => {
    navigate("/service");
  };
  return (
    <Navbar expand="lg">
      <Container className="container">
        <Navbar.Brand onClick={navigateHome}>
          <img
            alt=""
            src={Logo}
            width="45"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          <span className="name_logo">Anki</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={navigateBlogs}>Bài viết</Nav.Link>
            <Nav.Link onClick={navigatePrivacy} >Điều khoản dịch vụ</Nav.Link>
            <Nav.Link onClick={navigateService}>Chính sách bảo mật </Nav.Link>
            <NavDropdown title="VN" id="basic-nav-dropdown">
              <NavDropdown.Item href="">VN</NavDropdown.Item>
              <NavDropdown.Item href="">EN</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Menu;
