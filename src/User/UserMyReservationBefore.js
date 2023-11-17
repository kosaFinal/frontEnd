import "./UserMyReservationBefore.css";
import "./UserMyReservation.css";

const UserMyReservationBefore = () => {
  const myReservations = [
    {
      name: "윤형우",
      date: "2023-11-06",
      startTime: "10:00",
      endTime: "12:00",
      seat: "A1",
      status: "A",
    },
    {
      name: "윤형우2",
      date: "2023-11-06",
      startTime: "12:00",
      endTime: "14:00",
      seat: "A1",
      status: "P",
    },
    {
      name: "윤형우3",
      date: "2023-11-06",
      startTime: "14:00",
      endTime: "16:00",
      status: "P",
      seat: "A1",
    },
  ];

  return (
    <usermyreservationbefore>
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
              {reservation.status === "A" && (
                <div className="user_reservation_application">
                  <h4>승인 중</h4>
                </div>
              )}
              {reservation.status === "P" && (
                <div className="user_reservation_progress">
                  <h4>이용 중</h4>
                </div>
              )}
            </div>
            </div>
          ))}
        </div>
      </div>
    </usermyreservationbefore>
  );
};
export default UserMyReservationBefore;
