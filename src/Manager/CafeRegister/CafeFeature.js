import { useEffect, useState } from "react";
import "./CafeFeature.css";

const CafeFeature = ({ onFeaturesChange }) => {
  const [selectedChips, setSelectedChips] = useState(new Set());

  const featureMapping = {
    "조용함": "quiet",
    "음악 없음": "noMusic",
    "편한 좌석": "comfortableSeats",
    "디저트": "hasDesserts",
    "감성적": "sentimental",
    "콘센트": "hasPowerOutlets"
  };

  const ChipButton = ({ chip }) => {
    const isSelected = selectedChips.has(chip);
    const chipClass = `cafeFeature-Chips ${isSelected ? "select-Features" : ""}`;
    return (
      <button className={chipClass} onClick={() => handleSelectChip(chip)}>
        {chip}
      </button>
    );
  };

  const handleSelectChip = (chip) => {
    setSelectedChips((prevSelectedChips) => {
      const newSelectedChips = new Set(prevSelectedChips);
      if (newSelectedChips.has(chip)) {
        newSelectedChips.delete(chip);
      } else {
        newSelectedChips.add(chip);
      }
      return newSelectedChips;
    });
  };

  useEffect(() => {
    const features = Object.keys(featureMapping).reduce((acc, feature) => {
      acc[featureMapping[feature]] = selectedChips.has(feature);
      return acc;
    }, {});
    onFeaturesChange(features);
  }, [selectedChips, onFeaturesChange]);

  return (
    <div className="cafe-register-box">
      <div className="cafe-register-title">
        <p>
          카페 특성을 <br />
          선택해주세요
        </p>
        <hr />
      </div>

      <div className="cafeFeature-Chips">
      {Object.keys(featureMapping).map((chip) => (
          <ChipButton key={chip} chip={chip} />
        ))}
      </div>
    </div>
  );
};

export default CafeFeature;
