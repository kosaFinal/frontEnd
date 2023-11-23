import React, { useCallback, useState } from "react";
import "./Register.css";
import Radio from "./Radio";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { idCheck, signup } from "./apis/login";

function Register() {
  const [register, setRegister] = useState({
    role: "",
    userName: "",
    userRealName: "",
    password: "",
  });

  const [duplicate, setDuplicate] = useState(true);

  const [disable, setDisable] = useState(false);
  const [pwcheck, setPwcheck] = useState(false);

  const [validatePw, setValidatePw] = useState("");

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const handleChange = useCallback((event) => {
    setRegister((prevRegister) => {
      
      return { ...prevRegister, [event.target.name]: event.target.value };
    });
  }, []);

  const handleChangePw = useCallback((event) => {
    const input = event.target.value;
    setValidatePw(input);
    if(register.password === input){
      setPwcheck(true);
    }
    else{
      setPwcheck(false);
    }
    
  }, [register.password,validatePw]);

  const signupFun = useCallback(async () => {
    try {
      if (disable === true) {
        if(register.userRealName !== ""){
          if(pwcheck === true){
            
              //로그인 요청
              console.log(register.role);
              const response = await signup(register);

              //Context에 인증 내용 저장
              console.log(response.data.data);

              //상태 재초기화
              setRegister({
                role: "",
                userName: "",
                userRealName: "",
                password: "",
              });
          }
          else{
            alert("비밀번호를 제대로 입력하여 주세요");
          }
        }
        else{
          alert("성함을 입력하여 주세요");
        }
      } else {
        alert("아이디 중복 체크를 해주세요.");
      }
    } catch (error) {
      console.log(error);
    }
  }, [register,duplicate, pwcheck]);

  const idCheckFun = useCallback(async () => {
    try {
      //로그인 요청
      console.log(register.userName);
      if (register.userName !== '') {
        const response = await idCheck(register.userName);

        //Context에 인증 내용 저장
        console.log(response.data.data);

        if (response.data.data === false) {
          setDuplicate(false);
          console.log("duplicate: " + duplicate);
        } else {
          setDuplicate(true);
          setDisable(true);
        }
      }
      else{
        alert("아이디를 입력해 주세요.");
      }
    } catch (error) {
      console.log(error);
    }
  }, [duplicate, register.userName]);

  

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
            <div className={duplicate ? "id-section" : "id-signin-error"}>
              <input
                type="text"
                placeholder="아이디"
                id="userName"
                name="userName"
                value={register.userName}
                onChange={handleChange}
              />
              <button onClick={idCheckFun}>확인</button>
            </div>

            <input
              type="text"
              placeholder="성 명"
              id="userRealName"
              name="userRealName"
              value={register.userRealName}
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="비밀번호"
              id="password"
              name="password"
              value={register.password}
              onChange={handleChange}
            />
            
            <input value={validatePw} type="password" placeholder="비밀번호 확인" onChange={handleChangePw}/>
            {pwcheck ? 
            <span className="pwCheck-access">
            비밀번호가 일치합니다.
          </span>
            :
            <span className="pwCheck-deny">
            비밀번호가 일치하지않습니다.
          </span>}
            
              
            <div className="register-button">
              <button onClick={signupFun}>회원가입</button>
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
