import Footer from "../Footer";
import Header from "../Header";
import UserNav from "./UserNav";
import "./User.css";

const User = () => {
  return (
    <user>
      <Header />
      <UserNav />
      <div className="user_main_template1">
        <div className="user_main_template1_text">
          <h2>나만의 카공 플레이스</h2>
          <p>이제는 눈치 보지말고 나만의 스터디 플레이스를 즐겨 보세요!</p>
        </div>
        <div className="user_main_template1_img">
          <img src="./assets/studying.png" />
        </div>
      </div>
      <div className="user_main_template2">
        <div className="user_main_template2_text">
          <h2>아지트를 찾아보세요</h2>
          <p>cafe-in만의 검색 기능을 통해 자신만의 아지트를 골라보세요!</p>
        </div>
        <div className="user_main_template2_img">
          <img src="./assets/gps.png" />
        </div>
      </div>
      <Footer />
    </user>
  );
};
export default User;
