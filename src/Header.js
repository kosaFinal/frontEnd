import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header_left">
          <div className="header_img">
            <Link to="/">
              <img src="./assets/logo_text_4-1.png" />
            </Link>            
          </div>
        </div>
        <div className="login_header_right">
          <Link to="/login">
            <p>로그인</p>
          </Link>
          <p>|</p>
          <Link to="/register">
            <p>회원가입</p>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
