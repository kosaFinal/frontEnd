import { useState } from "react";
import "./UserReservationModal.css";

const UserReservationModal = ({ isOpen, onSubmit, onClose }) => {
  const [selecteTime, setSelecteTime] = useState([]);
  const [modalSelectTime, setModalSelectTime] = useState([
    {
      reserveStart: "07:00",
      reserveEnd: "08 : 00",
      available: "Y",
    },
    {
      reserveStart: "08:00",
      reserveEnd: "09 : 00",
      available: "N",
    },
    {
      reserveStart: "09:00",
      reserveEnd: "10 : 00",
      available: "N",
    },
    {
      reserveStart: "10:00",
      reserveEnd: "11 : 00",
      available: "Y",
    },
    {
      reserveStart: "11:00",
      reserveEnd: "12 : 00",
      available: "Y",
    },
    {
      reserveStart: "12:00",
      reserveEnd: "13 : 00",
      available: "Y",
    },
    {
      reserveStart: "13:00",
      reserveEnd: "14 : 00",
      available: "Y",
    },
    {
      reserveStart: "14:00",
      reserveEnd: "15 : 00",
      available: "Y",
    },
    {
      reserveStart: "15:00",
      reserveEnd: "16 : 00",
      available: "Y",
    },
  ]);

  const handleSelectTime = (timeSelect) => {
    if (timeSelect.available === "Y") {
      setSelecteTime((prevSelecteTimes) => {
        // 이미 선택된 시간대를 포함하고 있는지 확인
        if (
          prevSelecteTimes.find((selecteTime) => selecteTime === timeSelect)
        ) {
          // 이미 있으면 제거
          return prevSelecteTimes.filter(
            (selecteTime) => selecteTime !== timeSelect
          );
        } else {
          // 없으면 추가
          return [...prevSelecteTimes, timeSelect];
        }
      });
    }
  };

  if (!isOpen) return null;
  const handleSubmit = () => {
    onSubmit(selecteTime);
  };
  return (
    <userreservationmodal>
      <div className="user_reservation_modal">
        <div className="user_reservation_modal_form">
          <div className="user_reservation_modal_header">
            <h3>시간 선택하기</h3>
            <div className="user_reservation_modal_img">
              <img onClick={onClose} src="/assets/search-x.png" />
            </div>
          </div>
          <div className="user_reservation_modal_select_time">
            {modalSelectTime.map((timeSelect, index) => (
              <button
                key={index}
                disabled={timeSelect.available === "N"}
                onClick={() => handleSelectTime(timeSelect)}
                className={selecteTime.includes(timeSelect) ? "selected" : ""}
              >
                {timeSelect.reserveStart}
                {/* <br /> ~ {timeSelect.reserveEnd} */}
              </button>
            ))}
          </div>
          <div className="user_reservation_select_time_submit">
            <button onClick={handleSubmit}>시간 선택하기</button>
          </div>
        </div>
      </div>
    </userreservationmodal>
  );
};
export default UserReservationModal;
