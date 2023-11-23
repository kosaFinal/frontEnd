import { useCallback, useEffect, useState } from "react";
import ManagerNav from "../ManagerNav";
import "./cafeRegister.css";
import Footer from "../../Footer";
import CafeType from "./CafeType";
import CafeImage from "./CafeImage";
import CafeStudySetting from "./CafeStudySetting";
import CafeName from "./CafeName";
import CafeBasic from "./CafeBasic";
import CafeFeature from "./CafeFeature";
import { managerCafeReg } from "./../../apis/CafeReg";

const CafeRegister = () => {
  const [number, setNumer] = useState(1);
  const [cafeName, setCafeName] = useState("");
  const [cafeType, setCafeType] = useState("");
  const [cafeBasicInfo, setCafeBasicInfo] = useState({
    address: {
      townAddress: "",
      areaAddress: "",
      X: "",
      Y: "",
    },
    phoneNumber: "",
    startTime: new Date(),
    endTime: new Date(),
  });
  const [cafeImages, setCafeImages] = useState({
    titleFile: null,
    detailFiles: [],
  });
  const [cafeFeatures, setCafeFeatures] = useState({});

  const [cafeStudySetting, setCafeStudySetting] = useState({
    studySetting: "",
    floorPlanFile: null,
  });

  useEffect(() => {
    console.log("카페 기본 정보: ", cafeBasicInfo);
    console.log("카페 이미지: ", cafeImages);
    console.log("카페 특성: ", cafeFeatures);
    console.log("카페 특성: ", cafeStudySetting);
  }, [number, cafeBasicInfo, cafeImages, cafeFeatures, cafeStudySetting]);

  const handleStudySettingChange = useCallback((setting) => {
    setCafeStudySetting(setting);
  }, []);

  const handleFeaturesChange = useCallback((features) => {
    setCafeFeatures(features);
  }, []);

  const handleImageChange = useCallback((images) => {
    setCafeImages(images);
  }, []);

  const addNumber = () => {
    if (number === 1) {
      if (cafeName.trim().length < 4) {
        alert("카페이름은 4글자 이상 입력해야 합니다.");
        return;
      }
    }

    if (number === 2 && !cafeType) {
      alert("카페 유형을 선택해주세요.");
      return;
    }

    // CafeBasic 유효성 검사
    if (number === 3) {
      if (
        !cafeBasicInfo.address ||
        !cafeBasicInfo.phoneNumber ||
        cafeBasicInfo.startTime >= cafeBasicInfo.endTime
      ) {
        alert("카페 기본 정보를 올바르게 입력해주세요.");
        return;
      }
    }
    if (number === 4) {
      if (!cafeImages.titleFile || cafeImages.detailFiles.length === 0) {
        alert("대표 사진과 상세 사진을 모두 업로드해주세요.");
        return;
      }
    }

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

  const handleBasicInfoChange = useCallback(
    (basicInfo) => {
      setCafeBasicInfo(basicInfo);
    },
    [setCafeBasicInfo]
  );

  useEffect(() => {
    console.log("선택된 카페 유형: ", cafeBasicInfo);
  }, [cafeBasicInfo]);

  const handleFinalSubmit = async () => {
    try {
      // FormData 준비
      const formData = new FormData();

      // JSON 데이터를 문자열로 변환하여 추가
      formData.append(
        "cafeReg",
        new Blob(
          [
            JSON.stringify({
              cafeName,
              cafeType,
              startTime: cafeBasicInfo.startTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              endTime: cafeBasicInfo.endTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              address: `${cafeBasicInfo.address.townAddress}, ${cafeBasicInfo.address.areaAddress}`,
              longtitude: cafeBasicInfo.address.X,
              latitude: cafeBasicInfo.address.Y,
              cafeTel: cafeBasicInfo.phoneNumber,
              study: cafeStudySetting.studySetting,
            }),
          ],
          {
            type: "application/json",
          }
        )
      );

      // 이미지 파일 추가
      if (cafeImages.titleFile) {
        formData.append("cafeRepImg", cafeImages.titleFile);
      }
      cafeImages.detailFiles.forEach((file, index) => {
        formData.append("cafeImgs", file);
      });

      // 평면도 추가 (있을 경우)
      if (cafeStudySetting.floorPlanFile) {
        formData.append("cafeStudyImg", cafeStudySetting.floorPlanFile);
      }

      // 특성 추가 (JSON 문자열로 변환하여 추가)
      formData.append(
        "cafeFeature",
        new Blob([JSON.stringify(cafeFeatures)], { type: "application/json" })
      );

      console.log(cafeName);
      console.log(formData.study);
      console.log(cafeImages.titleFile);
      console.log(cafeImages.detailFiles);
      console.log(cafeStudySetting.floorPlanFile);

      // API 호출
      const response = await managerCafeReg(formData);
      if (response.data.isSuccess) {
        // 등록 성공 처리
        console.log("등록 성공", response.data.data);
      } else {
        // 오류 처리
        console.error("등록 실패", response.data.message);
      }
    } catch (error) {
      console.error("등록 중 오류 발생", error);
    }
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
            {number === 1 && (
              <CafeName cafeName={cafeName} setCafeName={setCafeName} />
            )}
            {number === 2 && (
              <CafeType cafeType={cafeType} setCafeType={setCafeType} />
            )}
            {number === 3 && (
              <CafeBasic
                cafeBasicInfo={cafeBasicInfo}
                onBasicInfoChange={handleBasicInfoChange}
              />
            )}
            {number === 4 && <CafeImage onImageChange={handleImageChange} />}
            {number === 5 && (
              <CafeFeature onFeaturesChange={handleFeaturesChange} />
            )}
            {number === 6 && (
              <CafeStudySetting
                onStudySettingChange={handleStudySettingChange}
                onFinalSubmit={handleFinalSubmit}
              />
            )}
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
