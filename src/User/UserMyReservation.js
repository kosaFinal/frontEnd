import UserNav from "./UserNav";
import './UserMyReservation.css';

const UserMyReservation = () => {

  const myReservations = [
    { name: '커피커피', date: '2023-11-06', time: '12:00 ~ 15:00', seat: 'A1' },
    { name: '커피커피', date: '2023-11-06', time: '12:00 ~ 15:00', seat: 'A1' },
    { name: '커피커피', date: '2023-11-06', time: '12:00 ~ 15:00', seat: 'A1' },
  ];

  return (
    <usermyreservation>
      <UserNav />
      <div className="myReservation-container">
        <div className="myReservation-title">
          <p>내 예약 조회</p>
          <hr />
        </div>
        <div>
          {myReservations.map((reservation, index) => (
            <div className="reservation-item">
              <div className="inprogress-name">{reservation.name}</div>
              <div className="inprogress-info">
                <div>이용 날짜: {reservation.date}</div>
                <div>이용 시간: {reservation.time}</div>
                <div>좌석: {reservation.seat}</div>
              </div>
            </div>
          ))} 
        </div>
      </div>
        
      
    </usermyreservation>
  );
};
export default UserMyReservation;
