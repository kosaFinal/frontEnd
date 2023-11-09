import { useState } from "react";
import "./UserSearchInput.css";
import UserSearchCafeInfo from "./UserSearchCafeInfo";

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
            <button>
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
              <h5>카페명 들어갈 자리</h5>
              <p>이용 가능 시간 : 영업시간 들어갈 자리</p>
              <p>카페 주소 : 카페주소 들어갈 자리</p>
            </div>
          </div>
          {showInfo && (
            <div className="searchcafeinfo">
              <UserSearchCafeInfo onClose={toggleUserSearchCafeInfo} />
            </div>
          )}
        </div>
      </div>
    </usersearchinput>
  );
};
export default UserSearchInput;
