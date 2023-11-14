import { useState } from "react";
import "./UserSearchInput.css";
import UserSearchCafeInfo from "./UserSearchCafeInfo";
import UserSearchFilter from "./UserSearchFilterModal";

const UserSearchInput = ({ onClose }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showtoggle, setShowtoggle] = useState(false);
  const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
    button6: false,
    button7: false,
    button8: false,
    button9: false,
  });
  const [cafeInfo, setCafeInfo] = useState({
    title: "스타벅스 가산디지털점",
    startTime: "10 : 00",
    endTime: "22: 00",
    address: "서울 금천구 가산디지털1로 168 우림라이온스벨리 B동 1층",
  });
  const [isUserSearchFilterModal, setIsUserSearchFilterModal] = useState(false);
  const handleOpenSearchModal = () => {
    setIsUserSearchFilterModal(true);
  };

  const handleCloseSearchModal = () => {
    setIsUserSearchFilterModal(false);
  };

  const handleSearchFilterSubmit = () => {
    // 취소 처리 로직

    handleCloseSearchModal();
  };
  const handleButtonClick = (buttonName) => {
    setButtonStates((prevButtonStates) => ({
      ...prevButtonStates,
      [buttonName]: !prevButtonStates[buttonName],
    }));
    console.log(handleButtonClick);
  };

  const handleCloseComponent = () => {
    setShowInput(false);
    onClose();
  };

  const toggleUserSearchCafeInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <usersearchinput>
      <div className="searchinput_form">
        <div className="searchinput_header">
          <img
            className="img_x"
            onClick={handleCloseComponent}
            src="/assets/search-x.png"
          />
          <img src="/assets/text_logo_black.png" />
          <div className="searchinput_input">
            <input type="text" placeholder="카페명으로 검색하기"></input>
            <img src="/assets/search-img.png" />
          </div>
        </div>
        <div className="searchinput_section1">
          <select>
            <option disabled>카페 유형</option>
            <option>개인</option>
            <option>프랜차이즈</option>
          </select>
          <button
            onClick={() => handleButtonClick("button1")}
            className={buttonStates.button1 ? "active" : ""}
          >
            카공 가능
          </button>
          <div className="search_button_filter">
            <button onClick={handleOpenSearchModal}>
              <img src="/assets/search_filter.png" />
              <p>필터</p>
            </button>
          </div>
        </div>
        <div className="searchinput_section2">
          <button
            onClick={() => handleButtonClick("button2")}
            className={buttonStates.button2 ? "active" : ""}
          >
            단체석
          </button>
          <button
            onClick={() => handleButtonClick("button3")}
            className={buttonStates.button3 ? "active" : ""}
          >
            영업중
          </button>
        </div>
        <div className="searchinput_section3">
          <button
            onClick={() => handleButtonClick("button4")}
            className={buttonStates.button4 ? "active" : ""}
          >
            편한 좌석
          </button>
          <button
            onClick={() => handleButtonClick("button5")}
            className={buttonStates.button5 ? "active" : ""}
          >
            디저트
          </button>
          <button
            onClick={() => handleButtonClick("button6")}
            className={buttonStates.button6 ? "active" : ""}
          >
            콘센트
          </button>
          <div
            className="section3_toggle"
            onClick={() => setShowtoggle(!showtoggle)}
          >
            <button>
              <img src="/assets/dotdotdot_yellow.png" />
            </button>
          </div>
        </div>
        {showtoggle && (
          <div className="searchinput_toggle">
            <button
              onClick={() => handleButtonClick("button7")}
              className={buttonStates.button7 ? "active" : ""}
            >
              조용함
            </button>
            <button
              onClick={() => handleButtonClick("button8")}
              className={buttonStates.button8 ? "active" : ""}
            >
              음악없음
            </button>
            <button
              onClick={() => handleButtonClick("button9")}
              className={buttonStates.button9 ? "active" : ""}
            >
              감성적
            </button>
          </div>
        )}
        <hr />

        <div className="search_cafe_info_list">
          <div className="search_cafe_info">
            <div className="search_cafe_info_img">
              <img src="/assets/background_img.jpg" />
            </div>
            <div
              className="search_cafe_info_text"
              onClick={() => setShowInfo(!showInfo)}
            >
              <h5>{cafeInfo.title}</h5>
              <p>
                <span>이용시간 : </span> {cafeInfo.startTime} ~{" "}
                {cafeInfo.endTime}
              </p>
              <p>주소 : {cafeInfo.address}</p>
            </div>
          </div>
          {showInfo && (
            <div className="searchcafeinfo">
              <UserSearchCafeInfo onClose={toggleUserSearchCafeInfo} />
            </div>
          )}
        </div>
        {isUserSearchFilterModal && <div className="search_modal"></div>}
        {isUserSearchFilterModal && (
          <UserSearchFilter
            isOpen={handleOpenSearchModal}
            onClose={handleCloseSearchModal}
            onSubmit={handleSearchFilterSubmit}
          />
        )}
      </div>
    </usersearchinput>
  );
};
export default UserSearchInput;
