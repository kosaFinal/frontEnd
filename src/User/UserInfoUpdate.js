import Footer from "../Footer";
import UserNav from "./UserNav";
import "./UserInfoUpdate.css";

const UserInfoUpdate = () => {
  return (
    <userinfoupdate>
      <UserNav />
      <div className="userinfoupdate_form">
        <div className="userinfoupdate_header">
          <h1>
            비밀번호 변경
            <hr />
          </h1>
        </div>
        <div className="userpasswordupdate">
          <input type="password" placeholder="새 비밀번호" />
          <input type="password" placeholder="새 비밀번호 확인" />
        </div>
        <div className="userinfoupdatebutton">
          <button>
            <h5>변경하기</h5>
          </button>
        </div>
      </div>
      <Footer />
    </userinfoupdate>
  );
};
export default UserInfoUpdate;
