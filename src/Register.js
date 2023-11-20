import React, { useCallback, useState } from "react";
import "./Register.css";
import Radio from "./Radio";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { addAuthHeader } from "./apis/axiosConfig";
import { signup } from "./apis/login";

function Register() {
  const [register, setRegister] = useState({
    role: "",
    userName: "",
    userRealName: "",
    password: "",
  });
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const handleChange = useCallback((event) => {
    setRegister((prevUser) => {
      return { ...prevUser, [event.target.name]: event.target.value };
    });
  }, []);

  const signup = useCallback(
    async (event) => {
      try {
        //로그인 요청
        const response = await signup(register);

        //요청 공통 헤더인 Authorization 추가
        addAuthHeader(response.data.data.accessToken);

        //Context에 인증 내용 저장
        console.log(response.data.data);

        //상태 재초기화
        setRegister({
          role: "",
          userName: "",
          userRealName: "",
          password: "",
        });

        
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const idCheck = useCallback(
    async (event) => {
      try {
        //로그인 요청
        const response = await idCheck(register.userName);

        //요청 공통 헤더인 Authorization 추가
        addAuthHeader(response.data.data.accessToken);

        //Context에 인증 내용 저장
        console.log(response.data.data);

        if(response.data.data === false){

        }
        else{
          
        }

        
      } catch (error) {
        console.log(error);
      }
    },[]
  );

  

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
                value={register.role}
                defaultchecked
              >
                USER
              </Radio>

              <Radio
                className="register-radio-button"
                name="userType"
                value={register.role}
                defaultchecked
              >
                MANAGER
              </Radio>
            </div>
            <div className="id-section">
              <input className="id-signin" type="text" placeholder="아이디" id="userName"
                    name="userName"
                    value={register.userName}
                    onChange={handleChange}/>
              <button>확인</button>
            </div>

            <input type="text" placeholder="성 명" id="userRealName"
                    name="userRealName"
                    value={register.userRealName}
                    onChange={handleChange}/>

            <input type="password" placeholder="비밀번호" id="password"
                    name="password"
                    value={register.password}
                    onChange={handleChange}/>
            <input type="password" placeholder="비밀번호 확인" />
            <div className="register-button">
              <button onClick={signup}>회원가입</button>
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
