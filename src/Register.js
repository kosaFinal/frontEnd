import React from "react";
import "./Register.css";
import Radio from "./Radio";
import Header from "./Header";

function Register() {
  return (
    <register>
      <Header />
      <div className="register">
        <h1 className="register-title">회원가입</h1>
        <div className="register-container">
          <div className="register-box">
            <h1 className="register-intro">안녕하세요 카페인입니다.</h1>
            <div className="register-radio">
              <label className="usertype-label" value="회원유형">
                회원 유형
              </label>

              <Radio
                className="register-radio-button"
                name="userType"
                value="user"
                defaultchecked
              >
                USER
              </Radio>

              <Radio
                className="register-radio-button"
                name="userType"
                value="manager"
                defaultchecked
              >
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
      </div>
    </register>
  );
}

export default Register;
