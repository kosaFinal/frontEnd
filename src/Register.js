import React from "react";
import "./Register.css";
import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

function Register() {
  return (
    <div className="register-container">
      <div className="logo-section">
        <div className="logo-icon">
          <img src="./assets/logo_text_4-1.png" alt="이미지" />
        </div>
        {/* <div className="login-titles">
          <div className="login-title">cafe-in</div>
          <div className="login-subtitle">wherever you want</div>
        </div> */}
      </div>
      <div className="register-box">
        <div className="register-radio">
          <label value="회원유형">
            회원 유형
          </label>
          
          {/* <RadioGroup> */}
          <div className="register-radio-child">
            <Radio name="userType" value="user" defaultchecked>
              USER
            </Radio>
            <Radio name="userType" value="manager" defaultchecked>
              MANAGER
            </Radio>
          </div>
        {/* </RadioGroup> */}
        </div>
        <div className="id-section">
          <input type="text" placeholder="아이디" />
          <button>확인</button>
        </div>

        <input type="text" placeholder="실명" />

        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호확인" />
        <div className="register-button">
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
