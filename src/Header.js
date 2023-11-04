import { Link } from "react-router-dom";
import "./Header.css";

const header = () => {
  return (
    <header>
      <div className="header">
        <div className="header_left">
          <div className="header_img">
            <img src="/assets/logo_reimg.png" />
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
      </div>
    </header>
  );
};
export default header;
