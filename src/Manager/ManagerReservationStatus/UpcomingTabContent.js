import { useState } from "react";
import "./StatusTabContent.css";
import CancleModal from "./CancleModal";
import ConfirmModal from "./ConfirmModal";

const UpcomingTabContent = () => {
  const upComingReservations = [
    { name: '윤형우', type: '4인석', time: '12:00 ~ 15:00', cnt: '3명', seat: 'A1', date: '2023-11-18' },
    { name: '윤형우', type: '4인석', time: '12:00 ~ 15:00', cnt: '3명', seat: 'B2', date: '2023-11-18' },
    { name: '윤형우', type: '4인석', time: '12:00 ~ 15:00', cnt: '3명', seat: 'C3', date: '2023-11-18' }
  ];

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

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleOpenConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleReservationConfirm = () => {
    // 예약 완료 로직

    handleCloseConfirmModal();
  };


  return (
    <div>
      {upComingReservations.map((reservation, index) => (
          <div className="reservation-item">
            <div className="reservation-name">{reservation.name}</div>
            <div className="reservation-info">
              <div>예약 테이블: {reservation.type}</div>
              <div>예약 좌석: {reservation.seat}</div>
              <div>인원수: {reservation.cnt}</div>
              <div>예약 날짜: {reservation.date}</div>
              <div>예약 시간: {reservation.time}</div>
            </div>
            <div className="reservation-button">
              <button onClick={() => handleOpenConfirmModal()}>예약 확정</button>
              <button onClick={() => handleOpenCancleModal()}>예약 취소</button>
            </div>
        </div>
      ))}
      <hr className="divider" />
      {isConfirmModalOpen && (
        <div className="backdrop"></div>
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          onClose={handleCloseConfirmModal}
          onConfirm={handleReservationConfirm}
        />
      )}

      {isCancleModalOpen && (
        <div className="backdrop"></div>
      )}
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

export default UpcomingTabContent;