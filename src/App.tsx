import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import Signin from "./Signin/Signin";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </div>
  );
};

export default App;
