import { useState } from "react";
import Radio from "../Radio";
import DatePicker from "react-datepicker";
import "./UserReservation.css";
import UserNav from "./UserNav";
import Footer from "../Footer";

const UserReservation = () => {
  const [counter, setCounter] = useState(0);
  const [selectdate, setSelectDate] = useState(new Date());
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
              selected={selectdate}
              onChange={(date) => setSelectDate(date)}
              dateFormat="yyyy-MM-dd"
            />
          </div>

          <div className="user_reservation_radio">
            <h5>테이블 예약</h5>
            <div className="user_reservation_radio_button">
              <Radio
                className="user_reservation_radio_btn"
                name="tableType"
                value="multitable"
                defaultchecked
              >
                <p>단체석</p>
              </Radio>
              <Radio
                className="user_reservation_radio_btn"
                name="tableType"
                value="fourtable"
                defaultchecked
              >
                <p>4인석</p>
              </Radio>
              <Radio
                className="user_reservation_radio_btn"
                name="tableType"
                value="twotable"
                defaultchecked
              >
                <p>2인석</p>
              </Radio>
              <Radio
                className="user_reservation_radio_btn"
                name="tableType"
                value="onetable"
                defaultchecked
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
            <button> 시간 선택 </button>
          </div>
          <div className="user_reservation_time">
            <h5>예약 시간대</h5>
            <p>14 : 00 ~ 17 : 00</p>
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
    </userreservation>
  );
};
export default UserReservation;
