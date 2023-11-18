import { useState } from "react";
import CancleModal from "./CancleModal";
import FinishMoel from './FinishModal';
import "./StatusTabContent.css";

const InProgressTabContent = () => {
  const inProgressReservations = [
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

  return (
    <div>
      {inProgressReservations.map((reservation, index) => (
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
              <button onClick={() => handleOpenFinishModal()}>예약 종료</button>
              <button onClick={() => handleOpenCancleModal()}>예약 취소</button>
            </div>
          </div>
      ))}
      {isFinishModalOpen && (
        <div className="backdrop"></div>
      )}
      {isFinishModalOpen && (
        <FinishMoel
          isOpen={isFinishModalOpen}
          onClose={handleCloseFinishModal}
          onConfirm={handleReservationFinish}
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

export default InProgressTabContent;
