import { useEffect, useState } from "react";
import "./CafeStudySetting.css";
import { Link } from "react-router-dom";


const CafeStudySetting = ({ onStudySettingChange, onFinalSubmit }) => {

  const [studySetting, setStudySetting] = useState("");
  const [isDivVisible, setDivVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleStudySettingRadioChange = (event) => {
    setStudySetting(event.target.value);
    setDivVisible(event.target.value === "Y");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  useEffect(() => {
    onStudySettingChange({
      studySetting,
      floorPlanFile: selectedFile
    });
  }, [studySetting, selectedFile, onStudySettingChange]);

  return (
    <div className="cafe-register-box">
      <div className="cafe-register-title">
        <p>카공 정보를 <br />입력해주세요</p>
        <hr />
      </div>
      <div className="cafe-register-content">
        <div className="study-setting-div">
          <p>카공 운영</p>
          <div className="study-setting-radio">
            <div>
              <input
                  type="radio"
                  name="studySetting"
                  value="Y"
                  checked={studySetting === "N"}
                  onChange={handleStudySettingRadioChange} /> 
              <label>YES</label>
            </div>
            <div>
              <input
                type="radio"
                name="studySetting"
                value="N"
                checked={studySetting === "N"}
                onChange={handleStudySettingRadioChange} /> 
              <label>NO</label>
            </div>
          </div>
        </div>
        
        {isDivVisible && (
          <div className="study-setting-div">
            <p>평면도 등록</p>
            <input className="study-setting-floorplan"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="file-input"
            />
            <label htmlFor="file-input" className="study-setting-floorplan">
              {selectedFile ? selectedFile.name : "이미지 불러오기"}
            </label>
        </div>
        )}
        <Link to={"/manager"}>
        <button className="cafe-final-register" onClick={onFinalSubmit}> 카페 등록하기 </button>
        </Link>
      </div>
    </div>
  );
};

export default CafeStudySetting;
