import React, { useState } from "react";
import styles from "./PhotoUpload.module.css";
import Icon from "../../shared/Icon/Icon";

const PhotoUpload = ({ onChange }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("image")) {
      setImagePreview(URL.createObjectURL(file));
      onChange(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  return (
    <>
      <h3 className={styles.titledAdd}>Upload Photo</h3>
      <div className={styles.uploadArea}>
        {!imagePreview ? (
          <Icon name="photo" classname={styles.cameraIcon} />
        ) : (
          <img
            src={imagePreview}
            alt="Preview"
            className={styles.previewImage}
          />
        )}
        <input
          type="file"
          onChange={handlePhotoChange}
          className={styles.fileInput}
          accept="image/*"
        />
      </div>
    </>
  );
};

export default PhotoUpload;
