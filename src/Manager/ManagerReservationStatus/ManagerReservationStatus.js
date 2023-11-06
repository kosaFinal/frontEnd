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
      <p className="reservation-status-title">예약현황</p>
      <StatusTab />
      <Footer />
    </managerreservationstatus>
  );
};
export default ManagerReservationStatus;
