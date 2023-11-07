import Footer from "../Footer";
import UserNav from "./UserNav";
import "./UserReservationStatusCancle.css";

const UserReservationStatusCancle = () => {
  return (
    <userreservationstatuscancle>
      <UserNav />
      <div className="status_cancle_form">
        <div className="status_cancle_img">
          <img src="/assets/sorry.png" />
        </div>
        <div className="status_cancle_text">
          <h1>
            죄송합니다.
            <br />
            <br />
            카페 내부 사정으로 인해 <span>취소 </span>되었습니다.
          </h1>
        </div>
      </div>
      <Footer />
    </userreservationstatuscancle>
  );
};
export default UserReservationStatusCancle;
