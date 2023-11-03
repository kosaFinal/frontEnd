import "./Manager.css";
import Footer from "../Footer";
import Header from "../Header";
import ManagerNav from "./ManagerNav";

const Manager = () => {
  return (
    <div className="manager">
      <Header />
      <ManagerNav />
      <div className="manager_main"></div>
      <div></div>
      <Footer />
    </div>
  );
};
export default Manager;
