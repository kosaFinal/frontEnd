import { useState } from "react";
import CancleModal from "./CancleModal";
import "./InProgressTabContent.css";

const InProgressTabContent = () => {
  const inProgressReservations = [
    { name: '윤형우', type: '4인석', time: '12:00 ~ 15:00', cnt: '3명', seat: 'A1' },
    { name: '윤형우', type: '4인석', time: '12:00 ~ 15:00', cnt: '3명', seat: 'B2' },
    { name: '윤형우', type: '4인석', time: '12:00 ~ 15:00', cnt: '3명', seat: 'C3' }
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

  return (
    <div>
      {inProgressReservations.map((reservation, index) => (
          <div className="reservation-item">
            <div className="inprogress-name">{reservation.name}</div>
            <div className="inprogress-info">
              <div>예약 테이블: {reservation.type}</div>
              <div>예약 좌석: {reservation.seat}</div>
              <div>인원수: {reservation.cnt}</div>
              <div>예약 시간: {reservation.time}</div>
            </div>
            <div className="inprogress-button">
              <button onClick={() => handleOpenCancleModal()}>취소하기</button>
            </div>
          </div>
      ))}
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
