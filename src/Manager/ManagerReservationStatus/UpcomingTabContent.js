import "./UpcomingTabContent.css";

const UpcomingTabContent = () => {
  const upComingReservations = [
    { name: '윤형우', type: '4인석', time: '12 : 00 ~ 15 : 00', cnt: '3명', seat: 'A1' },
    { name: '윤형우', type: '4인석', time: '12 : 00 ~ 15 : 00', cnt: '3명', seat: 'B2' },
    { name: '윤형우', type: '4인석', time: '12 : 00 ~ 15 : 00', cnt: '3명', seat: 'C3' }
  ];

  return (
    <div>
      {upComingReservations.map((reservation, index) => (
        <div key={index} className="reservation-item">
          <div className="upcoming-name">{reservation.name}</div>
          <div className="upcoming-info">
            <div>예약 테이블: {reservation.type}</div>
            <div>예약 좌석: {reservation.seat}</div>
            <div>인원수: {reservation.cnt}</div>
            <div>예약 시간: {reservation.time}</div>
          </div>
          <div className="upcoming-button">
            <button>확정하기</button>
            <button>취소하기</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingTabContent;