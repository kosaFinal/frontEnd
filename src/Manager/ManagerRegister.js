import "./ManagerRegister.css";
import Footer from "../Footer";
import Header from "../Header";
import EmptyRegister from "./EmptyRegister"
import ManagerUpdateBasic from "./ManagerUpdateBasic"
import ManagerUpdateDetail from "./ManagerUpdateDetail"
import ManagerNav from "./ManagerNav";
import { Link } from "react-router-dom";

const ManagerRegister = () => {
  return (
    <div className="manager">
      <Header />
      <ManagerNav />
      
      {/* <EmptyRegister/> */}
      <ManagerUpdateDetail/>
      <Footer />
    </div>
  );
};
export default ManagerRegister;
