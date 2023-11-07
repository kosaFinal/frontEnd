import UserNav from "./UserNav";
import "./UserReservationStatus.css";
import UserReservationStatusStatusEmpty from "./UserReservationStatusEmpty";
import Footer from "../Footer";

const UserReservationStatus = () => {
  return (
    <userreservationstatus>
      <UserNav/>
      <div className="status">
        <UserReservationStatusStatusEmpty/>
      </div>
      <Footer/>
    </userreservationstatus>
  );
};
export default UserReservationStatus;
