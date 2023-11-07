import { useState } from "react";
import ManagerNav from "../ManagerNav";
import "./cafeRegister.css";import Footer from "../../Footer";
;


const CafeRegister = () => {
  const [number,setNumer] = useState(1);

  return (
    <caferegister>
      <ManagerNav/>
      <div className="register-full-container">
        <div className="register-number">
          <span className="stepNumber">
            0{number}
          </span>
          <span className="totalNumber">
           / 06
          </span>
        </div>
        <div className="button-container">
        <div className="register-buttons">
          <button className="previous">이전</button>
          <button className="next">다음</button>
        </div>
        </div>
      </div>
      <Footer/>
    </caferegister>
  );
};

export default CafeRegister;