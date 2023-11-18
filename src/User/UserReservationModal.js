import { useEffect, useState } from "react";
import "./UserReservationModal.css";
import { readReservationTime } from "../apis/Reservation";

const UserReservationModal = ({ isOpen, onSubmit, onClose }) => {
  const [selecteTime, setSelecteTime] = useState([]);
  const [modalSelectTime, setModalSelectTime] = useState([]);

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
  useEffect(() => {
    if (isOpen) {
      const fetchReservationTime = async () => {
        try {
          const response = await readReservationTime();
          setModalSelectTime(response.data); // 데이터를 상태에 저장
        } catch (error) {
          console.error("예약 시간을 불러오는데 실패했습니다", error);
        }
      };
      fetchReservationTime();
    } else {
      setModalSelectTime([]); // 모달이 닫힐 때 상태를 초기화
    }
  }, [isOpen]); // isOpen이 변경될 때마다 이펙트를 다시 실행

  useEffect(() => {
    // 상태가 업데이트된 후에 로그를 기록하려면 이렇게 별도의 useEffect를 사용
    console.log("예약 가능한 시간", modalSelectTime);
  }, [modalSelectTime]);

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
            {Array.isArray(modalSelectTime) &&
              modalSelectTime.map((timeSelect, index) => (
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
