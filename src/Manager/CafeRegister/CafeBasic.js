import { useCallback, useEffect, useState } from 'react';
import './CafeBasic.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DaumPost from '../Component/DaumPost';

const CafeBasic = ({ cafeBasicInfo, onBasicInfoChange  }) => {
  // 시간
  const [showFindTime, setShowFindTime] = useState(false);
  const [showFindChips, setShowFindChips] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  

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

  // 주소
  const [showFindAddress, setShowFindAddress] = useState(false);

  // 주소 관련 상태
  const [addressObj, setAddressObj] = useState({
    areaAddress: '', // 기본값을 설정
    townAddress: '', // 기본값을 설정
    X: '',
    Y: ''
  });

  // 주소 수정 상태
  const [editAddressObj, setEditAddressObj] = useState({
    areaAddress: '',
    townAddress: '',
    X: '',
    Y: ''
  });

  useEffect(() => {
    console.log("선택된 카페 유형: ", editAddressObj);
  }, [editAddressObj]);

  useEffect(() => {
    // Props로 받은 cafeBasicInfo와 현재 상태 비교
    if (cafeBasicInfo) {
      if (
        cafeBasicInfo.address.townAddress !== addressObj.townAddress ||
        cafeBasicInfo.address.areaAddress !== addressObj.areaAddress ||
        cafeBasicInfo.phoneNumber !== phoneNumber ||
        cafeBasicInfo.startTime !== startTime ||
        cafeBasicInfo.endTime !== endTime
      ) {
        setAddressObj(cafeBasicInfo.address);
        setEditAddressObj(cafeBasicInfo.address); // 수정된 주소 상태도 업데이트
        setPhoneNumber(cafeBasicInfo.phoneNumber);
        setStartTime(cafeBasicInfo.startTime);
        setEndTime(cafeBasicInfo.endTime);
      }
    }
  }, []); 

  useEffect(() => {
    // 현재 시간을 기준으로 분을 버림하여 초기 시간 설정
    const currentRoundedTime = roundToHour(new Date());
    setStartTime(currentRoundedTime);
    setEndTime(currentRoundedTime);
  }, []);
  

  useEffect(() => {
    // 종속성 배열에서 onBasicInfoChange 제거
    onBasicInfoChange({
      address: editAddressObj,
      phoneNumber,
      startTime,
      endTime
    });
  }, [editAddressObj, phoneNumber, startTime, endTime]);



// 주소 저장 핸들러
const handleAddressSave = () => {
  setAddressObj(editAddressObj);
  setShowFindAddress(false); // 주소 수정 필드를 숨깁니다.
};

// 상세 주소 입력 변경 핸들러
const handleAddressChange = (e, field) => {
  setEditAddressObj(prev => ({ ...prev, [field]: e.target.value }));
};

const handlePhoneNumberChange = (e) => {
  setPhoneNumber(e.target.value);
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
                selected={endTime}
                onChange={handleChangeEndTime}
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
            <input 
              type="text" 
              placeholder="주소 찾기 버튼을 클릭해주세요"
              value={editAddressObj.townAddress}
              onChange={(e) => handleAddressChange(e, "townAddress")}
              disabled />
            <DaumPost setAddressObj={setEditAddressObj} />
          </div>
          <div className='register-addr-extra'>
          <input 
            type="text" 
            placeholder="상세주소"
            value={editAddressObj.areaAddress}
            onChange={(e) => handleAddressChange(e, "areaAddress")} />
          </div>
        </div>
        <div className='cafe-register-basic'>
          <p>전화번호</p>
          <div className='register-tel'>
            <input type="text" placeholder="전화번호" 
              value={phoneNumber}
              onChange={handlePhoneNumberChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CafeBasic;