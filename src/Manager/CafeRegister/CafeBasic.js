import { useState } from 'react';
import './CafeBasic.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CafeBasic = () => {
  const [showFindTime, setShowFindTime] = useState(false);
  const [showFindChips, setShowFindChips] = useState(false);

  const roundToHour = (date) => {
    date.setMinutes(0);
    return date;
  };

  const [startTime, setStartTime] = useState(roundToHour(new Date()));
  const [endTime, setEndTime] = useState(roundToHour(new Date()));

  const handleChangeStartTime = (time) => {
    setStartTime(time);
  };

  const handleChangeEndTime = (time) => {
    setEndTime(time);
  };

  return(
    <div className="cafe-register-box">
      <div className="cafe-register-title">
        <p>카페 기본 정보를 <br />입력해주세요</p>
        <hr />
      </div>
      <div className="cafe-register-content">
        <div className='cafe-register-basic'>
          <p>운영시간</p>
          <div className='time-picker-div'>
              <label>카페 시작 시간</label>
              <DatePicker
                className='register-time-picker'
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
            <div className='time-picker-div'>
              <label>카페 종료 시간</label>
              <DatePicker
                className='register-time-picker'
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
        <div className='cafe-register-basic'>
          <p>카페주소</p>
          <div className='register-addr'>
            <input type="text" placeholder="주소 찾기 버튼을 클릭해주세요" disabled />
            <button>주소찾기</button>
          </div>
          <div className='register-addr-extra'>
          <input type="test" placeholder="상세주소"/>
          </div>
        </div>
        <div className='cafe-register-basic'>
          <p>전화번호</p>
          <div className='register-tel'>
            <input type="text" placeholder="전화번호" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CafeBasic;
