import { useState } from 'react';
import './ManagerUpdateStudySetting.css';

function ManagerUpdateStudySetting() {
    const [selectedFileName, setSelectedFileName] = useState('');
    const [isEditingCafeStatus, setIsEditingCafeStatus] = useState(false);
    const [cafeStatus, setCafeStatus] = useState(null);
    const [tempCafeStatus, setTempCafeStatus] = useState(null);
    const [isEditingFloorPlan, setIsEditingFloorPlan] = useState(false);
    const [floorPlanImage, setFloorPlanImage] = useState('/assets/floor_plan.png');
    const [originalFloorPlanImage, setOriginalFloorPlanImage] = useState('/assets/floor_plan.png');
    const [tempFloorPlanImage, setTempFloorPlanImage] = useState('');


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFileName(file.name);
        } else {
            setSelectedFileName('');
        }
    };

    const handleEditClick = () => {
        setIsEditingCafeStatus(true); // 수정: 여기를 변경했습니다.
        setTempCafeStatus(cafeStatus); // Set temporary status to current status
    };

    const handleCafeStatusChange = (event) => {
        setTempCafeStatus(event.target.value);
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
                                            checked={tempCafeStatus === 'true'} 
                                            onChange={handleCafeStatusChange}
                                        /> O
                                        <input 
                                            type="radio" 
                                            name="CafeIf-Change" 
                                            value="false" 
                                            checked={tempCafeStatus === 'false'} 
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
            <img src={floorPlanImage} alt="Floor Plan" />
        </div>
    </div>
)}

{isEditingFloorPlan && (
    <div className="ManagerUpdateStudySetting-FloorPlan-Container-Update">
        <div className="ManagerUpdateStudySetting-FloorPlan-img FloorPlan-Update">
            {/* 수정된 부분: tempFloorPlanImage로 바뀌어야 합니다. */}
            <img src={tempFloorPlanImage} alt="New Floor Plan" />
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
            </div>
            {/* 카페 카공 좌석 선택 */}

                    </div>
                </div>
            </div>
        
    )
}

export default ManagerUpdateStudySetting;
