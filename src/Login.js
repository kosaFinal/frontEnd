import React from "react";
import "./Login.css";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import ManagerNav from "./Manager/ManagerNav";

function Login() {
  const navigate = useNavigate();

  const register = (event) => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">LOGIN</h1>
        <div className="login-box">
          <h1 className="login-intro">카페인을 이용해 주셔서 감사합니다.</h1>
          <div className="login-inputs">
            <div className="id-box">
              <label className="id">아이디</label>
              <input type="text" placeholder="아이디" />
            </div>
            <div className="pw-box">
              <label className="pw">비밀번호</label>
              <input type="password" placeholder="비밀번호" />
            </div>
          </div>
          <div className="login-button">
            <button>로그인</button>
          </div>
          <div className="go-register-section">
            <label className="notyet-register">
              아직 회원가입을 하지 않았다면?
            </label>
            <Link to={"/register"} className="go-register">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
