import { Link } from "react-router-dom";
import "./UserNav.css";

const UserNav = () => {
  return (
    <usernav>
      <div className="user_nav">
        <div className="header_img">
          <Link to="/user">
            <img src="/assets/text_logo_black.png" />
          </Link>
        </div>
        <div className="user_nav_item">
          <Link to="/user/search">
            <h3>카페 검색</h3>
          </Link>
          <div className="user_dropdown_content">
            <div className="user_dropdown_content_left">
              <Link to="/user/search">
                <p>내 주변 카페 찾기</p>
              </Link>
              <Link to="/user/reservationstatus">
                <p>실시간 예약 현황</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="user_nav_item">
          <Link to="/user/mypage">
            <h3>마이 페이지</h3>
          </Link>
          <div className="user_dropdown_content">
            <div className="user_dropdown_content_right">
              <Link to="/user/myinfo">
                <p>내 정보 조회</p>
              </Link>
              <Link to="/user/myreservation">
                <p>내 예약내역 조회</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="header_right">
          <Link to="/login">
            <p>로그인</p>
          </Link>
          <p> | </p>
          <Link to="/register">
            <p>회원가입</p>
          </Link>
        </div>
      </div>
    </usernav>
  );
};
export default UserNav;
