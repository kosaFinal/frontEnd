import Footer from "../Footer";
import UserNav from "./UserNav";
import "./UserInfoUpdate.css";
import { addAuthHeader } from "../apis/axiosConfig";
import { updatePassword } from "../apis/UserInfo";
import { useState } from "react";

const UserInfoUpdate = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("newpassword :", newPassword);
    console.log("confirmpassword : ", confirmPassword);
    try {
      addAuthHeader();
      console.log("비밀번호 변경 요청 전송:", { password: newPassword });
      const response = await updatePassword({ password: newPassword });
      console.log("비밀번호 변경 : ", response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
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
          <input
            type="password"
            placeholder="새 비밀번호"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="새 비밀번호 확인"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="userinfoupdatebutton">
          <button onClick={changePassword}>
            <h5>변경하기</h5>
          </button>
        </div>
      </div>
      <Footer />
    </userinfoupdate>
  );
};
export default UserInfoUpdate;
