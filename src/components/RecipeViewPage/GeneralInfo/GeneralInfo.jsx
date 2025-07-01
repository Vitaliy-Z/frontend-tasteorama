import styles from "./GeneralInfo.module.css";
const GeneralInfo = ({ category, time }) => {
  return (
    <div className={styles.generalInfo}>
      <h3 className={styles.recipeinform}>General informations</h3>
      <p>
        <span className="recipeinfovalue">Category: </span>
        {category}
      </p>
      <p>
        <span className="recipeinfovalue">Cooking time: </span> {time} minutes
      </p>
    </div>
  );
};
export default GeneralInfo;
