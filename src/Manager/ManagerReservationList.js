import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

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
      <div>
      <div className="ManagerReservationList">
    <div className="ManagerReservationList-Container">
        <div className='ManagerReservationList-Container-Items'>

          {/* 달력 섹션 */}
          <div className='ManagerReservationList-Container-Date'>
        <h2>날짜별 예약 확인</h2>
        <div className='DatePicker-Section'>
          <DatePicker
          selected={Cdate}
          onChange={(date) => setDate(date)}
          dateFormat="yyyy-MM-dd" // 날짜 형식을 '년-월-일'로 설정
          inline
        />
        </div>
        <div ManagerReservationListc-Container-Date></div>
        

    </div>
       
      </div>
      </div>
      </div>
      </div>
    </managerreservationlist>
  );
};

export default ManagerReservationList;
