import Header from "../../Header";
import ManagerNav from "../ManagerNav";
import TabContent from "./TabContent";

const ManagerReservationStatus = () => {
  return (
    <managerreservationstatus>
      <Header />
      <ManagerNav />
      <div>
        <p>예약현황</p>
        <TabContent />
      </div>
      <footer />
    </managerreservationstatus>
  );
};
export default ManagerReservationStatus;
