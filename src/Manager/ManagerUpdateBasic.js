import React, { useEffect, useState } from "react";
import "./ManagerUpdateBasic.css";
import DaumPost from "./Component/DaumPost";
import {managerBasicRead, managerBasicCafeTelUpdate,managerBasicCafeAddressUpdate} from "./../apis/ManagerUpdateAxios";


function ManagerUpdateBasic() {
  const [showFindAddress, setShowFindAddress] = useState(false);
  const [showFindNumber, setShowFindNumber] = useState(false);
  const [phone, setPhone] = useState("");
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await managerBasicRead();
        if (response.data.isSuccess) {
          const { cafeTel, address, detailAddress,longtitude,latitude } = response.data.data;
          setPhone(cafeTel); // 전화번호 상태 설정
          setAddressObj({
            areaAddress: detailAddress, // 상세 주소
            townAddress: address, // 도시 주소
            X: longtitude,
            Y: latitude,
          });
        } else {
          console.log("API 호출 실패: ", response.data.message);
        }
      } catch (error) {
        console.error("API 호출 중 에러 발생: ", error);
      }
    };
  
    fetchData();
  }, []);

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
  const handlePhoneSave = async () => {
    try {
        const response = await managerBasicCafeTelUpdate(editPhone);
        if (response.data.isSuccess) {
            setPhone(editPhone); // UI 업데이트
            setShowFindNumber(false); // 수정 필드 숨기기
        } else {
            // 서버 응답에 문제가 있을 경우
            console.log("전화번호 업데이트 실패: ", response.data.message);
        }
    } catch (error) {
        console.error("API 호출 중 에러 발생: ", error);
    }
};

  // 주소 저장 핸들러
  const handleAddressSave = async () => {
    // 수정된 주소가 있다면 사용하고, 그렇지 않으면 기존 주소 사용
    const updatedTownAddress = editAddressObj.townAddress || addressObj.townAddress;
    const updatedAreaAddress = editAddressObj.areaAddress || addressObj.areaAddress;
    const updatedLongitude = editAddressObj.X || addressObj.X;
    const updatedLatitude = editAddressObj.Y || addressObj.Y;
  
    const fullAddress = `${updatedTownAddress}, ${updatedAreaAddress}`;
  
    const updatedAddress = {
      address: fullAddress,
      longtitude: updatedLongitude, 
      latitude: updatedLatitude
    };
  
    try {
      const response = await managerBasicCafeAddressUpdate(updatedAddress);
      if (response.data.isSuccess) {
        // 서버에서 성공적으로 업데이트한 후에, 로컬 상태도 업데이트합니다.
        setAddressObj({
          townAddress: updatedTownAddress,
          areaAddress: updatedAreaAddress,
          X: updatedLongitude,
          Y: updatedLatitude
        });
        setShowFindAddress(false); // 주소 수정 필드 숨김
      } else {
        console.log("주소 업데이트 실패: ", response.data.message);
      }
    } catch (error) {
      console.error("API 호출 중 에러 발생: ", error);
    }
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
              </div>
              <div className="BasicAddress-Save">
                <div className="BasicAddress-find">
                  <DaumPost setAddressObj={setEditAddressObj} />
                </div>
              <button onClick={handleAddressSave}>저장</button>
              </div>
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
