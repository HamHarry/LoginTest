import { useNavigate } from "react-router-dom";
import "./Signin.css";
import { useState } from "react";

const Signin = () => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handlefname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valuefname = e.target.value;
    setFname(valuefname);
  };
  const handlelname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valuelname = e.target.value;
    setLname(valuelname);
  };
  const handleusername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valuefusername = e.target.value;
    setUsername(valuefusername);
  };
  const handlepassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valuefpassword = e.target.value;
    setPassword(valuefpassword);
  };
  const handleemail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueemail = e.target.value;
    setEmail(valueemail);
  };

  const handlesubmit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const item = {
        fname: fname,
        lname: lname,
        username: username,
        password: password,
        email: email,
        avatar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      };
      navigate("/");
      console.log(item);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin">
      <form className="warp-signin">
        <h1>Sign In</h1>
        <div className="first-name">
          <label htmlFor="fname">Frist Name</label>
          <input
            type="text"
            placeholder="first name..."
            onChange={handlefname}
          />
        </div>
        <div className="last-name">
          <label htmlFor="lname">Last Name: </label>
          <input
            type="text"
            placeholder="last name..."
            onChange={handlelname}
          />
        </div>
        <div className="username">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            placeholder="username..."
            onChange={handleusername}
          />
        </div>
        <div className="password">
          <label htmlFor="pass">Password</label>
          <input
            type="text"
            placeholder="password..."
            onChange={handlepassword}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="email..." onChange={handleemail} />
        </div>
        <div className="btn">
          <div className="btn-signup" onClick={handlesubmit}>
            <p>Sign UP</p>
          </div>
          <div
            className="btn-login"
            onClick={() => {
              navigate("/");
            }}
          >
            <p>Login</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
