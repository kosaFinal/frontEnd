import React from "react";
import "./Register.css";
import Radio from "./Radio";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  return (
    <register>
      <div className="register">
      <Header />
      <div className="register-container">
        <h1 className="register-title">SIGN UP</h1>
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
              <input className="id-signin" type="text" placeholder="아이디" />
              <button>확인</button>
            </div>

            <input type="text" placeholder="성 명" />

            <input type="password" placeholder="비밀번호" />
            <input type="password" placeholder="비밀번호 확인" />
            <div className="register-button">
              <button onClick={login}>회원가입</button>
            </div>
            <div className="go-login-section">
              <label className="already-signin">이미 회원가입하셨다면</label>
              <Link to={"/login"} className="go-login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </register>
  );
}

export default Register;
