import { useState } from "react";
import "./UserSearchInput.css";
import UserSearchCafeInfo from "./UserSearchCafeInfo";
import UserSearchFilter from "./UserSearchFilterModal";
import { filterSearch } from "../apis/Search";

const UserSearchInput = ({ searchResults, onLocationDataReceived }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showtoggle, setShowtoggle] = useState(false);
  const [buttonStates, setButtonStates] = useState({
    button1: "N",
    button2: "N",
    button3: "N",
  });
  const [featureButtonStates, setFeatureButtonStates] = useState({
    button4: "N",
    button5: "N",
    button6: "N",
    button7: "N",
    button8: "N",
    button9: "N",
  });
  const featureMapping = {
    button4: "편한 좌석",
    button5: "디저트",
    button6: "콘센트",
    button7: "조용함",
    button8: "음악없음",
    button9: "감성적",
  };
  const [searchFilterData, setSearchFilterData] = useState({
    cafeType: "",
    studyEnable: "",
    people: "",
    proceed: "",
    features: "",
    startTime: "",
    endTime: "",
    userStudy: "",
    preferSeat: "",
  });
  const [modalData, setModalData] = useState({
    startTime: "",
    endTime: "",
    preferSeat: "",
  });
  const [isUserSearchFilterModal, setIsUserSearchFilterModal] = useState(false);
  const [apiResponseData, setApiResponseData] = useState(null);
  const [word, setWord] = useState("");

  const handleOpenSearchModal = () => {
    setIsUserSearchFilterModal(true);
  };

  const handleCloseSearchModal = () => {
    setIsUserSearchFilterModal(false);
  };

  const handleButtonClick = (buttonName) => {
    setButtonStates((prevButtonStates) => {
      const newValue = prevButtonStates[buttonName] === "Y" ? "N" : "Y";
      return { ...prevButtonStates, [buttonName]: newValue };
    });
  };

  const handleFeatureButtonClick = (buttonName) => {
    setFeatureButtonStates((prevStates) => {
      const newValue = prevStates[buttonName] === "Y" ? "N" : "Y";
      return { ...prevStates, [buttonName]: newValue };
    });
  };

  const handleModalDataChange = (newModalData) => {
    setModalData(newModalData);
  };

  const handleCloseComponent = () => {
    setShowInput(false);
  };

  const toggleUserSearchCafeInfo = () => {
    setShowInfo(!showInfo);
  };

  const searchFilter = async () => {
    const selectedFeatures = Object.entries(featureButtonStates)
      .filter(([key, value]) => value === "Y" && featureMapping[key])
      .map(([key]) => featureMapping[key])
      .join(",");

    const filterQueryData = {
      cafeType: searchFilterData.cafeType,
      studyEnable: buttonStates.button1,
      people: buttonStates.button2,
      proceed: buttonStates.button3,
      features: selectedFeatures,
      startTime: modalData.startTime,
      endTime: modalData.endTime,
      preferSeat: modalData.preferSeat,
      word: word,
      pageNo: 1,
    };

    try {
      const response = await filterSearch(filterQueryData);
      setApiResponseData(response.data.data.searchCafes);
      onLocationDataReceived(response.data.data);
    } catch (error) {
      console.error("Search filter error:", error);
    }
  };

  const handleSearchWordChange = (event) => {
    setWord(event.target.value);
  };

  const handleFilterSubmit = (filterData) => {
    setSearchFilterData(filterData);
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
            <input
              type="text"
              value={word}
              onChange={handleSearchWordChange}
              placeholder="카페명으로 검색하기"
            ></input>
            <img onClick={searchFilter} src="/assets/search-img.png" />
          </div>
        </div>
        <div className="searchinput_section1">
          <select value={searchFilterData.cafeType}>
            <option disabled>카페 유형</option>
            <option value="G">개인</option>
            <option value="P">프랜차이즈</option>
          </select>
          <button
            value={searchFilterData.studyEnable}
            onClick={() => handleButtonClick("button1")}
            className={buttonStates.button1 === "Y" ? "active" : ""}
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
            value={searchFilterData.people}
            onClick={() => handleButtonClick("button2")}
            className={buttonStates.button2 === "Y" ? "active" : ""}
          >
            단체석
          </button>
          <button
            value={searchFilterData.proceed}
            onClick={() => handleButtonClick("button3")}
            className={buttonStates.button3 === "Y" ? "active" : ""}
          >
            영업중
          </button>
        </div>
        <div className="searchinput_section3">
          <button
            value="편한 좌석"
            onClick={() => handleFeatureButtonClick("button4")}
            className={featureButtonStates.button4 === "Y" ? "active" : ""}
          >
            편한 좌석
          </button>
          <button
            value="디저트"
            onClick={() => handleFeatureButtonClick("button5")}
            className={featureButtonStates.button5 === "Y" ? "active" : ""}
          >
            디저트
          </button>
          <button
            value="콘센트"
            onClick={() => handleFeatureButtonClick("button6")}
            className={featureButtonStates.button6 === "Y" ? "active" : ""}
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
              value="조용함"
              onClick={() => handleFeatureButtonClick("button7")}
              className={featureButtonStates.button7 === "Y" ? "active" : ""}
            >
              조용함
            </button>
            <button
              value="음악없음"
              onClick={() => handleFeatureButtonClick("button8")}
              className={featureButtonStates.button8 === "Y" ? "active" : ""}
            >
              음악없음
            </button>
            <button
              value="감성적"
              onClick={() => handleFeatureButtonClick("button9")}
              className={featureButtonStates.button9 === "Y" ? "active" : ""}
            >
              감성적
            </button>
          </div>
        )}
        <hr />

        <div className="search_cafe_info_list">
          {searchResults
            ? searchResults.map((cafe, index) => (
                <div
                  key={index}
                  className="search_cafe_info"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  <div className="search_cafe_info_img">
                    <img src="/assets/background_img.jpg" alt={cafe.cafeName} />
                  </div>
                  <div className="search_cafe_info_text">
                    <h5>{cafe.cafeName}</h5>
                    <p>
                      <span>이용시간 :</span> {cafe.startTime} ~ {cafe.endTime}
                    </p>
                    <p>주소 : {cafe.address}</p>
                  </div>
                </div>
              ))
            : apiResponseData &&
              apiResponseData.map((cafe, index) => (
                <div
                  key={index}
                  className="search_cafe_info"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  <div className="search_cafe_info_img">
                    <img src="/assets/background_img.jpg" alt={cafe.cafeName} />
                  </div>
                  <div className="search_cafe_info_text">
                    <h5>{cafe.cafeName}</h5>
                    <p>
                      <span>이용시간 :</span> {cafe.startTime} ~ {cafe.endTime}
                    </p>
                    <p>주소 : {cafe.address}</p>
                  </div>
                </div>
              ))}
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
          onFilterSubmit={handleFilterSubmit}
          onModalDataChange={handleModalDataChange}
        />
      )}
    </usersearchinput>
  );
};
export default UserSearchInput;
