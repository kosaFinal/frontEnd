import { useState } from "react";
import "./TabContent.css";
import InProgressTabContent from "./InProgressTabContent";
import UpcomingTabContent from "./UpcomingTabContent";

const TabContent = () => {
    const [activeTab, setActiveTab] = useState('진행');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
      };

    return(
        <div>
            <div className="tab-buttons">
                <button className="inProgressButton" onClick={() => handleTabChange('진행')}>진행</button>
                <button className="upcomingButton" onClick={() => handleTabChange('예정')}>예정</button>
            </div>
            <div className="tab-content">
                {activeTab === '진행' ? <InProgressTabContent /> : <UpcomingTabContent />}
            </div>
        </div>
    );
}

export default TabContent;