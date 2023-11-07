import React, { useState } from 'react';
import './ManagerUpdateBasic.css';


  


function ManagerUpdateBasic() {
  // 상태 변수와 이를 설정하는 함수를 선언합니다.
  const [showFindAddress, setShowFindAddress] = useState(false);

  const [showFindNumber, setShowFindNumber] = useState(false);


  // '수정' 버튼을 눌렀을 때 호출되는 함수입니다.
  const toggleFindAddress = () => {
    setShowFindAddress(!showFindAddress); // 현재 상태를 반전시킵니다.
  };

  const toggleFindNumber = () => {
    setShowFindNumber(!showFindNumber); // 현재 상태를 반전시킵니다.
  };

  return (
   <div className="ManagerUpdateBasic">
    <div className="ManagerUpdateBasic-Container">
        <div className='ManagerUpdateBasic-Container-Items'>

              <div className='ManagerUpdateBasic-Container-Names'>
                <label>카페명</label>
                <input type='text' value={"형우카페"} disabled></input>
              </div>

              <div className='ManagerUpdateBasic-Container-Case'>
              <label>카페 유형</label>
                <input type='text' value={"프렌차이즈"} disabled></input>
              </div>

              <div className='ManagerUpdateBasic-Container-Number'>
              <div className='ManagerUpdateBasic-Container-Number-labeling'>
                  <label>카페 전화번호</label>
                  <button onClick={toggleFindNumber}>수정</button>
                </div>
                <div className='ManagerUpdateBasic-Container-Number-text'>
                <input type='text'value={"02-888-6251"} disabled></input> 
              </div>
              </div>

              <div className={`ManagerUpdateBasic-Container-Number ${!showFindNumber ? 'hidden' : ''}`}>
              <div className='ManagerUpdateBasic-Container-Number-labeling'>
                  <label>카페 전화번호 수정</label>
                  <button>저장</button>
                </div>
                <div className='ManagerUpdateBasic-Container-Number-text'>
                <input type='text'></input> 
              </div>
              </div>

              <div className='ManagerUpdateBasic-Container-Address'>
                <div className='ManagerUpdateBasic-Container-Address-labeling'>
                  <label>카페 주소</label>
                  <button onClick={toggleFindAddress}>수정</button>
                </div>
                <div className='ManagerUpdateBasic-Container-Address-text'>
                <input type='text'value={"경기도 의정부시 민락동"} disabled></input>
                <input type='text' value={"Kosa 빌딩 1층"} disabled></input>
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
