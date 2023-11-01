import { Link } from "react-router-dom";
import "./Main.css";
import Footer from "./Footer";
const Main = () => {
  return (
    <main>
      <div className="main_header">
        <div className="Main_header_img">
          <img src="./assets/logo_3.png" />
        </div>
        <div className="Main_header_text">
          <h1>cafe-in</h1>
          <p>wherever you want</p>
        </div>
      </div>
      <div className="Main_nav">
        <div className="Main_nav_left">
          <Link to="/manager">
            <div className="Manager_link">
              <img src="./assets/coffee-shop.png" />
              <h2>점주 페이지</h2>
            </div>
          </Link>
        </div>
        <div className="Main_nav_right">
          <Link to="/user">
            <div className="user_link">
              <img src="./assets/coffee.png" />
              <h2>유저 페이지</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className="main_template1">
        <div className="main_template1_text">
          <h2>wherever you want</h2>
          <p>
            카공과 커피의 조화를 이루는 카페
            <br />
            어디서나 원하는 카페를 찾아보세요!
          </p>
        </div>
        <div className="main_template1_img">
          <img src="./assets/handshake.png" />
        </div>
      </div>
      <div className="main_template2">
        <div className="main_template2_text">
          <h2>커피와 공부가 공존하는 카페</h2>
          <p>
            저희 <span>cafe-in</span>은 개인만의
            <br />
            스터디 플레이스를 존중합니다!
          </p>
        </div>
        <div className="main_template2_img">
          <img src="./assets/logo_6.png" />
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default Main;
