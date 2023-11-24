import { useEffect, useState } from "react";
import "./UserSearchInput.css";
import UserSearchCafeInfo from "./UserSearchCafeInfo";
import UserSearchFilter from "./UserSearchFilterModal";
import { filterSearch } from "../apis/Search";

const UserSearchInput = ({
  onClose,
  searchResults,
  onPageChange,
  onLocationDataReceived,
}) => {
  console.log("부모한테 받아옴:", searchResults);
  const [showInfo, setShowInfo] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showtoggle, setShowtoggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [displayedResults, setDisplayedResults] = useState([]);
  const [parentResults, setParentResults] = useState(false);
  const [buttonStates, setButtonStates] = useState({
    button1: "N",
    button2: "N",
    button3: "N",
  });
  const [featureButtonStates, setFeatureButtonStates] = useState({
    button4: "",
    button5: "",
    button6: "",
    button7: "",
    button8: "",
    button9: "",
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
  const [selectedCafeId, setSelectedCafeId] = useState(null);
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
    onClose();
  };

  const toggleUserSearchCafeInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleCafeClick = (cafeId) => {
    setSelectedCafeId(cafeId);
    setShowInfo(true);
    console.log(cafeId);
  };

  const handleSearchClick = () => {
    searchFilter(1); // 현재 페이지 번호로 데이터 요청
  };

  const handlePageChange = (newPage) => {
    if (!parentResults) {
      setCurrentPage(newPage);
      searchFilter(newPage); // 새 페이지에 대한 검색 결과 업데이트
    }
  };

  const searchFilter = async (page = currentPage) => {
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
      pageNo: page,
    };
    console.log(JSON.stringify(filterQueryData, null, 2));

    try {
      const response = await filterSearch(filterQueryData);
      setApiResponseData(response.data.data.searchCafes);
      onLocationDataReceived(response.data.data);
      setParentResults(null);
      if (response.data.data.pager) {
        setTotalPages(response.data.data.pager.totalPageNo);
      }
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

  const handleCafeTypeChange = (event) => {
    setSearchFilterData((prevData) => ({
      ...prevData,
      cafeType: event.target.value,
    }));
  };

  useEffect(() => {
    if (apiResponseData && apiResponseData.pager) {
      setTotalPages(apiResponseData.pager.totalPageNo);
    }
  }, [apiResponseData]);

  useEffect(() => {
    if (
      searchResults &&
      searchResults.searchCafes &&
      searchResults.searchCafes.length > 0
    ) {
      setDisplayedResults(searchResults.searchCafes);
      setParentResults(true);
      setTotalPages(0);
    } else {
      setParentResults(false);
    }
  }, [searchResults]);
  useEffect(() => {
    if (!parentResults && apiResponseData && apiResponseData.length > 0) {
      setDisplayedResults(apiResponseData);
    }
  }, [apiResponseData, parentResults]);
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
            <img onClick={handleSearchClick} src="/assets/search-img.png" />
          </div>
        </div>
        <div className="searchinput_section1">
          <select
            value={searchFilterData.cafeType}
            onChange={handleCafeTypeChange}
          >
            <option value="">카페 유형</option>
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
        {displayedResults.length > 0 && (
          <div className="search_cafe_info_list">
            {displayedResults.map((cafe, index) => (
              <div
                key={index}
                className="search_cafe_info"
                onClick={() => handleCafeClick(cafe.cafeId)}
              >
                <div className="search_cafe_info_img">
                  <img
                    src={`data:image/;base64,${cafe.cafeReqImg}`}
                    alt={cafe.cafeName}
                  />
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
        )}
        {!parentResults && (
          <div className="user_search_pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
        {showInfo && (
          <div className="searchcafeinfo">
            <UserSearchCafeInfo
              cafeId={selectedCafeId}
              onClose={toggleUserSearchCafeInfo}
            />
          </div>
        )}
        {/* {!parentResults && totalPages > 0 && (
          <div className="user_search_pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )} */}
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
