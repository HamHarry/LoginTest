import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import Signin from "./Signin/Signin";
import HomePage from "./HomePage/HomePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/home/:id" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
