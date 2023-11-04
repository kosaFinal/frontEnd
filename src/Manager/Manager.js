import "./Manager.css";
import Footer from "../Footer";
import Header from "../Header";
import EmptyRegister from "./EmptyRegister"
import ManagerNav from "./ManagerNav";

const Manager = () => {
  return (
    <manager>
      <Header />
      <ManagerNav />
      <div className="manager_main">
        <div className="manager_link"></div>
      </div>

      <Footer />
    </manager>
  );
};
export default Manager;
