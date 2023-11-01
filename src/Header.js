import { Link } from "react-router-dom";
import "./Header.css";

const header = () => {
  return (
    <header>
      <div className="header_left">
        <div className="header_img">
          <img src="./assets/logo_3.png" />
        </div>
        <div className="header_left_text">
          <h1>cafe-in</h1>
          <p>wherever you want</p>
        </div>
      </div>
      <div className="header_right">
        <Link to="/login">
          <p>로그인</p>
        </Link>
        <p>|</p>
        <Link to="/register">
          <p>회원가입</p>
        </Link>
      </div>
    </header>
  );
};
export default header;
