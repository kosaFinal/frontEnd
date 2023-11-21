import { useState } from "react";
import "./CafeImage.css";

const CafeImage = () => {
  const [selectedTitleFile, setSelectedTitleFile] = useState(null);
  const [titleFileType, setTitleFileType] = useState('');
  const [selectedDetailFile, setSelectedDetailFile] = useState(null);
  const [detailFileType, setDetailFileType] = useState('');

  const handleTitleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedTitleFile(file);
      setTitleFileType(file.type); // 파일의 MIME 타입을 저장합니다.
    }
  };

  const handleDetailFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedDetailFile(file);
      setDetailFileType(file.type); // 파일의 MIME 타입을 저장합니다.
    }
  };

  return (
    <div className="cafe-register-box">
      <div className="cafe-register-title">
        <p>카페 사진을 <br />등록해주세요</p>
        <hr />
      </div>
      <div className="cafe-register-content">
        <div className="image-input">
          <div>
            <p>대표사진 등록</p>
            <input 
            className="study-img-file"
              type="file"
              onChange={handleTitleFileChange}
              style={{ display: 'none' }}
              id="title-file-input"
            />
            <label htmlFor="title-file-input" className="study-img-file">
              {selectedTitleFile ? selectedTitleFile.name : "이미지 불러오기"}
            </label>
          </div>
          <div>
            <p>상세사진 등록</p>
            <input 
            className="study-img-file"
              type="file"
              onChange={handleDetailFileChange}
              style={{ display: 'none' }}
              id="detail-file-input"
            />
            <label htmlFor="detail-file-input" className="study-img-file">
              {selectedDetailFile ? selectedDetailFile.name : "이미지 불러오기"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeImage;
