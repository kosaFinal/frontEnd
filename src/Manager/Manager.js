import "./Manager.css";
import Footer from "../Footer";
import Header from "../Header";
import ManagerNav from "./ManagerNav";

const Manager = () => {
  return (
    <manager>
      <Header />
      <ManagerNav />

      <div className="manager_main_template1">
        <div className="manager_main_template1_text">
          <h2>약속을 통한 효율적인 판매</h2>
          <p>약속을 통해 테이블 순환율을 올려 가게를 키워나가보세요!</p>
        </div>
        <div className="manager_main_template1_img">
          <img src="./assets/coffee-break.png" />
        </div>
      </div>
      <div className="manager_main_template2">
        <div className="manager_main_template2_text">
          <h2>매출 증가를 경험해보세요</h2>
          <p>
            지정된 시간을 통해 원활한 운영으로 매출 증가를 경험할 수 있습니다.
          </p>
        </div>
        <div className="manager_main_template2_img">
          <img src="./assets/growth.png" />
        </div>
      </div>
      <Footer />
    </manager>
  );
};
export default Manager;
