import { useState } from "react";
import UserNav from "./UserNav";
import "./UserMyReservation.css";
import Footer from "../Footer";
import UserMyReservationBefore from "./UserMyReservationBefore";
import UserMyReservationAfter from "./UserMyReservationAfter";

const UserMyReservation = () => {
  const myReservations = [
    {
      name: "커피커피",
      date: "2023-11-06",
      startTime: "10 : 00",
      endTime: "12:00",
      seat: "A1",
    },
    {
      name: "커피커피",
      date: "2023-11-06",
      startTime: "12:00",
      endTime: "14:00",
      seat: "A1",
    },
    {
      name: "커피커피",
      date: "2023-11-06",
      startTime: "14 : 00",
      endTime: "16:00",
      seat: "A1",
    },
  ];
  const [activeTab, setActiveTab] = useState("진행");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <usermyreservation>
      <UserNav />

      <div className="user_tab-buttons">
        <button
          className={`inProgressButton ${activeTab === "진행" ? "active" : ""}`}
          onClick={() => handleTabChange("진행")}
        >
          진행
        </button>
        <button
          className={`upcomingButton ${activeTab === "확정" ? "active" : ""}`}
          onClick={() => handleTabChange("확정")}
        >
          확정
        </button>
      </div>
      <div className="user_tab-content">
        {activeTab === "진행" ? (
          <UserMyReservationBefore />
        ) : (
          <UserMyReservationAfter />
        )}
      </div>

      <Footer />
    </usermyreservation>
  );
};
export default UserMyReservation;
