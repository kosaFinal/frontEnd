import "./ManagerRegister.css";
import ManagerNav from "./ManagerNav";
import ManagerUpdateSideBar from "./ManagerUpdateSideBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const ManagerUpdate = () => {
  return (
    <div className="manager">
      <ManagerNav/>
      <ManagerUpdateSideBar />
      <Outlet/>
      <Footer />
    </div>
  );
};
export default ManagerUpdate;
