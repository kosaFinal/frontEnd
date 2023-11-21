import "./UserMyReservation.css";
import { Link } from "react-router-dom";
import "./UserMyReservationAfter.css";
import { useEffect, useState } from "react";
import { addAuthHeader } from "../apis/axiosConfig";
import { reservationFinish } from "../apis/UserReservation";

const UserMyReservationAfter = () => {
  const [reservationAfter, setReservationAfter] = useState([]);

  useEffect(() => {
    const reservationAfterInfo = async () => {
      try {
        const response = await reservationFinish();
        setReservationAfter(response.data.data);
        console.log("끝이 보인다 : ", response.data);
      } catch (error) {
        console.error("아직 끝이 아닌뎅 : ", error);
      }
    };
    reservationAfterInfo();
  }, []);

  return (
    <usermyreservationafter>
      <div className="user_myReservation-container">
        <div>
          {reservationAfter.map((reservation, index) => (
            <div key={index} className="user_reservation-item">
              <div className="user_inprogress-time">
                {reservation.reserveStart} ~ {reservation.reserveEnd}
              </div>
              <div className="user_reservation_row">
                <div className="user_inprogress-info">
                  <div>성함: {reservation.name}</div>
                  <div>이용 날짜: {reservation.reserveDate}</div>
                  <div>좌석: {reservation.tableNumber}</div>
                </div>
                {reservation.state === "F" && (
                  <div className="user_reservation_finish">
                    <h4>완료</h4>
                  </div>
                )}
                {reservation.state === "N" && (
                  <div className="user_reservation_cancle">
                    <h4>취소</h4>
                    <Link to="/user/reservationstatus/cancle">
                      <button>사유 확인</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </usermyreservationafter>
  );
};
export default UserMyReservationAfter;
