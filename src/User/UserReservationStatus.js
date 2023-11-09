import React, { useState, useEffect } from "react";
import UserNav from "./UserNav";
import "./UserReservationStatus.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const UserReservationStatus = () => {
  const [reservationStatus, setReservationStatus] = useState("A");
  const navigate = useNavigate();

  useEffect(() => {
    // todo:백엔드에서 받아온 값 훅 넣기
    if (reservationStatus === "C") {
      navigate("/user/reservationstatus/cancle");
    } else if (reservationStatus === "N") {
      navigate("/user/reservationstatus/empty");
    }
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
          <h5>예약 중</h5>
          <h5>예약 확정</h5>
          <h5>이용 중</h5>
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
          <div
            className={`step ${
              reservationStatus === "F" ? "progressbar_3" : ""
            }`}
          ></div>
        </div>
        <div className="reservation_bottom">
          <h4>
            고객님의 예약이{" "}
            <span>
              {reservationStatus === "A" && "예약 중"}
              {reservationStatus === "P" && "예약 확정"}
              {reservationStatus === "F" && "이용 중"}
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
