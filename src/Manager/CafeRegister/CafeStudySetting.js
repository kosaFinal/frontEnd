import { useState } from "react";
import "./CafeStudySetting.css";

const CafeStudySetting = () => {

  const [studySetting, setStudySetting] = useState("");
  const [isDivVisible, setDivVisible] = useState(false);

  const handleStudySettingRadioChange = (event) => {
    setStudySetting(event.target.value);
    setDivVisible(event.target.value === "yes");
  };

  return (
    <div className="cafe-register-box">
      <div className="cafe-register-title">
        <p>카공 정보를 <br />입력해주세요</p>
        <hr />
      </div>
      <div className="cafe-register-content">
        <div className="study-setting-input">
          <div className="study-setting-div">
            <p>카공 운영</p>
            <div className="study-setting-radio">
              <div>
                <input
                    type="radio"
                    name="studySetting"
                    value="yes"
                    checked={studySetting === "yes"}
                    onChange={handleStudySettingRadioChange} /> 
                <label>YES</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="studySetting"
                  value="no"
                  checked={studySetting === "no"}
                  onChange={handleStudySettingRadioChange} /> 
                <label>NO</label>
              </div>
            </div>
          </div>
          {isDivVisible && (
            <div className="study-setting-div">
              <p>평면도 등록</p>
              <button>이미지 불러오기</button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CafeStudySetting;
