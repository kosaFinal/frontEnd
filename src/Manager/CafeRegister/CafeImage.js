import "./CafeImage.css";

const CafeImage = () => {

  return (
    <div className="cafe-register-box">
      <div className="cafe-register-title">
        <p>카페 사진을 등록하세요</p>
        <hr />
      </div>
      <div className="cafe-register-content">
        <div className="image-input">
          <div>
            <p>대표사진 등록</p>
            <button>이미지 불러오기</button>
          </div>
          <div>
            <p>상세사진 등록</p>
            <button>이미지 불러오기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeImage;
