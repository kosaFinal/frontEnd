import { Link } from "react-router-dom";
import "./UserSearchCafeInfo.css";
import { useState } from "react";
import UserCafeInfoSlide from "./UserCafeInfoSlide";

const UserSearchCafeInfo = ({ onClose }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showCafeInfo, setCafeInfo] = useState({
    title: "스타벅스 가산디지털점",
    address: "서울 금천구 가산디지털1로 168 우림라이온스벨리 B동 1층",
    phoneno: "1522-3232",
    startTime: "10: 00",
    endTime: "22:00",
    keywords: ["콘센트", "디저트", "조용함"],
    study: "Y",
  });

  const handleCloseComponent = () => {
    setShowInfo(false);
    onClose();
  };
  return (
    <usersearchcafeinfo>
      <div className="UserSearchCafeInfo_header">
        <img
          className="search-left-arrow"
          onClick={handleCloseComponent}
          src="/assets/left-arrow.png"
        />
        <h1>{showCafeInfo.title}</h1>
      </div>
      <div className="usersearchcafeinfo_img">
        <UserCafeInfoSlide />
      </div>
      <div className="usersearchcafeinfo_section">
        <div className="usersearchcafeinfo_sections">
          <img src="/assets/search-address.png" />
          <p>{showCafeInfo.address}</p>
        </div>
        <div className="usersearchcafeinfo_sections">
          <img src="/assets/search-clock.png" />
          <p>
            {showCafeInfo.startTime} ~ {showCafeInfo.endTime}
          </p>
        </div>
        <div className="usersearchcafeinfo_sections">
          <img src="/assets/search-phone.png" />
          <p>{showCafeInfo.phoneno}</p>
        </div>
        <div className="usersearchcafeinfo_sections">
          <img src="/assets/search-keywords.png" />
          <p>{showCafeInfo.keywords + " "} </p>
        </div>
        <div className="usersearchcafeinfo_sections">
          <img src="/assets/search-check.png" />
          <p>{showCafeInfo.study === "Y" ? "카공 가능" : "카공 불가능"}</p>
        </div>
      </div>

      <Link to="/user/reservation">
        <div className="go_to_reservation">
          <button>예약하기</button>
        </div>
      </Link>
    </usersearchcafeinfo>
  );
};
export default UserSearchCafeInfo;
