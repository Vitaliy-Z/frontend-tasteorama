import styles from "./GeneralInfo.module.css";
import categoriesData from "../../api/mockData/categories.json";
const GeneralInfo =  ({recipe})=> {
    const categoryTitle =
    categoriesData.find((c) => c._id === recipe.category)?.name ||
    recipe.category;
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