import { useEffect, useState } from "react";
import CancleModal from "./CancleModal";
import FinishModal from "./FinishModal";
import "./StatusTabContent.css";
import { addAuthHeader } from "../../apis/axiosConfig";
import { managerReadProgress } from "../../apis/ManagerReservation";

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

  const handleOpenCancleModal = () => {
    setIsCancleModalOpen(true);
  };

  const handleCloseCancleModal = () => {
    setIsCancleModalOpen(false);
  };

  const handleCancleConfirm = () => {
    // 취소 처리 로직

    handleCloseCancleModal();
  };

  const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);

  const handleOpenFinishModal = () => {
    setIsFinishModalOpen(true);
  };

  const handleCloseFinishModal = () => {
    setIsFinishModalOpen(false);
  };

  const handleReservationFinish = () => {
    // 예약 종료 로직

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
              <button onClick={() => handleOpenFinishModal()}>예약 종료</button>
              <button onClick={() => handleOpenCancleModal()}>예약 취소</button>
            </div>
          </div>
        ))}
      {isFinishModalOpen && <div className="backdrop"></div>}
      {isFinishModalOpen && (
        <FinishModal
          isOpen={isFinishModalOpen}
          onClose={handleCloseFinishModal}
          onConfirm={handleReservationFinish}
        />
      )}

      {isCancleModalOpen && <div className="backdrop"></div>}
      {isCancleModalOpen && (
        <CancleModal
          isOpen={isCancleModalOpen}
          onClose={handleCloseCancleModal}
          onConfirm={handleCancleConfirm}
        />
      )}
    </div>
  );
};

export default InProgressTabContent;
