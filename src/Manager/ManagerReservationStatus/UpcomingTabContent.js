import { useEffect, useState } from "react";
import ReactPaginate from 'react-js-pagination';
import "./StatusTabContent.css";
import CancleModal from "./CancleModal";
import ConfirmModal from "./ConfirmModal";
import { managerChangeCancle, managerChangeConfirm, managerReadUpcoming } from "../../apis/ManagerReservation";
import Swal from "sweetalert2";
import { PulseLoader } from "react-spinners";

const UpcomingTabContent = () => {
  const [upcomingRevInfo, setUpcomingRevInfo] = useState(null);

  const getTableType = (tableType) => {
    switch (tableType) {
      case "O":
        return "1인석";
      case "T":
        return "2인석";
      case "F":
        return "4인석";
      case "M":
        return "다인석";
    }
  };

  const [isCancleModalOpen, setIsCancleModalOpen] = useState(false);
  const [cancleReservationIds, setCancleReservationIds] = useState([]);

  const handleOpenCancleModal = (reservation) => {
    setIsCancleModalOpen(true);
    setCancleReservationIds(reservation.reservationIds);
  };

  const handleCloseCancleModal = () => {
    setIsCancleModalOpen(false);
  };

  const handleCancleConfirm = async (reservationIds, reasonId) => {
    // 취소 처리 로직
    try{
      
      await managerChangeCancle({reservationIds: cancleReservationIds, cancleReasonId : reasonId});

      Swal.fire({
        icon: "success",
        title: "",
        text: "예약 취소가 완료되었습니다.",
        confirmButton: true,
        confirmButtonText: "확인",
        confirmButtonColor: "#FFCD4A",
        customClass: {
          confirmButton: 'no-outline',
        }
      }).then(result => {
        if(result.isConfirmed){
          window.location.reload();
        }
      });
      
    } catch(error){
      console.error(error);
    }

    handleCloseCancleModal();
  };

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [confirmReservationIds, setConfirmReservationIds] = useState([]);

  const handleOpenConfirmModal = (reservation) => {
    setIsConfirmModalOpen(true);
    setConfirmReservationIds(reservation.reservationIds);
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleReservationConfirm = async (reservationIds) => {
    // 예약 완료 로직
    try {

      await managerChangeConfirm({reservationIds: confirmReservationIds});
      
      Swal.fire({
        icon: "success",
        title: "",
        text: "예약 확정이 완료되었습니다.",
        confirmButton: true,
        confirmButtonText: "확인",
        confirmButtonColor: "#FFCD4A",
        customClass: {
          confirmButton: 'no-outline',
        }
      }).then(result => {
        if(result.isConfirmed){
          window.location.reload();
        }
      });

    } catch(error){
      console.error(error);
    }
    handleCloseConfirmModal();
  };

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const itemsPerPage = 3; // 페이지당 항목 수

  const paginate = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingRevInfo = async () => {
      try {
        setLoading(true);
        //네트워크 통신
        const response = await managerReadUpcoming();
        setUpcomingRevInfo(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUpcomingRevInfo();
  }, []);

  return (
    <div>
      {loading? (
        <div className="loading-list">
          <p>예약 내역을 불러오는 중입니다</p>
          <PulseLoader
            color="#CCC"
            margin={5}
            speedMultiplier={0.8}
          />
        </div>
      ) : (
        <>
          {upcomingRevInfo && upcomingRevInfo.data.length === 0 ? (
      <div className="reservation-no-exist">예정중인 예약 현황이 없습니다.</div>
    ) : (
      <>
        {upcomingRevInfo &&
        paginate(upcomingRevInfo.data).map((reservation, index) => (
          <div className="reservation-item">
            <div className="reservation-name">{reservation.userRealName}</div>
            <div className="reservation-info">
              <div>예약 날짜: {reservation.reserveDate}</div>
              <div>
                예약 시간: {reservation.reserveStart} ~ {reservation.reserveEnd}
              </div>
              <div>예약 테이블: {getTableType(reservation.tableType)}</div>
              <div>예약 좌석: {reservation.tableNumber}</div>
              <div>인원수: {reservation.personCnt}</div>
            </div>
            <div className="reservation-button">
              <button onClick={() => handleOpenConfirmModal(reservation)}>예약 확정</button>
              <button onClick={() => handleOpenCancleModal(reservation)}>예약 취소</button>
            </div>
          </div>
        ))}
      
      {upcomingRevInfo && (
        <ReactPaginate 
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={upcomingRevInfo.data.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          prevPageText={"‹"}
          nextPageText={"›"}
        />
      )}

      {isConfirmModalOpen && <div className="backdrop"></div>}
      {isConfirmModalOpen && (
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          onClose={handleCloseConfirmModal}
          onConfirm={handleReservationConfirm}
          reservationIds={confirmReservationIds}
        />
      )}

      {isCancleModalOpen && <div className="backdrop"></div>}
      {isCancleModalOpen && (
        <CancleModal
          isOpen={isCancleModalOpen}
          onClose={handleCloseCancleModal}
          onConfirm={handleCancleConfirm}
          reservationIds={cancleReservationIds}
        />
      )}
      </>
    )}
        </>
      )}
    </div>
  );
};

export default UpcomingTabContent;
