import { useEffect, useState } from 'react';
import './ManagerUpdateStudySetting.css';
import {managerSettingRead} from "./../apis/ManagerUpdateAxios";

function ManagerUpdateStudySetting() {
    const [selectedFileName, setSelectedFileName] = useState('');
    const [isEditingCafeStatus, setIsEditingCafeStatus] = useState(false);
    const [cafeStatus, setCafeStatus] = useState(false);
    const [tempCafeStatus, setTempCafeStatus] = useState(null);
    const [isEditingFloorPlan, setIsEditingFloorPlan] = useState(false);
    const [floorPlanImage, setFloorPlanImage] = useState('');
    const [originalFloorPlanImage, setOriginalFloorPlanImage] = useState('');
    const [tempFloorPlanImage, setTempFloorPlanImage] = useState('');


    const handleEditClick = () => {
        setIsEditingCafeStatus(true); // 수정: 여기를 변경했습니다.
        setTempCafeStatus(cafeStatus); // Set temporary status to current status
    };

  const handleCafeStatusChange = (event) => {
    // 문자열 'true'나 'false'를 boolean 값으로 변환합니다.
    const value = event.target.value === 'true';
    setTempCafeStatus(value);
};
    const handleSaveClick = () => {
        setCafeStatus(tempCafeStatus);
        setIsEditingCafeStatus(false); // 수정: 여기를 변경했습니다.
    };
    const handleEditFloorPlanClick = () => {
        setIsEditingFloorPlan(true);
        setTempFloorPlanImage(floorPlanImage); // 현재 평면도 이미지 저장
    };

    const handleFloorPlanFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = function(e) {
                setTempFloorPlanImage(e.target.result); // 임시 평면도 이미지 업데이트
                setSelectedFileName(file.name);
            };
            fileReader.readAsDataURL(file);
        }
    };

    const handleFloorPlanSaveClick = () => {
        setFloorPlanImage(tempFloorPlanImage); // 새로운 평면도 이미지 저장
        setIsEditingFloorPlan(false);
    };

    const handleFloorPlanCancelClick = () => {
        setTempFloorPlanImage(originalFloorPlanImage); // 원래 이미지로 되돌리기
        setSelectedFileName('');
        setIsEditingFloorPlan(false);
    };

     // State hooks for seats
  const [isEditingSeats, setIsEditingSeats] = useState(false);
  const [seatInput, setSeatInput] = useState({ 1: '', 2: '', 4: '', 다: ''});
  const [seats, setSeats] = useState({ 1: [], 2: [], 4: [], 다: [] });
  const [isEditingSection, setIsEditingSection] = useState({
    1: false,
    2: false,
    4: false,
    다: false
  });

  // ... (other handler functions)

  // Handler functions for seats
  const handleSeatInputChange = (section, value) => {
    setSeatInput(prevInput => ({ ...prevInput, [section]: value }));
  };

  const handleAddSeat = (section, seatNumber) => {
    if (seatNumber) {
      setSeats(prevSeats => ({
        ...prevSeats,
        [section]: [...prevSeats[section], seatNumber],
      }));
      setSeatInput(prevInput => ({ ...prevInput, [section]: '' })); // Clear input field
    }
  };

  const handleRemoveSeat = (section) => {
    setSeats(prevSeats => ({
      ...prevSeats,
      [section]: prevSeats[section].slice(0, -1), // Remove the last seat
    }));
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

  useEffect(() => {
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
                    newSeats[section] = tables.map(table => table.tableNumber);
                });
                setSeats(newSeats);
            }
        } catch (error) {
            console.error('매니저 설정 로드 실패:', error);
        }
    }
    fetchData();
}, []);


    return (
        <div className="ManagerUpdateStudySetting">
            <div className="ManagerUpdateStudySetting-Container">
                <div className='ManagerUpdateStudySetting-Container-Items'>
                    {/* 카페 카공 여부 */}
                    <div className="ManagerUpdateStudySetting-CafeIf">
                        <h2>카공 여부</h2>
                        <div className="ManagerUpdateStudySetting-CafeIf-Container">
                            {!isEditingCafeStatus && (
                                <>
                                    <button onClick={handleEditClick}>수정</button>
                                    <div className="ManagerUpdateStudySetting-CafeIf-Text">
                                        <p>카공 운영여부 : {cafeStatus ? '운영' : '미운영'}</p>
                                    </div>
                                </>
                            )}
                        </div>
                        {isEditingCafeStatus && (
                            <div className="ManagerUpdateStudySetting-CafeIf-Container">
                                <button onClick={handleSaveClick}>저장</button>
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
             <div className="ManagerUpdateStudySetting-FloorPlan">
                <h2>평면도</h2>
                {!isEditingFloorPlan && (
    <div className="ManagerUpdateStudySetting-FloorPlan-Container">
        <button onClick={handleEditFloorPlanClick}>수정</button>
        <div className="ManagerUpdateStudySetting-FloorPlan-img">
        <img src={`data:image/png;base64,${floorPlanImage}`} alt="Floor Plan" />

        </div>
    </div>
)}

{isEditingFloorPlan && (
    <div className="ManagerUpdateStudySetting-FloorPlan-Container-Update">
        <div className="ManagerUpdateStudySetting-FloorPlan-img FloorPlan-Update">
        
            <img src={`data:image/;base64,${tempFloorPlanImage}`} alt="New Floor Plan" />
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

             
             <div className='ManagerUpdateStudySetting-SeatContainer'>
             <h2 >카공 좌석 </h2>
             
             {['1', '2', '4', '다'].map(section => (
              <div key={section} className="ManagerUpdateStudySetting-SeatSection">

                <div className='ManagerUpdateStudySetting-SeatItems'>
                <h3 className='ManagerUpdateStudySetting-SeatText'>{`${section} 인석 `}</h3>
                <div className='ManagerUpdateStudySetting-SeatButtons'> 
                 
                  <button 
                    onClick={() => handleAddSeat(section, seatInput[section])} 
                    disabled={!isEditingSection[section]}> + </button>
                  <button 
                    onClick={() => handleRemoveSeat(section)} 
                    disabled={!isEditingSection[section]}> - </button>

                {isEditingSection[section] ? (
                  <button onClick={() => handleSaveSeats(section)}>
                    저장
                  </button>
                ) : (
                  <button onClick={() => handleEditSectionToggle(section)}>
                    수정
                  </button>
                )}      
                     
                </div>
                    <div className='ManagerUpdateStudySetting-SeatInput'>
                    <input 
                    disabled={!isEditingSection[section]}
                    value={seatInput[section]}
                    onChange={e => handleSeatInputChange(section, e.target.value)}/>
                    </div>
                    </div>
                
                <div className='ManagerUpdateStudySetting-SeatPrint'>
                  {seats[section].map((seat, index) => <input type='text' disabled key={index} value={seat}></input>)}
                </div>
                <hr></hr>
              </div>
              
            ))}
            
            </div>
          </div> 
        </div>  
      </div> 
    );
}

export default ManagerUpdateStudySetting;
