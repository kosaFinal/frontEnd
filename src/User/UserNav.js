import { Link } from "react-router-dom";
import "./UserNav.css";

const UserNav = () => {
  return (
    <usernav>
      <div className="user_Nav">
        <div className="user_Nav_left">
          <Link to="/user/search">
            <h3>카페 검색</h3>
          </Link>
          <Link to="/user/find">
            <p>내 주변 카페 찾기</p>
          </Link>
          <Link to="/user/reservationstatus">
            <p>실시간 예약 현황</p>
          </Link>
        </div>
        <div className="user_Nav_right">
          <Link to="/user/mypage">
            <h3>마이 페이지</h3>
          </Link>
          <Link to="/user/myinfo">
            <p>고객 예약 현황</p>
          </Link>
          <Link to="/user/myreservation">
            <p>날짜별 예약 내역 조회</p>
          </Link>
        </div>
      </div>
    </usernav>
  );
};
export default UserNav;
