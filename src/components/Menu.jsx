import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../images/logo.png";
import "../css/Menu.css";
function Menu() {
  return (
    <Navbar expand="lg">
      <Container className="container">
        <Navbar.Brand href="">
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
          <Nav.Link href="">Bài viết</Nav.Link>
          <Nav.Link href="">Điều khoản dịch vụ</Nav.Link>
          <Nav.Link href="">Chính sách bảo mật </Nav.Link>
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
