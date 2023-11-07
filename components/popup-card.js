import React, { useState } from 'react';

const PopupComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Pop-up</button>
      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <button className="close-button" onClick={togglePopup}>×</button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
