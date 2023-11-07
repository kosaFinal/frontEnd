import ManagerNav from "../Manager/ManagerNav";
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
