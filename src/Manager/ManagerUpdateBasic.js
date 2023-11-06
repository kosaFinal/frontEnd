import React, { useState } from 'react';
import './ManagerUpdateBasic.css';


  


function ManagerUpdateBasic() {
  // 상태 변수와 이를 설정하는 함수를 선언합니다.
  const [showFindAddress, setShowFindAddress] = useState(false);

  // '수정' 버튼을 눌렀을 때 호출되는 함수입니다.
  const toggleFindAddress = () => {
    setShowFindAddress(!showFindAddress); // 현재 상태를 반전시킵니다.
  };

  return (
   <div className="ManagerUpdateBasic">
    <div className="ManagerUpdateBasic-Container">
        <div className='ManagerUpdateBasic-Container-Items'>

              <div className='ManagerUpdateBasic-Container-Names'>
                <label>카페명</label>
                <input type='text'></input>
              </div>

              <div className='ManagerUpdateBasic-Container-Case'>
              <label>카페 유형</label>
                <input type='text'></input>
              </div>

              <div className='ManagerUpdateBasic-Container-Address'>
                <div className='ManagerUpdateBasic-Container-Address-labeling'>
                  <label>카페 주소</label>
                  <button onClick={toggleFindAddress}>수정</button>
                </div>
                <div className='ManagerUpdateBasic-Container-Address-text'>
                <input type='text'></input>
                <input type='text'></input>
              </div>
                
              </div>
              <div className={`ManagerUpdateBasic-Container-Address-Update ${!showFindAddress ? 'hidden' : ''}`}>
              <div className='ManagerUpdateBasic-Container-Address-Update-labeling'>
                <div className='ManagerUpdateBasic-Container-Address-Update-findAddress'>
                   <label>카페 주소 수정</label>
                  <button>주소찾기</button>
                </div>
                <button>저장</button>
              </div>
              <div className='ManagerUpdateBasic-Container-Address-Update-text'>
                <input type='text'></input>
                <input type='text'></input>
              </div>
              </div>

        </div>
    </div>

   </div>
  );
}

export default ManagerUpdateBasic;
