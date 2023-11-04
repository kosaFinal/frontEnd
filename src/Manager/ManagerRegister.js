import "./ManagerRegister.css";
import Footer from "../Footer";
import Header from "../Header";
import EmptyRegister from "./EmptyRegister"
import ManagerNav from "./ManagerNav";
import { Link } from "react-router-dom";

const ManagerRegister = () => {
  return (
    <div className="manager">
      <Header />
      <ManagerNav />
      
      <EmptyRegister/>
      <Footer />
    </div>
  );
};
export default ManagerRegister;
