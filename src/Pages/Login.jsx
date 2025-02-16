import { Button, Container, Form } from "react-bootstrap";
import Logo from "../images/logo.png";
import "../css/Login.css";
import { useState } from "react";
import { login } from "../service/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const validate = () => {
    let error = false;
    if (userName.length === 0) {
      setErrorUserName("Vui lòng nhập UserName");
      error = true;
    }
    if (password.length === 0) {
      setErrorPassword("Vui lòng nhập Password");
      error = true;
    }
    return error;
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) {
      try {
        const accountInfo = {
          username: userName,
          password,
        };
        const res = await login(accountInfo);
        console.log(res);
        localStorage.setItem("token", res?.accessToken);
        toast.success("Đăng nhập thành công");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Container className="login-form">
      <div className="sign-in__wrapper">
        <div className="sign-in__backdrop"></div>
        <Form className="shadow p-4 bg-white rounded">
          <img
            className="img-thumbnail mx-auto d-block mb-2"
            src={Logo}
            alt="logo"
          />
          <div className="h4 mb-2 text-center">Đăng Nhập</div>
          <div />
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>User:</Form.Label>
            <Form.Control
              value={userName}
              type="text"
              placeholder="Nhập userName"
              required
              onChange={changeUserName}
            />
            {errorUserName && <p className="error">{errorUserName}</p>}
          </Form.Group>
          <Form.Group className="mb-4" controlId="password">
            <Form.Label>Mật khẩu:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              required
              value={password}
              onChange={changePassword}
            />
            {errorPassword && <p className="error">{errorPassword}</p>}
          </Form.Group>
          <Button
            onClick={handleLogin}
            className="w-100"
            variant="primary"
            type="submit"
          >
            Đăng Nhập
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </Container>
  );
}
export default Login;
