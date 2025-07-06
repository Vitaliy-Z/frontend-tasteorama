import React from "react";
import styles from "./PhotoUpload.module.css";
import Icon from "../../shared/Icon/Icon";

const PhotoUpload = ({ value, onChange }) => {
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <>
      <h3 className={styles.titledAdd}>Upload Photo</h3>
      <div className={styles.uploadArea}>
        <Icon name="photo" classname={styles.cameraIcon} />
        <input
          type="file"
          onChange={handlePhotoChange}
          className={styles.fileInput}
        />
      </div>
      {value && (
        <div className={styles.previewText}>
          Selected file: {value.name}
        </div>
      )}
    </>
  );
};

export default PhotoUpload;
