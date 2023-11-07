import { Link } from "react-router-dom";
import "./UserSearchCafeInfo.css";

const UserSearchCafeInfo = () => {
  return (
    <usersearchcafeinfo>
      <div className="UserSearchCafeInfo_header">
        <h1>카페명 들어갈 자리</h1>
      </div>
      <div className="usersearchcafeinfo_img">
        <img src="/assets/background_img.jpg" />
      </div>
      <div className="usersearchcafeinfo_section">
        <div className="usersearchcafeinfo_sections">
          <img src="/assets/searchcafeaddress.png" />
          <p>카페 주소 들어갈 자리</p>
        </div>
        <div className="usersearchcafeinfo_sections">
          <img src="/assets/searchcafetime.png" />
          <p>영업 시간 들어갈 자리</p>
        </div>
        <div className="usersearchcafeinfo_sections">
          <img src="/assets/searchcafephone.png" />
          <p>전번 들어갈꺼임</p>
        </div>
        <div className="usersearchcafeinfo_sections">
          <img src="/assets/searchcafekeyword.png" />
          <p>키워드 자리임</p>
        </div>
        <div className="usersearchcafeinfo_sections">
          <img src="/assets/searchcafecheck.png" />
          <p>카공 여부 체크자리</p>
        </div>
      </div>
      <Link to="/user/reservation">
        <div className="go_to_reservation">
          <button>예약하기</button>
        </div>
      </Link>
    </usersearchcafeinfo>
  );
};
export default UserSearchCafeInfo;
