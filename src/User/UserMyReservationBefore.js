import "./UserMyReservationBefore.css";
import "./UserMyReservation.css";
import { useEffect, useState } from "react";
import { addAuthHeader } from "../apis/axiosConfig";
import { reservationProgress } from "../apis/UserReservation";

const UserMyReservationBefore = () => {
  const [reservationBefore, setReservationBefore] = useState([]);

  useEffect(() => {
    const reservationBeforeInfo = async () => {
      try {
        const response = await reservationProgress();
        setReservationBefore(response.data.data);
        console.log("잘 읽는중 : ", response.data);
      } catch (error) {
        console.error("잘좀 해봐 : ", error);
      }
    };
    reservationBeforeInfo();
  }, []);

  return (
    <usermyreservationbefore>
      <div className="user_myReservation-container">
        {reservationBefore.map((reservation, index) => (
          <div key={index} className="user_reservation-item">
            <div className="user_inprogress-time">
              {reservation.reserveStart} ~ {reservation.reserveEnd}
            </div>
            <div className="user_reservation_row">
              <div className="user_inprogress-info">
                <div>좌석: {reservation.tableNumber}</div>
                <div>이용 날짜: {reservation.reserveDate}</div>
              </div>
              {reservation.state === "A" && (
                <div className="user_reservation_application">
                  <h4>승인 중</h4>
                </div>
              )}
              {reservation.state === "P" && (
                <div className="user_reservation_progress">
                  <h4>이용 중</h4>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </usermyreservationbefore>
  );
};

export default UserMyReservationBefore;
