import { useState } from "react";
import "./UserSearchInput.css";
import UserSearchCafeInfo from "./UserSearchCafeInfo";

const UserSearchTest = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <usersearchinput>
      <div className="searchinput_form">
        <div className="searchinput_header">
          <h1>매장 찾기</h1>
          <input type="text" placeholder="카페명으로 검색하기"></input>
        </div>
        <div className="searchinput_section1">
          <select>
            <option disabled>카페 유형</option>
            <option>개인</option>
            <option>프랜차이즈</option>
          </select>
          <button>카공 가능</button>
          <button>필터</button>
        </div>
        <div className="searchinput_section2">
          <button>단체석</button>
          <button>영업중</button>
        </div>
        <div className="searchinput_section3">
          <button>편한 좌석</button>
          <button>디저트</button>
          <button>콘센트</button>
          <div className="section3_toggle">
            <button>...</button>
          </div>
        </div>
        <div className="searchinput_toggle">
          <button>조용함</button>
          <button>음악없음</button>
          <button>감성적</button>
        </div>
        <div className="search_submit">
          <button type="submit">검색</button>
        </div>
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
              <p>카페 주소 : 카페주소 들어갈 자리 ㅅㅂ 힘드네</p>
            </div>
          </div>
          {showInfo && (
            <div className="searchcafeinfo">
              <UserSearchCafeInfo />
            </div>
          )}
        </div>
      </div>
    </usersearchinput>
  );
};
export default UserSearchTest;
