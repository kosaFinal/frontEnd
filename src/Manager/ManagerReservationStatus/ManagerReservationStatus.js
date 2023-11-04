import Footer from "../../Footer";
import Header from "../../Header";
import ManagerNav from "../ManagerNav";

import "./ManagerReservationStatus.css";
import StatusTab from "./StatusTab";

const ManagerReservationStatus = () => {
  return (
    <managerreservationstatus>
      <Header />
      <ManagerNav />
      <div className="reservation-status-title">
        <p>예약현황</p>
      </div>
      <StatusTab />
      <Footer />
    </managerreservationstatus>
  );
};
export default ManagerReservationStatus;
