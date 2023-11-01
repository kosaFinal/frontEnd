import { Link } from "react-router-dom";
import "./ManagerNav.css";

const ManagerNav = () => {
  return (
    <managernav>
      <div className="Manager_Nav">
        <div className="Manager_Nav_left">
          <Link to="/manager/cafeinfo">
            <h3>카페 정보 관리</h3>
          </Link>
          <Link to="/manager/cafeinfo">
            <p>카페 정보 관리</p>
          </Link>
        </div>
        <div className="Manager_Nav_right">
          <Link to="/manager/reservation">
            <h3>카페 예약 관리</h3>
          </Link>
          <Link to="/manager/reservationstatus">
            <p>고객 예약 현황</p>
          </Link>
          <Link to="/manager/reservationlist">
            <p>날짜별 예약 내역 조회</p>
          </Link>
        </div>
      </div>
    </managernav>
  );
};
export default ManagerNav;
