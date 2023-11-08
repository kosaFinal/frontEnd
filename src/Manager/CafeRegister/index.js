import { useState } from "react";
import ManagerNav from "../ManagerNav";
import "./cafeRegister.css";
import Footer from "../../Footer";
import CafeType from "./CafeType";
import CafeImage from "./CafeImage";
import CafeStudySetting from "./CafeStudySetting";
import CafeName from "./CafeName";

const CafeRegister = () => {
  const [number, setNumer] = useState(1);

  const addNumber = () => {
    setNumer((prevNumber) => {
      if (prevNumber >= 6) {
        return 6;
      }
      return prevNumber + 1;
    });
  };

  const subNumber = () => {
    setNumer((prevNumber) => {
      if (prevNumber <= 1) {
        return 1;
      }
      return prevNumber - 1;
    });
  };

  return (
    <caferegister>
      <ManagerNav />
      <div className="register-full-container">
        <div className="register-number">
          <span className="stepNumber">0{number}</span>
          <span className="totalNumber">/ 06</span>
        </div>
        <div className="button-container">
          {/* <div className="register-buttons"> */}
            <div className="button-previous">
            <button className="previous" onClick={subNumber}>
            {"<"}
            </button>
            </div>
            <div className="register-stepbox">
              <CafeType />
            </div>
            <div className="button-next">
            <button className="next" onClick={addNumber}>
              {">"}
            </button>
            </div>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </caferegister>
  );
};

export default CafeRegister;
