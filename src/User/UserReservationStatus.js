import ManagerNav from "../Manager/ManagerNav";
import UserReservationStatusStatusNo from "./UserReservationStatusEmpty";
import "./UserReservationStatus.css";
import UserReservationStatusStatusEmpty from "./UserReservationStatusEmpty";
import Footer from "../Footer";

const UserReservationStatus = () => {
  return (
    <userreservationstatus>
      <ManagerNav/>
      <div className="status">
        <UserReservationStatusStatusEmpty/>
      </div>
      <Footer/>
    </userreservationstatus>
  );
};
export default UserReservationStatus;
