import styles from "./StepsSections.module.css";
const StepsSections = ({ instructions }) => {
  return (
    <section className={styles.sectionsteps}>
      <h2>Preparation Steps:</h2>
      <div className={styles.steps}>
        {instructions
          .split(/\r?\n/)
          .filter((step) => step.trim())
          .map((step, i) => (
            <p key={i} className={styles.stepItem}>
              {step.trim()}
            </p>
          ))}
      </div>
    </section>
  );
};
export default StepsSections;
