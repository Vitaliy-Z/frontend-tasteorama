import styles from './StepsSections.module.css';
const StepsSections =  ({recipe})=> {
    return(
        <section className={styles.sectionsteps}>
            <h2>Preparation Steps:</h2>
            <ul className={styles.steps}>
              {recipe.instructions
                .split(/\r?\n/)
                .filter((step) => step.trim())
                .map((step, i) => (
                  <li key={i} className={styles.stepItem}>{step.trim()}</li>
                ))}
            </ul>
          </section>
)}
export default StepsSections; 