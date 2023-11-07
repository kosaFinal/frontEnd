import { useState } from "react";
import "./CafeType.css";

const CafeType = () => {

  const [cafeType, setCafeType] = useState("");

  const handleTypeRadioChange = (event) => {
    setCafeType(event.target.value);
  };

  return (
    <div className="cafe-register-box">
      <div className="cafe-register-title">
        <p>카페 유형 선택</p>
        <hr />
      </div>
      <div className="cafe-register-content">
        <div className="type-radio">
          <div>
            <input
                type="radio"
                name="cafeType"
                value="indivisual"
                checked={cafeType === "indivisual"}
                onChange={handleTypeRadioChange} /> 
            <label>개인</label>
          </div>
          <div>
            <input
              type="radio"
              name="cafeType"
              value="franchise"
              checked={cafeType === "franchise"}
              onChange={handleTypeRadioChange} /> 
            <label>프랜차이즈</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeType;
