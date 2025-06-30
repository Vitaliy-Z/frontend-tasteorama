import styles from "./GeneralInfo.module.css";
const GeneralInfo =  ({recipe})=> {
    const categoryTitle = recipe.category;
return (
         <div className={styles.generalInfo}>
            <h3 className={styles.recipeinform}>General informations</h3>
            <p><span className="recipeinfovalue">
              Category: </span>{categoryTitle}
            </p>
            <p><span className="recipeinfovalue">
              Cooking time: </span> {recipe.time} minutes
            </p>
          </div>
)}
export default GeneralInfo;