import axios from "axios";
import { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [valueInput, setvalueInput] = useState<string>("");
  const [valuePassword, setvaluePassword] = useState<string>("");
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueI = e.target.value;
    setvalueInput(valueI);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueP = e.target.value;
    setvaluePassword(valueP);
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();
      const item = {
        username: valueInput,
        password: valuePassword,
      };
      const res = await axios.post(
        "https://www.melivecode.com/api/login",
        item
      );
      const loginUser = res.data;
      console.log(loginUser);
      navigate("/home");
    } catch (error) {
      alert("Username and password is wrong");
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form className="box-login">
        <h1>LOGIN</h1>
        <div className="box-username">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="Username..."
            onChange={handleInput}
            className="userid"
          />
        </div>
        <div className="box-password">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Password..."
            onChange={handlePassword}
            className="userpassword"
          />
        </div>
        <div className="btn-login" onClick={handleSubmit}>
          <p>Login</p>
        </div>
        <div
          className="btn-signIn"
          onClick={() => {
            navigate("/signin");
          }}
        >
          <p>SignIn</p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
