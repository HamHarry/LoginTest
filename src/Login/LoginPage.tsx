import axios from "axios";
import { useState } from "react";

const LoginPage = () => {
  const [valueInput, setvalueInput] = useState<string>("");
  const [valuePassword, setvaluePassword] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueI = e.target.value;
    setvalueInput(valueI);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueP = e.target.value;
    setvaluePassword(valueP);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const item = {
        username: valueInput,
        password: valuePassword,
      };
      console.log(item);

      const res = await axios.post(
        "https://www.melivecode.com/api/login",
        item
      );
      const loginUser = res.data;
      console.log(loginUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" placeholder="Username..." onChange={handleInput} />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Password..."
          onChange={handlePassword}
        />
        <input type="submit" />
      </form>
      <div></div>
    </div>
  );
};

export default LoginPage;
