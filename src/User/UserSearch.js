import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserSearch.css";
import UserSearchInput from "./UserSearchInput";
const { kakao } = window;

const UserSearch = () => {
  const [showInput, setShowInput] = useState(false);
  const toggleUserSearchInput = () => {
    setShowInput(!showInput);
  };
  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
    });
  }, []);

  return (
    <usersearch>
      <div className="map_nav">
        <div className="user_search">
          <div id="map"></div>
        </div>

        <div className="searchnav">
          <Link to="/">
            <div className="searchnav_to_home">
              <img src="/assets/home.png" />
              <h5>HOME</h5>
            </div>
          </Link>
          <div
            className="searchnav_map"
            onClick={() => setShowInput(!showInput)}
          >
            <img src="/assets/searchnav_map.png" />
            <h5>MAP</h5>
          </div>
          <div className="searchnav_time">
            <Link to="/user/reservationstatus">
              <img src="/assets/searchnav_time.png" />
              <h5>
                실시간 예약
                <br /> 현황
              </h5>
            </Link>
          </div>
          <div className="searchnav_mypage">
            <Link to="/user/mypage">
              <img src="/assets/searchnav_mypage.png" />
              <h5>마이 페이지</h5>
            </Link>
          </div>
          <div className="searchnav_calendar">
            <Link to="/user/myreservation">
              <img src="/assets/searchnav_calendar.png" />
              <h5>
                날짜별 예약
                <br /> 내역 조회
              </h5>
            </Link>
          </div>
          <div className="map_button">
            <button className="map_button1">현 지도에서 검색</button>
            <button className="map_button2">
              <img src="/assets/search-target.png" />
            </button>
          </div>
        </div>
        {showInput && (
          <div className="searchnav-right">
            <UserSearchInput onClose={toggleUserSearchInput} />
          </div>
        )}
      </div>
    </usersearch>
  );
};
export default UserSearch;
