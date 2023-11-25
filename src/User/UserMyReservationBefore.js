import "./UserMyReservationBefore.css";
import "./UserMyReservation.css";
import { useEffect, useState } from "react";
import ReactPaginate from "react-js-pagination";
import { reservationProgress } from "../apis/UserReservation";

const UserMyReservationBefore = () => {
  const [reservationBefore, setReservationBefore] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const paginate = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      <div className="user_myReservation-container_before">
        {reservationBefore.length === 0 ? (
          <div className="user_myReservation_no_exist">
            예약 현황이 없습니다.
          </div>
        ) : (
          <>
            {paginate(reservationBefore).map((reservation, index) => (
              <div key={index} className="user_reservation-item">
                <div className="user_reservation_cafe_img">
                  <img src={`data:image/;base64,${reservation.cafeRepImg}`} />
                </div>

                <div className="user_reservation_text_before">
                  <div className="user_cafe_name_before">
                    {reservation.cafeName}
                  </div>
                  <div className="user_reservation_row_before">
                    <div className="user_inprogress-info_before">
                      <p>
                        {" "}
                        이용 날짜 : {reservation.reserveDate}
                        <br />
                        이용 시간 : {reservation.reserveStart} ~{" "}
                        {reservation.reserveEnd}
                        <br />
                        좌석: {reservation.tableNumber}
                      </p>
                    </div>
                  </div>
                </div>
                {reservation.state === "A" && (
                  <div className="user_reservation_application_before">
                    <h4>승인 중</h4>
                  </div>
                )}
                {reservation.state === "P" && (
                  <div className="user_reservation_progress_before">
                    <h4>이용 중</h4>
                  </div>
                )}
              </div>
            ))}
            <ReactPaginate
              activePage={currentPage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={reservationBefore.length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              prevPageText={"‹"}
              nextPageText={"›"}
            />
          </>
        )}
      </div>
    </usermyreservationbefore>
  );
};

export default UserMyReservationBefore;
