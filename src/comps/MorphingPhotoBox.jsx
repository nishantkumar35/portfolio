// MorphingPhotoBox.jsx
import React from "react";
import "./MorphingPhotoBox.css"; // import custom CSS

const MorphingPhotoBox = ({ photoUrl }) => {
  return (
    <div className="profile-photo-container">
      <img
        src={photoUrl}
        alt="Your Photo"
        className="profile-photo-img"
      />
    </div>
  );
};

export default MorphingPhotoBox;
