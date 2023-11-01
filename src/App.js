import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Manager from "./Manager/Manager";
import User from "./User/User";
import Login from "./Login";
import Register from "./Register";
import ManagerCafeInfo from "./Manager/ManagerCafeInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manager/cafeinfo" element={<ManagerCafeInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
