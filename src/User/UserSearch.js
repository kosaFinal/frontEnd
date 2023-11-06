import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserSearch.css";
import UserSearchInput from "./UserSearchInput";
const { kakao } = window;

const UserSearch = () => {
  const [showInput, setShowInput] = useState(false);
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
        <div id="map"></div>

        <div className="searchnav">
          <h5 onClick={() => setShowInput(!showInput)}>MAP</h5>
          <Link to="/user/reservationstatus">
            <h5>실시간 예약 현황</h5>
          </Link>
          <Link to="/user/mypage">
            <h5>마이 페이지</h5>
          </Link>
          <Link to="/user/myreservation">
            <h5>
              날짜별 예약
              <br /> 내역 조회
            </h5>
          </Link>
        </div>
        {showInput && (
          <div className="searchnav-right">
            <UserSearchInput />
          </div>
        )}
      </div>
    </usersearch>
  );
};
export default UserSearch;
