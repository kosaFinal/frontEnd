import React, { useEffect, useState } from 'react';
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import './ManagerReservationList.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import { addWeeks, subMonths, format } from 'date-fns';
import Footer from "../Footer";
import ManagerNav from "./ManagerNav";
import ReactPaginate from "react-js-pagination";
import {managerReadCalendarReservation} from "./../apis/ManagerReservation";


registerLocale('ko', ko);

const ManagerReservationList = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const paginate = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    fetchReservationsForDate(selectedDate);
  }, [selectedDate]);

  const fetchReservationsForDate = async (date) => {
    const formattedDate = format(date, "yyyyMMdd");
    try {
      const response = await managerReadCalendarReservation(formattedDate);
      if (response && response.data && response.data.data) {
        setReservations(response.data.data); // 예약 정보 배열을 상태로 설정
        
      }
    } catch (error) {
      console.error("예약 정보를 가져오는 중 오류 발생", error);
    }
  };

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


  // const getListSectionClass = () => {
  //   return reservations.length === 0 ? 'ManagerReservationList-Container-List-Section hidden' : 'ManagerReservationList-Container-List-Section';
  // };
  return (
    <managerreservationlist>
      <ManagerNav />

      <div className="ManagerReservationList">
    <div className="ManagerReservationList-Container">
        <div className='ManagerReservationList-Container-Items'>
          
        <div className='ManagerReservationList-Container-Date-Section'>
          
          {/* 달력 섹션 */}
          <div className='ManagerReservationList-Container-Date'>
          <div className='ManagerReservationList-Container-Date-Text'>
              <h2>날짜별 예약 확인</h2>
            </div>

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
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            inline
            
            onMonthChange={handleMonthChange}
            showDisabledMonthNavigation
          />

        </div>
        </div>

        <div className='ManagerReservationList-Container-List-Section'>
        <h2>예약자 현황</h2>
        <div className='ManagerReservationList-Container-List-OverFlow'>
        {reservations.length === 0 ? (
      <div className='ReservationList-Status-No'>
        <p>해당 날짜에 예약내역이 없습니다</p>
        <img src='/assets/search-X.png' alt='이미지'/>
      </div>
    ) : (
      <div className='ManagerReservationList-Container-List-items'>
        {paginate(reservations).map((reservation, index) => (
          <div key={index} className='ReservationList-Section'>
                    <div className='ReservationList-UserName'>
                      <h2>{reservation.userRealName}</h2>
                    </div>
                    <div className='ReservationList-Status'>
                      <p>예약 좌석 : {reservation.tableNumber}</p>
                      <p>예약 테이블 : {reservation.tableType}</p>
                      <p>인원 수 : {reservation.personCnt}</p>
                      <p>예약 시간 : {reservation.reserveStart} ~ {reservation.reserveEnd}</p>
                    </div>
                  </div>
                ))}
                <ReactPaginate
                  activePage={currentPage}
                  itemsCountPerPage={itemsPerPage}
                  totalItemsCount={reservations.length}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
                  prevPageText={"‹"}
                  nextPageText={"›"}
                />
              </div>
            )}
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