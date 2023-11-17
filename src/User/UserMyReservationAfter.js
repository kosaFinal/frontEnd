import "./UserMyReservation.css";
import { Link } from "react-router-dom";
import "./UserMyReservationAfter.css";

const UserMyReservationAfter = () => {
  const myReservations = [
    {
      name: "이지은",
      date: "2023-11-06",
      startTime: "10:00",
      endTime: "12:00",
      seat: "A1",
      status: "F",
    },
    {
      name: "정차영",
      date: "2023-11-06",
      startTime: "12:00",
      endTime: "14:00",
      seat: "A1",
      status: "F",
    },
    {
      name: "형우윤",
      date: "2023-11-06",
      startTime: "14:00",
      endTime: "16:00",
      seat: "A1",
      status: "C",
    },
  ];

  return (
    <usermyreservationafter>
      <div className="user_myReservation-container">
        <div>
          {myReservations.map((reservation, index) => (
            <div className="user_reservation-item">
              <div className="user_inprogress-time">
                {reservation.startTime} ~ {reservation.endTime}
              </div>
              <div className="user_reservation_row">
                <div className="user_inprogress-info">
                  <div>성함: {reservation.name}</div>
                  <div>이용 날짜: {reservation.date}</div>
                  <div>좌석: {reservation.seat}</div>
                </div>
                {reservation.status === "F" && (
                  <div className="user_reservation_finish">
                    <h4>완료</h4>
                  </div>
                )}
                {reservation.status === "C" && (
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
