import Footer from "../Footer";
import UserNav from "./UserNav";
import "./UserMyInfo.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addAuthHeader } from "../apis/axiosConfig";
import { checkPassword } from "../apis/UserInfo";

const UserMyInfo = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addAuthHeader();
      const response = await checkPassword(password);
      if (response.data.isSuccess && response.data.data) {
        navigate("/user/myinfo/update");
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("일단 불러오셈 :", error);
    }
  };
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
          <input type="password" onChange={handlePasswordChange} />
        </div>
        <div className="myUserInfo-button">
          <Link to="/user/myinfo/update">
            <button onClick={handleSubmit}>확인하기</button>
          </Link>
        </div>
      </div>
      <Footer />
    </usermyinfo>
  );
};
export default UserMyInfo;
