import React, { useState, useEffect } from "react";
import UserNav from "./UserNav";
import "./UserReservationStatus.css";
import Footer from "../Footer";
import { reservationNow } from "../apis/UserReservation";
import { addAuthHeader } from "../apis/axiosConfig";
import { Link } from "react-router-dom";

const UserReservationStatus = () => {
  const [reservationStatus, setReservationStatus] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    const readReservationStatus = async () => {
      try {
        addAuthHeader();
        const response = await reservationNow();
        setReservationStatus(response.data.data);
        console.log("잘했네", response.data);
      } catch (error) {
        console.error("내가 만든 기능이니깐 안되나?", error);
      }
    };
    readReservationStatus();

    if (reservationStatus.status === "A" && progress < 90) {
      interval = setInterval(() => {
        setProgress((oldProgress) => Math.min(oldProgress + 1, 90));
      }, 3333);
    }
    if (reservationStatus.status === "P") {
      setProgress(100);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [reservationStatus.status]);

  return (
    <userreservationstatus>
      <UserNav />
      <div className="reservation-status">
        {reservationStatus && reservationStatus.userRealName && (
          <div className="reservation_username">
            <h1>
              <span>{reservationStatus.userRealName}</span> 고객님
              <hr />
            </h1>
          </div>
        )}
        <div className="reservation_status_text">
          <h5>신청</h5>
          <h5>진행</h5>
        </div>
        <div className="progress-bar">
          <div
            className={`step ${
              reservationStatus.status === "A" ? "progressbar_1" : ""
            }`}
            style={{ width: `${progress}%` }}
          ></div>
          <div
            className={`step ${
              reservationStatus.status === "P" ? "progressbar_2" : ""
            }`}
          ></div>
        </div>
        <div className="reservation_bottom">
          {reservationStatus && reservationStatus.status && (
            <h4>
              고객님의 예약이{" "}
              <span>
                {reservationStatus.status === "A" && "신청"}
                {reservationStatus.status === "P" && "진행"}
              </span>{" "}
              상태 입니다.
            </h4>
          )}
        </div>
        <Link to="/user/myreservation">
          {reservationStatus.status === "P" &&
            "진행"(
              <div className="link_reservationList">
                <button>예약 내역 조회하기</button>
              </div>
            )}
        </Link>
      </div>
      <Footer />
    </userreservationstatus>
  );
};

export default UserReservationStatus;
