import Footer from "../Footer";
import UserNav from "./UserNav";
import "./UserMyInfo.css";
import { Link } from "react-router-dom";

const UserMyInfo = () => {
  return (
    <usermyinfo>
      <UserNav />
      <div className="myUserInfo-container">
        <div className="myUserInfo-title">
          <p>내 정보 조회</p>
        </div>
        <hr />
        <div className="myUserInfo-inform">
          <p>
            <span>개인 정보 보호</span>를 위해
            <br />
            비밀번호를 입력해주세요
          </p>
        </div>
        <div className="myUserInfo-input">
          <label>비밀번호</label>
          <input type="password" />
        </div>
        <div className="myUserInfo-button">
          <Link to="/user/myinfo/update">
            <button>확인하기</button>
          </Link>
        </div>
      </div>
      <Footer />
    </usermyinfo>
  );
};
export default UserMyInfo;
