// Popup.js
import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const checkTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Check if it's 9:15 AM
    if (hours === 12 && minutes === 59) {
      // Check if the document is visible
      if (!document.hidden) {
        setShowPopup(true);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkTime();
    }, 60000); // Every minute

    return () => clearInterval(interval);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkTime(); // Check time again when tab becomes visible
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []); // Empty dependency array ensures it runs only on mount and unmount

  if (!showPopup) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Market is Open!</h2>
        <button onClick={handleClosePopup}>OK</button>
      </div>
    </div>
  );
};

export default Popup;
