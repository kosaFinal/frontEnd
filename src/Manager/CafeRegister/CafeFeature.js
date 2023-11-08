import { useState } from "react";
import "./CafeFeature.css";

const CafeFeature = () => {
  const [showFindChips, setShowFindChips] = useState(false);
  const [selectedChips, setSelectedChips] = useState(new Set());

  const ChipButton = ({ chip }) => {
    const isSelected = selectedChips.has(chip);
    const chipClass = `cafeFeature-Chips ${
      isSelected ? "select-Features" : ""
    }`;
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
        {["조용함", "음악 없음", "편한 좌석", "디저트", "감성적", "콘센트"].map(
          (chip) => (
            <ChipButton key={chip} chip={chip} />
          )
        )}
      </div>
    </div>
  );
};

export default CafeFeature;
