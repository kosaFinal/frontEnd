import "./ManagerRegister.css";
import ManagerNav from "./ManagerNav";
import ManagerUpdateStudySetting from "./ManagerUpdateStudySetting";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const ManagerUpdate = () => {
  return (
    <div className="manager">
      <ManagerNav/>
      <ManagerUpdateStudySetting />
      <Outlet/>
      <Footer />
    </div>
  );
};
export default ManagerUpdate;
