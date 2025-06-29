import React from "react";

const PhotoUpload = ({ handlePhotoChange }) => {
  return (
    <section>
      <h3>Upload Photo</h3>
      <input type="file" onChange={handlePhotoChange} />
    </section>
  );
};

export default PhotoUpload;
