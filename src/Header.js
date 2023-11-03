import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header_left">
        <div className="header_img">
          <img src="/assets/logo_text_4-1.png" />
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
export default Header;
