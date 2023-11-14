import { useState } from "react";
import Radio from "../Radio";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { format } from "date-fns";
import addDays from "date-fns/addDays";
import { startOfWeek, endOfWeek, addWeeks, isWithinInterval } from "date-fns";

import "./UserReservation.css";
import UserNav from "./UserNav";
import Footer from "../Footer";
import UserReservationModal from "./UserReservationModal";

const UserReservation = () => {
  const [counter, setCounter] = useState(0);
  const [selectdate, setSelectDate] = useState(new Date());
  const [tableType, setTableType] = useState("onetable");
  const [selecteTime, setSelecteTime] = useState(null);
  const [isUserReservationModal, setIsUserReservationModal] = useState(false);
  const handleSelectTimeModal = () => {
    setIsUserReservationModal(true);
  };

  const handleCloseSelectTimeModal = () => {
    setIsUserReservationModal(false);
  };

  const handleSelectTimeSubmit = (selecteTimes) => {
    setSelecteTime(selecteTimes);
    handleCloseSelectTimeModal();
  };

  const today = new Date();
  const nextWeek = addDays(today, 7);
  const handleTableTypeChange = (event) => {
    setTableType(event.target.value);
  };

  return (
    <userreservation>
      <UserNav />
      <div className="user_reservation_form">
        <div className="user_reservation_left">
          <h1>윰형 커피</h1>
          <div className="user_reservation_counter">
            <h5>인원</h5>
            <div className="user_reservation_counter_no">
              <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
                -
              </button>
              <h5>{counter}</h5>
              <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
          </div>
          <div className="user_reservation_date">
            <h5>날짜</h5>
            <DatePicker
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="ManagerDatePicker-header-section">
                  {/* 월을 선택하는 드롭다운이나 버튼을 여기에 배치 */}
                  <button
                    className="ManagerDatePickerButton"
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    {"<"}
                  </button>
                  <span className="ManagerDatePickerText">
                    {format(date, "MMMM", { locale: ko })}
                  </span>
                  <button
                    className="ManagerDatePickerButton"
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    {">"}
                  </button>
                  {/* 년도를 선택하는 드롭다운이나 추가적인 UI 요소는 여기에 포함시키지 않습니다. */}
                </div>
              )}
              minDate={today}
              maxDate={nextWeek}
              locale={ko}
              selected={selectdate}
              onChange={(date) => setSelectDate(date)}
              dateFormat="yyyy-MM-dd"
              filterDate={(date) => {
                const startOfThisWeek = startOfWeek(new Date(), {
                  weekStartsOn: 1,
                });
                const endOfNextWeek = endOfWeek(addWeeks(new Date(), 1), {
                  weekStartsOn: 1,
                });
                return isWithinInterval(date, {
                  start: startOfThisWeek,
                  end: endOfNextWeek,
                });
              }}
            />
          </div>

          <div className="user_reservation_radio">
            <h5>테이블 예약</h5>
            <div className="user_reservation_radio_button">
              <Radio
                className="user_reservation_radio_btn"
                name="tableType"
                value="multitable"
                checked={tableType === "multitable"}
                onChange={handleTableTypeChange}
              >
                <p>단체석</p>
              </Radio>
              <Radio
                className="user_reservation_radio_btn"
                name="tableType"
                value="fourtable"
                checked={tableType === "fourtable"}
                onChange={handleTableTypeChange}
              >
                <p>4인석</p>
              </Radio>
              <Radio
                className="user_reservation_radio_btn"
                name="tableType"
                value="twotable"
                checked={tableType === "twotable"}
                onChange={handleTableTypeChange}
              >
                <p>2인석</p>
              </Radio>
              <Radio
                className="user_reservation_radio_btn"
                name="tableType"
                value="onetable"
                checked={tableType === "onetable"}
                onChange={handleTableTypeChange}
              >
                <p>1인석</p>
              </Radio>
            </div>
          </div>
          <div className="user_reservation_seatno">
            <h5>좌석 번호</h5>
            <select>
              <option>
                {" "}
                <p>1번</p>{" "}
              </option>
              <option>
                {" "}
                <p>2번</p>{" "}
              </option>
              <option>
                {" "}
                <p>3번</p>{" "}
              </option>
              <option>
                {" "}
                <p>4번</p>{" "}
              </option>
            </select>
            <button onClick={handleSelectTimeModal}> 시간 선택 </button>
          </div>
          <div className="user_reservation_time">
            <h5>예약 시간대</h5>
            <div className="user_reservation_time_p">
              <p>
                {selecteTime
                  ? selecteTime.map((time) => time.reserveStart).join(" , ")
                  : ""}
              </p>
            </div>
          </div>
          <div className="user_reservation_submit">
            <button>예약하기</button>
          </div>
        </div>
        <div className="user_reservation_right">
          <img src="/assets/cafe_seat.png" />
        </div>
      </div>
      <Footer />
      <UserReservationModal
        isOpen={isUserReservationModal}
        onClose={handleCloseSelectTimeModal}
        onSubmit={handleSelectTimeSubmit}
      />
    </userreservation>
  );
};
export default UserReservation;
