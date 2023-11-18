import { useEffect, useState } from "react";
import Radio from "../Radio";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { format } from "date-fns";
import addDays from "date-fns/addDays";
import { readTableList } from "../apis/Reservation";
import { startOfWeek, endOfWeek, addWeeks, isWithinInterval } from "date-fns";
import { addAuthHeader } from "../apis/axiosConfig";
import "./UserReservation.css";
import UserNav from "./UserNav";
import Footer from "../Footer";
import UserReservationModal from "./UserReservationModal";

const UserReservation = () => {
  const [showTableOptions, setShowTableOptions] = useState(false);
  const [showSeatAndTimeOptions, setShowSeatAndTimeOptions] = useState(false);
  const [counter, setCounter] = useState(0);
  const [selectdate, setSelectDate] = useState(new Date());
  const [tableType, setTableType] = useState("onetable");
  const [selecteTime, setSelecteTime] = useState(null);
  const [tableNo, setTableNo] = useState("");
  const [tableInfo, setTableInfo] = useState(null);
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

  const onDateChange = (date) => {
    setSelectDate(date);
    setShowTableOptions(true);
  };

  const today = new Date();
  const nextWeek = addDays(today, 7);
  const handleTableTypeChange = (event) => {
    setTableType(event.target.value);
    setShowSeatAndTimeOptions(true);
  };
  useEffect(() => {
    const fetchTableInfo = async () => {
      console.log("토큰 헤더:", addAuthHeader());
      try {
        addAuthHeader();
        //네트워크 통신
        const response = await readTableList();
        //응답으로 받은 board 객체를 상태로 저장
        setTableInfo(response.data);
        console.log("데이터 :", response.data);
        console.log("테이블타입", tableInfo.data.tableInfo);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    fetchTableInfo();
  }, []);
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
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="ManagerDatePicker-header-section">
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
                </div>
              )}
              minDate={today}
              maxDate={nextWeek}
              locale={ko}
              selected={selectdate}
              onChange={onDateChange}
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
          {showTableOptions && (
            <div className="user_reservation_radio">
              <h5>테이블 예약</h5>
              <div
                className="user_reservation_radio_button"
                onChange={handleTableTypeChange}
              >
                <Radio
                  className="user_reservation_radio_btn"
                  name="tableType"
                  value="M"
                  checked={tableType === "multitable"}
                  onChange={handleTableTypeChange}
                >
                  <p>단체석</p>
                </Radio>
                <Radio
                  className="user_reservation_radio_btn"
                  name="tableType"
                  value="F"
                  checked={tableType === "fourtable"}
                  onChange={handleTableTypeChange}
                >
                  <p>4인석</p>
                </Radio>
                <Radio
                  className="user_reservation_radio_btn"
                  name="tableType"
                  value="T"
                  checked={tableType === "twotable"}
                  onChange={handleTableTypeChange}
                >
                  <p>2인석</p>
                </Radio>
                <Radio
                  className="user_reservation_radio_btn"
                  name="tableType"
                  value="O"
                  checked={tableType === "onetable"}
                  onChange={handleTableTypeChange}
                >
                  <p>1인석</p>
                </Radio>
              </div>
            </div>
          )}
          {showSeatAndTimeOptions && (
            <div className="user_reservation_seatno">
              <h5>좌석 번호</h5>
              <select
                value={tableNo}
                onChange={(e) => setTableNo(e.target.value)}
              >
                {tableInfo &&
                  tableInfo.data.tableInfo[tableType] &&
                  tableInfo.data.tableInfo[tableType].map((table, index) => (
                    <option key={index} value={table.tableId}>
                      {table.tableNumber}
                    </option>
                  ))}
              </select>
              <button onClick={handleSelectTimeModal}> 시간 선택 </button>
            </div>
          )}
          <div className="user_reservation_time">
            <h5>예약 시간대</h5>
            <div className="user_reservation_time_p">
              <p>
                {selecteTime
                  ? selecteTime
                      .map((time, index) => (
                        <span key={index} className="time-choice">
                          {time.reserveStart}
                        </span>
                      ))
                      .reduce(
                        (acc, curr, index, array) =>
                          index < array.length - 1
                            ? [...acc, curr]
                            : [...acc, curr],
                        []
                      )
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
