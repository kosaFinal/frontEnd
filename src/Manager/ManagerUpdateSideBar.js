import { Link, useLocation } from 'react-router-dom';
import "./ManagerUpdateSideBar.css";

const ManagerUpdateSideBar = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname.startsWith(`/manager/update/${path}`) ? 'active' : '';
  };

  const getTextClassName = (path) => {
    return location.pathname.startsWith(`/manager/update/${path}`) ? 'yellow' : '';
  };

  return (
    <div className="ManagerSide-container">
      <div className="ManagerSide-container-items">
        
        <div className='updatecafebasic'>
          <Link to="updatebasic" className={getLinkClassName('updatebasic')}>
            <div className={`updateText ${getTextClassName('updatebasic')? 'yellow' : 'no-select'}`}><span>카페 기본 정보</span></div>
            <div className={`updatecafeitems ${getLinkClassName('updatebasic') ? '' : 'hidden'}`}>
              <p>카페명</p>
              <p>카페 유형</p>
              <p>카페 전화번호</p>
              <p>카페 주소</p>
              <p>카페 대표사진</p>
            </div>
          </Link>
        </div>
        
        <div className='updatecafebasic'>
          <Link to="updatedetail" className={getLinkClassName('updatedetail')}>
            <div className={`updateText ${getTextClassName('updatedetail')? 'yellow' : 'no-select'}`}><span>카페 세부 정보</span></div>
            <div className={`updatecafeitems ${getLinkClassName('updatedetail') ? '' : 'hidden'}`}>
              <p>운영시간</p>
              <p>카페특성</p>
            </div>
          </Link>
        </div>
        
        <div className='updatecafebasic'>
          <Link to="updatesetting" className={getLinkClassName('updatesetting')}>
            <div className={`updateText ${getTextClassName('updatesetting')? 'yellow' : 'no-select'}`}><span>카공 설정</span></div>
            <div className={`updatecafeitems ${getLinkClassName('updatesetting') ? '' : 'hidden'}`}>
              <p>카공 여부</p>
              <p>카공 평면도</p>
              <p>카공 좌석</p>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default ManagerUpdateSideBar;
