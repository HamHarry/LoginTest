import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Login/LoginPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
