import React, { useState } from "react";
import "./ManagerUpdateBasic.css";
import DaumPost from "./Component/DaumPost";

function ManagerUpdateBasic() {
  const [showFindAddress, setShowFindAddress] = useState(false);
  const [showFindNumber, setShowFindNumber] = useState(false);
  const [phone, setPhone] = useState("010-0000-0000");
  const [editPhone, setEditPhone] = useState("");

  // 주소 관련 상태
  const [addressObj, setAddressObj] = useState({
    areaAddress: "", // 기본값을 설정
    townAddress: "", // 기본값을 설정
    X: "",
    Y: "",
  });

  // 주소 수정 상태
  const [editAddressObj, setEditAddressObj] = useState({
    areaAddress: "",
    townAddress: "",
    X: "",
    Y: "",
  });

  // 주소 수정을 위한 토글 함수
  const toggleFindAddress = () => {
    setShowFindAddress(!showFindAddress);
    // 상세 주소 수정 필드를 기본 주소 데이터로 설정합니다.
    setEditAddressObj(addressObj);
  };

  // 전화번호 수정을 위한 토글 함수
  const toggleFindNumber = () => {
    setShowFindNumber(!showFindNumber);
    setEditPhone(phone);
  };

  // 전화번호 변경 핸들러
  const handlePhoneChange = (e) => {
    setEditPhone(e.target.value);
  };

  // 전화번호 저장 핸들러
  const handlePhoneSave = () => {
    setPhone(editPhone);
    setShowFindNumber(false);
  };

  // 주소 저장 핸들러
  const handleAddressSave = () => {
    setAddressObj(editAddressObj);
    setShowFindAddress(false); // 주소 수정 필드를 숨깁니다.
  };
  // 상세 주소 입력 변경 핸들러
  const handleAddressChange = (e, field) => {
    setEditAddressObj((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="ManagerUpdateBasic">
      <div className="ManagerUpdateBasic-Container">
        <div className="ManagerUpdateBasic-Container-Items">
          <div className="ManagerUpdateBasic-Container-Names">
            <label>카페명</label>
            <input type="text" value={"형우카페"} disabled></input>
          </div>

          <div className="ManagerUpdateBasic-Container-Case">
            <label>카페 유형</label>
            <input type="text" value={"프렌차이즈"} disabled></input>
          </div>

          <div className="ManagerUpdateBasic-Container-Number">
            <div className="ManagerUpdateBasic-Container-Number-labeling">
              <label>카페 전화번호</label>
              <button onClick={toggleFindNumber}>수정</button>
            </div>
            <div className="ManagerUpdateBasic-Container-Number-text">
              <input type="text" value={phone} disabled></input>
            </div>
          </div>

          <div
            className={`ManagerUpdateBasic-Container-Number ${
              !showFindNumber ? "hidden" : ""
            }`}
          >
            <div className="ManagerUpdateBasic-Container-Number-labeling">
              <label>카페 전화번호 수정</label>
              <button onClick={handlePhoneSave}>저장</button>
            </div>
            <div className="ManagerUpdateBasic-Container-Number-text">
              <input
                type="text"
                value={editPhone}
                onChange={handlePhoneChange}
              ></input>
            </div>
          </div>

          {/* 주소 섹션 */}
          <div className="ManagerUpdateBasic-Container-Address">
            <div className="ManagerUpdateBasic-Container-Address-labeling">
              <label>카페 주소</label>
              <button onClick={toggleFindAddress}>수정</button>
            </div>
            <div className="ManagerUpdateBasic-Container-Address-text">
              <input
                type="text"
                value={addressObj.townAddress}
                disabled
              ></input>
              <input
                type="text"
                value={addressObj.areaAddress}
                disabled
              ></input>
            </div>
          </div>

          {/* 주소 수정 섹션 */}
          <div
            className={`ManagerUpdateBasic-Container-Address-Update ${
              !showFindAddress ? "hidden" : ""
            }`}
          >
            <div className="ManagerUpdateBasic-Container-Address-Update-labeling">
              <div className="ManagerUpdateBasic-Container-Address-Update-findAddress">
                <label>카페 주소 수정</label>
                <DaumPost setAddressObj={setEditAddressObj} />
              </div>
              <button onClick={handleAddressSave}>저장</button>
            </div>
            <div className="ManagerUpdateBasic-Container-Address-Update-text">
              <input
                type="text"
                value={editAddressObj.townAddress}
                onChange={(e) => handleAddressChange(e, "townAddress")}
                disabled
              ></input>
              <input
                type="text"
                value={editAddressObj.areaAddress}
                onChange={(e) => handleAddressChange(e, "areaAddress")}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerUpdateBasic;
