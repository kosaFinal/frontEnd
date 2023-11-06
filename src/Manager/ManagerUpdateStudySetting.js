import { useState } from 'react';
import './ManagerUpdateStudySetting.css';


function ManagerUpdateStudySetting() {
    const [selectedFileName, setSelectedFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFileName(file.name);
        } else {
            setSelectedFileName('');
        }
    };
    return(
        <div className="ManagerUpdateStudySetting">
        <div className="ManagerUpdateStudySetting-Container">
        <div className='ManagerUpdateStudySetting-Container-Items'>

            {/* 카페 카공 여부 */}
            <div className="ManagerUpdateStudySetting-CafeIf">
                <h2>카공 여부</h2>
                <div className="ManagerUpdateStudySetting-CafeIf-Container">
                <button> 수정 </button>
                <div className="ManagerUpdateStudySetting-CafeIf-Text">
                    <p>카공 운영여부</p>
                <div className="ManagerUpdateStudySetting-CafeIf-Option"> 
                    <input type="radio" name="CafeIf" value="true"/> O
                    <input type="radio" name="CafeIf" value="false"/> X
                </div>
            </div>
        </div>

        <div className="ManagerUpdateStudySetting-CafeIf-Container">
                <button> 저장 </button>
                <div className="ManagerUpdateStudySetting-CafeIf-Text">
                    <p>카공 운영여부</p>
                <div className="ManagerUpdateStudySetting-CafeIf-Option"> 
                    <input type="radio" name="CafeIf-Change" value="true"/> O
                    <input type="radio" name="CafeIf-Change" value="false"/> X
                </div>
            </div>
        </div>
    </div>
            {/* 카페 카공 평면도 */}
            <div className="ManagerUpdateStudySetting-FloorPlan">
            <h2>평면도</h2>
            <div className="ManagerUpdateStudySetting-FloorPlan-Container">
                <button> 수정 </button>
                <div className="ManagerUpdateStudySetting-FloorPlan-img">
                <img src="/assets/floor_plan.png" alt="Floor Plan"/>
                </div>
                </div>

                <div className="ManagerUpdateStudySetting-FloorPlan-Container-Update">
                
            <div className="ManagerUpdateStudySetting-FloorPlan-img FloorPlan-Update">
                <img src="/assets/floor_plan.png" alt="Floor Plan"/>
            </div>
            <input
                id="file-upload"
                className="hidden"
                type='file'
                onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className="custom-file-upload">
                {selectedFileName || "이미지 등록"}
            </label>
            <div className="ManagerUpdateStudySetting-FloorPlan-Buttons">
                <button> 취소 </button>
                <button> 저장 </button>
            </div>
                </div>
            </div>


                    </div>
                </div>
            </div>
        
    )
}

export default ManagerUpdateStudySetting;
