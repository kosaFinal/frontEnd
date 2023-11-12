import React, { useState } from 'react';
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import './ManagerReservationList.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import { addWeeks, subMonths, format } from 'date-fns';
import Footer from "../Footer";
import ManagerNav from "./ManagerNav";

registerLocale('ko', ko);

const ManagerReservationList = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  const minDate = subMonths(new Date(), 1); // 한 달 전
  const maxDate = addWeeks(new Date(), 1); // 일주일 후

  const [dateRange, setDateRange] = useState({
    minDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    maxDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  });

  // 달력의 달이 변경될 때 호출됩니다.
  const handleMonthChange = (newMonth) => {
    // 새로운 달의 첫날과 마지막날을 계산합니다.
    setDateRange({
      minDate: new Date(newMonth.getFullYear(), newMonth.getMonth(), 1),
      maxDate: new Date(newMonth.getFullYear(), newMonth.getMonth() + 1, 0)
    });
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
         renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div className="ManagerDatePicker-header-section" style={{width: 480}} > 
            {/* 월을 선택하는 드롭다운이나 버튼을 여기에 배치 */}
            <button className='ManagerDatePickerButton' onClick={decreaseMonth} disabled={prevMonthButtonDisabled} style={{marginRight: 50}}>
              {"<"}
            </button>
            <span className='ManagerDatePickerText'>{format(date, "MMMM", { locale: ko })}</span>
            <button className='ManagerDatePickerButton' onClick={increaseMonth} disabled={nextMonthButtonDisabled} style={{marginLeft: 50}}>
              {">"}
            </button>
            {/* 년도를 선택하는 드롭다운이나 추가적인 UI 요소는 여기에 포함시키지 않습니다. */}
          </div>
        )}
        minDate={minDate}
        maxDate={maxDate}
            locale={ko}
            selected={currentDate}
            onChange={(date) => setCurrentDate(date)}
            dateFormat="yyyy-MM-dd"
            inline
            
            onMonthChange={handleMonthChange}
            showDisabledMonthNavigation
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
        <div ManagerReservationListc-Container-Date>
        
      </div>
    </div>
       
      </div>
      </div>
      </div>

      <Footer />
    </managerreservationlist>
  );
};

export default ManagerReservationList;
