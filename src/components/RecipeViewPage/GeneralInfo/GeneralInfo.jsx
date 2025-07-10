import styles from "./GeneralInfo.module.css";
const GeneralInfo = ({ category, time, calories }) => {
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
      <p>
        <span className="recipeinfovalue">Caloric content: </span>
        Approximately {calories || "-"} kcal per serving
      </p>
    </div>
  );
};
export default GeneralInfo;
