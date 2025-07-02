import styles from "./GeneralInfoForm.module.css";
const GeneralInfoForm = ({
  title,
  setTitle,
  description,
  setDescription,
  time,
  setTime,
  calories,
  setCalories,
  category,
  setCategory,
}) => {
  return (
    <section className="{styles.section}">
      <h3>General Information</h3>
      <label>
        Recipe Title
        <input
          type="text"
          placeholder="Enter the name of your recipe"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Recipe Description
        <textarea
          placeholder="Enter a brief description of your recipe"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Cooking time in minutes
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <div className={styles.row}>
        <label>
          Calories
          <input
            type="text"
            placeholder="150 cals"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label>

        <label>
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
};

export default GeneralInfoForm;
