import React from "react";
import "./Register.css";
import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

function Register() {
  return (
    <div className="register-container">
      
      <div className="register-box">
      <div className="logo-section">
        <div className="logo-icon">
          <img src="/assets/logo_reimg.png" alt="이미지" />
        </div>
      </div>
        <div className="register-radio">
          <label className="usertype-label" value="회원유형">회원 유형</label>

            <Radio className="register-radio-button" name="userType" value="user" defaultchecked>
            USER
            </Radio>

          <Radio className="register-radio-button" name="userType" value="manager" defaultchecked>
            MANAGER
          </Radio>
          
        </div>
        <div className="id-section">
          <input type="text" placeholder="아이디" />
          <button>확인</button>
        </div>

        <input type="text" placeholder="성 명" />

        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <div className="register-button">
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
