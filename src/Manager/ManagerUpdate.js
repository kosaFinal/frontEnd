import "./ManagerRegister.css";
import Footer from "../Footer";
import ManagerNav from "./ManagerNav";
import { Routes, Route } from "react-router-dom";
import ManagerUpdateBasic from './ManagerUpdateBasic';
import ManagerUpdateDetail from './ManagerUpdateDetail';
import ManagerUpdateStudySetting from './ManagerUpdateStudySetting';
import ManagerUpdateSideBar from './ManagerUpdateSideBar';
import { Outlet } from "react-router-dom";

const ManagerUpdate = () => {
  return (
    <div className="manager">
      <ManagerNav />
      <ManagerUpdateSideBar />
      <Outlet />  
      <Footer />
    </div>
  );
};
export default ManagerUpdate;
