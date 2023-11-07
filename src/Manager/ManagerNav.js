import { Link } from "react-router-dom";
import "./ManagerNav.css";

const ManagerNav = () => {
  return (
    <managernav>
      <div className="manager_nav">
        <div className="header_img">
          <img src="/assets/text_logo_black.png" />
        </div>
        <div className="manager_nav_item">
          <Link to="/manager/cafeinfo">
            <h3>카페 정보 관리</h3>
          </Link>
          <div className="manager_dropdown_content">
            <div className="manager_dropdown_content_left">
              <Link to="/manager/Register">
                <p>카페 정보 관리</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="manager_nav_item">
          <Link to="/manager/reservation">
            <h3>카페 예약 관리</h3>
          </Link>
          <div className="manager_dropdown_content">
            <div className="manager_dropdown_content_right">
              <Link to="/manager/reservationstatus">
                <p>고객 예약 현황</p>
              </Link>
              <Link to="/manager/reservationlist">
                <p>날짜 별 예약 조회</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="header_right">
          <Link to="/login">
            <p>로그인</p>
          </Link>
          <p>|</p>
          <Link to="/register">
            <p>회원가입</p>
          </Link>
        </div>
      </div>
    </managernav>
  );
};
export default ManagerNav;
