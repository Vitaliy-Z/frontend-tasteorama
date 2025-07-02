import React from "react";
import styles from "./PhotoUpload.module.css";
import Icon from "../../shared/Icon/Icon";
const PhotoUpload = ({ handlePhotoChange }) => {
  return (
    <div className={styles.rightSide}>
      <h3>Upload Photo</h3>
      <div className={styles.uploadArea}>
        <Icon name="photo" className={styles.cameraIcon} />
        <input
          type="file"
          onChange={handlePhotoChange}
          className={styles.fileInput}
        />
      </div>
    </div>
  );
};

export default PhotoUpload;
