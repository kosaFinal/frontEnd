import { Link } from "react-router-dom";
import "./ManagerNav.css";

const ManagerNav = () => {
  return (
    <managernav>
      <div className="manager_nav">
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
            {/* <div className="manager_dropdown_content_right">
              <Link to="/manager/reservationstatus">
                <p>고객 예약 현황</p>
              </Link>
              <Link to="/manager/reservationlist">
                <p>날짜 별 예약 조회</p>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="manager_nav_item">
          <Link to="/manager/reservation">
            <h3>카페 예약 관리</h3>
          </Link>
          <div className="manager_dropdown_content">
            {/* <div className="manager_dropdown_content_left">
              <Link to="/manager/cafeinfo">
                <p>카페 정보 관리</p>
              </Link>
            </div> */}
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
      </div>
    </managernav>
  );
};
export default ManagerNav;
