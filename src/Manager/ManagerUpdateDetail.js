import React, { useState } from 'react';
import './ManagerUpdateDetail.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

function ManagerUpdateDetail () {

    const roundToHour = (date) => {
        date.setMinutes(0);
        return date;
      };
    
      const [startTime, setStartTime] = useState(roundToHour(new Date())); // 시작 시간 상태
    
      // 시작 시간을 업데이트하는 함수
      const handleChangeStartTime = (time) => {
        setStartTime(time);
      };
      
    return(
        <div className="ManagerUpdateDetail">
        <div className="ManagerUpdateDetail-Container">
        <div className='ManagerUpdateDetail-Container-Items'>

       {/* 카페 운영시간 */}
        <div className='ManagerUpdateDetail-Container-Time'>
            <div className='ManagerUpdateDetail-Container-Time-Text'>
            <h2>운영시간</h2>
            <button>수정</button>
            </div>
                <div className='ManagerUpdateDetail-Container-Time-labeling'>
                  <label>카페 시작 시간</label>
                </div>
                <div className='ManagerUpdateBasic-Container-Time-Input'>
                <DatePicker
                selected={startTime}
                onChange={handleChangeStartTime}
                timeFormat="HH:mm"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="Time"
                dateFormat="HH:mm"
              />
              </div>

              <div className='ManagerUpdateDetail-Container-Time-labeling'>
                  <label>카페 종료 시간</label>
                </div>
                <div className='ManagerUpdateBasic-Container-Time-Input'>
                <DatePicker
                selected={startTime}
                onChange={handleChangeStartTime}
                timeFormat="HH:mm"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="Time"
                dateFormat="HH:mm"
              />       
              </div>

              </div>


              <div className='ManagerUpdateDetail-Container-Time'>
              <div className='ManagerUpdateDetail-Container-Time-Text'>
            <h2>운영시간 수정</h2>
            <button>저장</button>
            </div>
                <div className='ManagerUpdateDetail-Container-Time-labeling'>
                  <label>카페 시작 시간</label>
                </div>
                <div className='ManagerUpdateBasic-Container-Time-Input'>
                <DatePicker
                selected={startTime}
                onChange={handleChangeStartTime}
                timeFormat="HH:mm"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="Time"
                dateFormat="HH:mm"
              />
              </div>

              <div className='ManagerUpdateDetail-Container-Time-labeling'>
                  <label>카페 종료 시간</label>
                </div>
                <div className='ManagerUpdateBasic-Container-Time-Input'>
                <DatePicker
                selected={startTime}
                onChange={handleChangeStartTime}
                timeFormat="HH:mm"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="Time"
                dateFormat="HH:mm"
              />       
              </div>

              </div>

                {/* 카페 특성 */}
                <div className='ManagerUpdateDetail-Container-Chips'>
                
                <div className='ManagerUpdateDetail-Container-Chips-labeling'>
                <h2>카페 특성</h2>
                <button>수정</button>
                </div>
                <div className='ManagerUpdateBasic-Container-Chips-Input'>
                 <button className='ManagerUpdateBasic-Container-Chips-Button'>조용함</button>
                 <button className='ManagerUpdateBasic-Container-Chips-Button'>음악 없음</button>
                 <button className='ManagerUpdateBasic-Container-Chips-Button'>편한 좌석</button>
                 <button className='ManagerUpdateBasic-Container-Chips-Button'>디저트</button>
                 <button className='ManagerUpdateBasic-Container-Chips-Button'>감성적</button>
                 <button className='ManagerUpdateBasic-Container-Chips-Button'>콘센트</button>
              </div>


                    </div>

                    <div className='ManagerUpdateDetail-Container-Chips'>
                
                <div className='ManagerUpdateDetail-Container-Chips-labeling'>
                <h2>카페 특성 수정</h2>
                <button>저장</button>
                </div>
                <div className='ManagerUpdateBasic-Container-Chips-Input'>
                <button className='ManagerUpdateBasic-Container-Chips-Button'>조용함</button>
                 <button className='ManagerUpdateBasic-Container-Chips-Button'>음악 없음</button>
                 <button className='ManagerUpdateBasic-Container-Chips-Button'>편한 좌석</button>
                 <button className='ManagerUpdateBasic-Container-Chips-Button'>디저트</button>
                 <button className='ManagerUpdateBasic-Container-Chips-Button'>감성적</button>
                 <button className='ManagerUpdateBasic-Container-Chips-Button'>콘센트</button>
              </div>


                    </div>



                </div>
            </div>
        </div>
    )
}

export default ManagerUpdateDetail;