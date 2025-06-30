import styles from './AboutSection.module.css';
const AboutSection =  ({recipe})=> {
return (
<>
          <section className={styles.sectionabout}>
            <h2>About recipe</h2>
            <p className={styles.textabout}>{recipe.description}</p>
          </section>
</>
)}
export default AboutSection;