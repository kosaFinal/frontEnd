import { useState } from "react";
import "./StatusTab.css";
import InProgressTabContent from "./InProgressTabContent";
import UpcomingTabContent from "./UpcomingTabContent";

const StatusTab = () => {
    const [activeTab, setActiveTab] = useState('진행');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
      };

    return(
        <div className="status-tab-container">
          <div className="reservation-status-top">
            <p className="reservation-status-title">예약현황</p>
            <hr className="status-tab-hr"/>
          </div>
          <div className="tab-buttons">
            <button className={`inProgressButton ${activeTab === '진행' ? 'active' : ''}`} 
                onClick={() => handleTabChange('진행')}>진행</button>
            <button className={`upcomingButton ${activeTab === '예정' ? 'active' : ''}`}
                onClick={() => handleTabChange('예정')}>예정</button>
          </div>
          <div className="tab-content">
            {activeTab === '진행' ? <InProgressTabContent /> : <UpcomingTabContent />}
          </div>
        </div>
    );
}

export default StatusTab;