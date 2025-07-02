import styles from "./AboutSection.module.css";
const AboutSection = ({ description }) => {
  return (
    <div className={styles.sectionabout}>
      <h2>About recipe</h2>
      <p className={styles.textabout}>{description}</p>
    </div>
  );
};
export default AboutSection;
