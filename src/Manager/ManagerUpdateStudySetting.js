import { useEffect, useState } from 'react';
import './ManagerUpdateStudySetting.css';
import {managerSettingRead,managerSettingCafeStudyUpdate, managerSettingCafeImgUpdate,managerSettingCafeTableUpdate, managerSettingCafeTableDelete} from "./../apis/ManagerUpdateAxios";
import { async } from 'q';

function ManagerUpdateStudySetting() {
    const [selectedFileName, setSelectedFileName] = useState('');
    const [isEditingCafeStatus, setIsEditingCafeStatus] = useState(false);
    const [cafeStatus, setCafeStatus] = useState();
    const [tempCafeStatus, setTempCafeStatus] = useState(null);
    const [isEditingFloorPlan, setIsEditingFloorPlan] = useState(false);
    const [floorPlanImage, setFloorPlanImage] = useState('');
    const [originalFloorPlanImage, setOriginalFloorPlanImage] = useState('');
    const [tempFloorPlanImage, setTempFloorPlanImage] = useState('');


    const handleEditClick = () => {
        setIsEditingCafeStatus(true); 
        setTempCafeStatus(cafeStatus);
    };

  const handleCafeStatusChange = (event) => {
    // 문자열 'true'나 'false'를 boolean 값으로 변환합니다.
    const value = event.target.value === 'true';
    setTempCafeStatus(value);
};
    const handleSaveClick = async () => {
      const studyValue = tempCafeStatus ? 'Y' : 'N';

      try {
        const study = {
          study : studyValue
        };
    
        const response = await managerSettingCafeStudyUpdate(study);
        if (response.data.isSuccess) {
          setCafeStatus(tempCafeStatus);
          setIsEditingCafeStatus(false); 
        } else {
          console.log("카공 여부 업데이트 실패: ", response.data.message);
        }
      } catch (error) {
        console.error("API 호출 중 에러 발생: ", error);
      }
        
    };


    const handleEditFloorPlanClick = () => {
      setIsEditingFloorPlan(true);
      setTempFloorPlanImage(`data:image/png;base64,${floorPlanImage}`); // 현재 설정된 이미지를 임시 이미지로 설정
  };

    const [file, setFile] = useState(null); // 원본 파일 객체를 저장할 상태 추가

    const handleFloorPlanFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
          setFile(file); // 파일 객체를 file 상태에 저장
          const reader = new FileReader();
          reader.onloadend = () => {
              setTempFloorPlanImage(reader.result);
              setSelectedFileName(file.name);
          };
          reader.readAsDataURL(file);
      }
    };
    
    const handleFloorPlanSaveClick = async () => {
      if (!file) {
        alert('이미지를 선택해주세요.');
        return;
    }
  
    const formData = new FormData();
    formData.append('studyImg', file);
        try {
            const response = await managerSettingCafeImgUpdate(formData);
            if (response.data.isSuccess) {
                setFloorPlanImage(tempFloorPlanImage); // 새로운 평면도 이미지 저장
                setIsEditingFloorPlan(false);
            } else {
                console.log("이미지 업데이트 실패: ", response.data.message);
            }
        } catch (error) {
            console.error("API 호출 중 에러 발생: ", error);
        }
    };

    const handleFloorPlanCancelClick = () => {
        setTempFloorPlanImage(originalFloorPlanImage); // 원래 이미지로 되돌리기
        setSelectedFileName('');
        setIsEditingFloorPlan(false);
    };

  const [isEditingSeats, setIsEditingSeats] = useState(false);
  const [seatInput, setSeatInput] = useState({ 1: '', 2: '', 4: '', 다: ''});
  const [seats, setSeats] = useState({ 1: [], 2: [], 4: [], 다: [] });
  const [isEditingSection, setIsEditingSection] = useState({
    1: false,
    2: false,
    4: false,
    다: false
  });

  const handleSeatInputChange = (section, value) => {
    setSeatInput(prevInput => ({ ...prevInput, [section]: value }));
  };

  const sectionMapping = { '1': 'O', '2': 'T', '4': 'F', '다': 'M' };

  const updateSeatsWithSorting = (section, newSeat) => {
    setSeats(prevSeats => {
      const updatedSeats = [...prevSeats[section], newSeat];
      // 좌석 번호 순으로 정렬
      updatedSeats.sort((a, b) => a.number - b.number);
      return {
        ...prevSeats,
        [section]: updatedSeats
      };
    });
  };

  const handleAddSeat = async (section, seatNumber) => {
    if (seatNumber) {
      // 서버로 데이터 전송
      try {
        const tableNo = {
          tableType: sectionMapping[section],
          tableNumber: seatNumber
        };
  
        const response = await managerSettingCafeTableUpdate(tableNo);
        if (response.data.isSuccess) {
          // 응답으로 받은 좌석 정보로 로컬 상태 업데이트
          const newSeat = {
            id: response.data.newSeatId, // 예시: 응답으로 받은 새 좌석의 ID
            number: seatNumber
          };
          updateSeatsWithSorting(section, newSeat); // 상태 업데이트와 정렬을 한 번에 처리
          // setSeats 호출 부분 제거
          setSeatInput(prevInput => ({ ...prevInput, [section]: '' })); // 입력 필드 초기화
          await fetchData();
        } else {
          console.log("좌석 추가 실패: ", response.data.message);
        }
      } catch (error) {
        console.error("API 호출 중 에러 발생: ", error);
      }
    }
  };


  const handleRemoveSeat = async (section) => {
    const firstSeat = seats[section][0]; // 첫 번째 좌석을 가져옵니다.
    if (firstSeat) {
      try {
        const response = await managerSettingCafeTableDelete(firstSeat.id);
        if (response.data.isSuccess) {
          // 성공적으로 삭제된 경우, 로컬 상태 업데이트
          setSeats(prevSeats => ({
            ...prevSeats,
            [section]: prevSeats[section].slice(1), // 첫 번째 요소를 제외한 나머지로 업데이트
          }));
          await fetchData();
        } else {
          console.log("좌석 삭제 실패: ", response.data.message);
        }
      } catch (error) {
        console.error("API 호출 중 에러 발생: ", error);
        alert("예약중인 좌석입니다!");
      }
    }
  };



  const handleEditSectionToggle = (section) => {
    setIsEditingSection(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };
  const handleSaveSeats = (section) => {
    // 저장 로직을 여기에 구현하세요.
    setIsEditingSection(prevState => ({
      ...prevState,
      [section]: false
    }));
  };

    async function fetchData() {
        try {
            const response = await managerSettingRead();
            if (response.data.isSuccess) {
                const { settingResponse, cafeTableResponse } = response.data.data;

                // 카페 상태 및 이미지 설정
                const isCafeStudy = settingResponse.study === 'Y';
                setCafeStatus(isCafeStudy); 
                setFloorPlanImage(settingResponse.studyImg);
                setOriginalFloorPlanImage(settingResponse.studyImg);

                // 좌석 정보 설정
                const newSeats = { A: [], B: [], C: [], D: [] };
                const sectionMapping = { 'O': '1', 'T': '2', 'F': '4', 'M': '다' };
                Object.entries(cafeTableResponse.tableInfo).forEach(([tableType, tables]) => {
                  const section = sectionMapping[tableType];
                  newSeats[section] = tables.map(table => ({
                    id: table.tableId, // tableId 추가
                    number: table.tableNumber
                  }));
              });
              setSeats(newSeats);
            }
        } catch (error) {
            console.error('매니저 설정 로드 실패:', error);
        }
    }

useEffect(() => {
  fetchData();
}, [cafeStatus,floorPlanImage]);
    return (
        <div className="ManagerUpdateStudySetting">
            <div className="ManagerUpdateStudySetting-Container">
                <div className={`ManagerUpdateStudySetting-Container-Items ${!cafeStatus ? 'ManagerUpdateStudySetting-Container-Items-hidden' : ''}`}>
                    {/* 카페 카공 여부 */}
                    <div className="ManagerUpdateStudySetting-CafeIf">
  <div className="ManagerUpdateStudySetting-CafeIf-label">
    <h2>카공 여부</h2>
    {!isEditingCafeStatus && (
      <button onClick={handleEditClick}>수정</button>
    )}
    {isEditingCafeStatus && (
      <button onClick={handleSaveClick}>저장</button>
    )}
  </div>
                        
  <div className={`ManagerUpdateStudySetting-CafeIf-Container ${isEditingCafeStatus ? 'hidden' : ''}`}>
    <div className="ManagerUpdateStudySetting-CafeIf-Text">
      <p disabled>카공 운영여부 : {cafeStatus ? '운영' : '미운영'}</p>
    </div>
  </div>

  {isEditingCafeStatus && (
    <div className="ManagerUpdateStudySetting-CafeIf-Container">
      <div className="ManagerUpdateStudySetting-CafeIf-Text">
        <p>카공 운영여부</p>
        <div className="ManagerUpdateStudySetting-CafeIf-Option">
          <input 
            type="radio" 
            name="CafeIf-Change" 
            value="true" 
            checked={tempCafeStatus === true} 
            onChange={handleCafeStatusChange}
          /> O
          <input 
            type="radio" 
            name="CafeIf-Change" 
            value="false" 
            checked={tempCafeStatus === false} 
            onChange={handleCafeStatusChange}
          /> X
        </div>
      </div>
    </div>
  )}
</div>
             {/* 카페 카공 평면도 */}
             <div className={`ManagerUpdateStudySetting-FloorPlan ${!cafeStatus ? 'hidden' : ''}`}>
             <div className="ManagerUpdateStudySetting-FloorPlan-label">
  <h2>평면도</h2>
  {!isEditingFloorPlan && (
    <button onClick={handleEditFloorPlanClick}>수정</button>
  )}
  {isEditingFloorPlan && (
    <button onClick={handleFloorPlanSaveClick}>저장</button>
  )} </div>
                {!isEditingFloorPlan && (

    <div className="ManagerUpdateStudySetting-FloorPlan-Container">
      {/* <div className='FloorPlan-Button'>
        <button onClick={handleEditFloorPlanClick}>수정</button>
  </div> */}
        <div className="ManagerUpdateStudySetting-FloorPlan-img">

        <img src={`data:image/png;base64,${floorPlanImage}`} alt="Floor Plan" />
        </div>
    </div>
)}

{isEditingFloorPlan && (
    <div className="ManagerUpdateStudySetting-FloorPlan-Container-Update">
        <div className="ManagerUpdateStudySetting-FloorPlan-img FloorPlan-Update">
        
            <img src={tempFloorPlanImage}  alt="New Floor Plan" />
        </div>
        <input
            id="file-upload"
            className="hidden"
            type='file'
            onChange={handleFloorPlanFileChange}
        />
        <label htmlFor="file-upload" className="custom-file-upload">
            {selectedFileName || "이미지 등록"}
        </label>
        <div className="ManagerUpdateStudySetting-FloorPlan-Buttons">
            <button onClick={handleFloorPlanCancelClick}>취소</button>
            <button onClick={handleFloorPlanSaveClick}>저장</button>
        </div>
    </div>
                )}
            </div >
            
             {/* 좌석 선택 섹션 */}

             
             <div className={`ManagerUpdateStudySetting-SeatContainer ${!cafeStatus ? 'hidden' : ''}`}>
             <h2 >카공 좌석 </h2>

             {/* {isEditingSection[section] ? (
                 <button onClick={() => handleSaveSeats(section)}>
                   저장
                 </button>
               ) : (
                 <button onClick={() => handleEditSectionToggle(section)}>
                   수정
                 </button>
               )}    */}

            

            
             {['1', '2', '4', '다'].map(section => (
              <div key={section} className="ManagerUpdateStudySetting-SeatSection">
                 <div className='ManagerUpdateStudySetting-SeatSection-Allcontainer'>
                <div className='ManagerUpdateStudySetting-SeatSection-text'>
                  
            <h3 className='ManagerUpdateStudySetting-SeatText'>{`${section} 인석 `}</h3>
            <hr></hr>
            </div>
            

            <div className='ManagerUpdateStudySetting-SeatItems-Container'>
                <div className='ManagerUpdateStudySetting-SeatItems'>
                    <div className='ManagerUpdateStudySetting-SeatInput'>
                    <input 
                    disabled={!isEditingSection[section]}
                    value={seatInput[section]}
                    onChange={e => handleSeatInputChange(section, e.target.value)}/>
                    <button className='SeatButtons-Plus'
                   onClick={() => handleAddSeat(section, seatInput[section])} 
                   disabled={!isEditingSection[section]}> 추가 </button>
                    </div>

<div className='ManagerUpdateStudySetting-SeatPrint-List'> 
                    {seats[section].map((seat, index) => (
               <div key={index}  className='ManagerUpdateStudySetting-SeatPrint'>
      <input type='text' disabled value={seat.number}></input>
      <button 
        className='SeatButtons-Minus'
        onClick={() => handleRemoveSeat(section, seat.id)} 
        disabled={!isEditingSection[section]}
      > 
        삭제 
      </button>
    </div>
  ))}
  </div>
                    </div>

               


                
              </div>
              </div>
              </div>
            ))}
            </div>
            
          </div> 
        </div>  
      </div> 
      
    );
}

export default ManagerUpdateStudySetting;
