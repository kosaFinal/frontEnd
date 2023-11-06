import "./UserReservationStatusEmpty.css";

const UserReservationStatusStatusEmpty = () => {
  return (
    <div className="nocurrent-reservation-container">
      {/* <div className="no-reservation-section">
        <img className="current-img" src="/assets/no-reservation-status.png"></img>
        <label className="tmp">X</label>
      </div> */}
      <div className="noreserv">
        <h1 className="x">X</h1>
        <div className="status-content">
          <p className="no-reserve-main-content">
            윤형우 고객님
            <br />
            예약된 사항이 없습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserReservationStatusStatusEmpty;
