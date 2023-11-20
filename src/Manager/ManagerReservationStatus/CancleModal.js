import React from "react";
import "./CancleModal.css";

const CancleModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="cancle-modal">
      <div className="cancle-modal-content">
        <p className="cancle-title">예약을 취소하시겠습니까?</p>
        <p className="cancle-inform">취소가 확정된 이후에는 되돌릴 수 없습니다.<br />취소 사유를 선택해주세요.</p>
        <select className="cancle-reason" defaultValue="">
          <option value="" disabled>취소사유를 선택해주세요</option>
          <option value="F">영업종료</option>
          <option value="N">손님 미도착</option>
          <option value="I">카페 내부 사정</option>
          <option value="B">카페 내부 분위기 저해</option>
          <option value="E">기타</option>
        </select>
        <div className="cancle-modal-buttons">
          <button className="cancle-modal-close-button" onClick={onClose}>닫기</button>
          <button className="cancle-modal-confirm-button"onClick={onConfirm}>취소 확정</button>
        </div>
      </div>
    </div>
  );
};

export default CancleModal;
