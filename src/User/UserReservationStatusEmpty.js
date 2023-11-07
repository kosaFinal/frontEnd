import "./UserReservationStatusEmpty.css";
import UserNav from "./UserNav";
import Footer from "../Footer";

const UserReservationStatusStatusEmpty = () => {
  return (
    <userreservationstatusempty>
      <UserNav />
      <div className="userreservationstatusstatusempty">
        <div className="noreserv">
          <h1 className="x">X</h1>
          <div className="no-reserve-main-content">
            <p>
              <span>윤형우 고객님 </span>
              예약된 사항이 없습니다.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </userreservationstatusempty>
  );
};

export default UserReservationStatusStatusEmpty;
