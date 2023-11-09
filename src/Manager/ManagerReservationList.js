import React, { useState } from 'react';
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import './ManagerReservationList.css';
import DatePicker from 'react-datepicker';
import Footer from "../Footer";
import ManagerNav from "./ManagerNav";

const ManagerReservationList = () => {
  const [Cdate, setDate] = useState(new Date());

  // Date 객체를 'yyyy-MM-dd' 형식의 문자열로 변환하는 함수
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (`0${d.getMonth() + 1}`).slice(-2); // 월은 0부터 시작하므로 1을 더해줌
    const day = (`0${d.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };

  return (
    <managerreservationlist>
      <ManagerNav />

      <div className="ManagerReservationList">
    <div className="ManagerReservationList-Container">
        <div className='ManagerReservationList-Container-Items'>

        <div className='ManagerReservationList-Container-Date-Text'>
              <h2>날짜별 예약 확인</h2>
            </div>
          {/* 달력 섹션 */}
          <div className='ManagerReservationList-Container-Date'>
        <div className='DatePicker-Section'>
          <DatePicker
          locale={ko}
          selected={Cdate}
          onChange={(date) => setDate(date)}
          dateFormat="yyyy-MM-dd" // 날짜 형식을 '년-월-일'로 설정
          inline
        />
        </div>
        
        <h3>예약자 현황</h3>
        <div className='ReservationList-Section'>
          
            <div className='ReservationList-UserName'>
              <h2>윤형우</h2>
            </div>

            <div className='ReservationList-Status'>
              <p>예약 좌석 : 7번</p>
              <p>예약 테이블 : 4인석</p>
              <p>인원 수 : 3명</p>
              <p>예약 시간 : 12:00 ~ 15:00</p>
            </div>
        </div>
        <div ManagerReservationListc-Container-Date></div>
        

    </div>
       
      </div>
      </div>
      </div>

      <Footer />
    </managerreservationlist>
  );
};

export default ManagerReservationList;
