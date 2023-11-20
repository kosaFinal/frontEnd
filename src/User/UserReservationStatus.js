import React, { useState, useEffect } from "react";
import UserNav from "./UserNav";
import "./UserReservationStatus.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { reservationNow } from "../apis/Reservation";

const UserReservationStatus = () => {
  const [reservationStatus, setReservationStatus] = useState("A");
  const navigate = useNavigate();

  useEffect(() => {
    const readReservationStatus = async () => {
      try {
        const response = await reservationNow();
        setReservationStatus(response.data);
        console.log("잘했네", response);
      } catch (error) {
        console.error("내가 만든 기능이니깐 안되나?", error);
      }
    };
    readReservationStatus();
  }, []);

  return (
    <userreservationstatus>
      <UserNav />
      <div className="reservation-status">
        <div className="reservation_username">
          <h1>
            <span>윤형우</span> 고객님
            <hr />
          </h1>
        </div>
        <div className="reservation_status_text">
          <h5>신청</h5>
          <h5>진행</h5>
        </div>
        <div className="progress-bar">
          <div
            className={`step ${
              reservationStatus === "A" ? "progressbar_1" : ""
            }`}
          ></div>
          <div
            className={`step ${
              reservationStatus === "P" ? "progressbar_2" : ""
            }`}
          ></div>
        </div>
        <div className="reservation_bottom">
          <h4>
            고객님의 예약이{" "}
            <span>
              {reservationStatus === "A" && "신청"}
              {reservationStatus === "P" && "진행"}
            </span>{" "}
            상태 입니다.
          </h4>
        </div>
      </div>
      <Footer />
    </userreservationstatus>
  );
};
export default UserReservationStatus;
