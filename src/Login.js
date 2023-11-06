import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="logo-section">
        <div className="logo-icon">
          <img src="./assets/logo_text_4-1.png" alt="이미지" />
        </div>
        <div className="login-titles">
          <div className="login-title">cafe-in</div>
          <div className="login-subtitle">wherever you want</div>
        </div>
      </div>
      <div className="login-box">
        <div className="login-inputs">
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
        </div>

        <div className="login-buttons">
          <div className="login-button">
            <button>로그인</button>
          </div>
          <div className="login-register-button">
            <button>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
