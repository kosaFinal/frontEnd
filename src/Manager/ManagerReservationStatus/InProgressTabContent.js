import { useEffect, useState } from "react";
import CancleModal from "./CancleModal";
import FinishModal from "./FinishModal";
import "./StatusTabContent.css";
import { addAuthHeader } from "../../apis/axiosConfig";
import { managerChangeCancle, managerChangeFinish, managerReadProgress } from "../../apis/ManagerReservation";

const InProgressTabContent = () => {
  const [progressRevInfo, setProgressRevInfo] = useState(null);

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
      addAuthHeader();
      console.log('Reservation IDs:', reservationIds);
      console.log('resaonId: ', reasonId)
      await managerChangeCancle({reservationIds: cancleReservationIds, cancleReasonId : reasonId});
      console.log("취소 처리");
      alert("예약 취소가 완료되었습니다.");
      window.location.reload();
    } catch(error){
      console.error(error);
    }

    handleCloseCancleModal();
  };

  const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);
  const [finishReservationIds, setFinishReservationIds] = useState([]);

  const handleOpenFinishModal = (reservation) => {
    setIsFinishModalOpen(true);
    setFinishReservationIds(reservation.reservationIds);
  };

  const handleCloseFinishModal = () => {
    setIsFinishModalOpen(false);
  };

  const handleReservationFinish =  async (reservationIds) => {
    // 이용 종료 로직
    try {
      addAuthHeader();
      console.log('Reservation IDs:', reservationIds);
      await managerChangeFinish({reservationIds: finishReservationIds});
      console.log("이용종료");
      alert("고객의 이용이 종료되었습니다.");
      window.location.reload();
    } catch(error){
      console.error(error);
    }
    handleCloseFinishModal();
  };

  useEffect(() => {
    const fetchProgressRevInfo = async () => {
      console.log("토큰 헤더:", addAuthHeader());
      try {
        addAuthHeader();
        //네트워크 통신
        const response = await managerReadProgress();
        //응답으로 받은 board 객체를 상태로 저장
        setProgressRevInfo(response.data);
        console.log("데이터 :", response.data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    fetchProgressRevInfo();
  }, []);

  return (
    <div>
      {progressRevInfo &&
        progressRevInfo.data.map((reservation, index) => (
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
              <button onClick={() => handleOpenFinishModal(reservation)}>이용 종료</button>
              <button onClick={() => handleOpenCancleModal(reservation)}>예약 취소</button>
            </div>
          </div>
        ))}
      {isFinishModalOpen && <div className="backdrop"></div>}
      {isFinishModalOpen && (
        <FinishModal
          isOpen={isFinishModalOpen}
          onClose={handleCloseFinishModal}
          onConfirm={handleReservationFinish}
          reservationIds={finishReservationIds}
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
    </div>
  );
};

export default InProgressTabContent;
