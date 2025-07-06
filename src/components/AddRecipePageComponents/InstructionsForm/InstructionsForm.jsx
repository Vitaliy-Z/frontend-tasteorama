import styles from "./InstructionsForm.module.css";
const InstructionsForm = ({ instructions, onUpdateInstructions }) => {
  return (
    <div className={styles.instrContainer}>
      <h3>Instructions</h3>
      <textarea
        className={styles.instrtext}
        placeholder="Enter instructions"
        value={instructions}
        onChange={(e) => onUpdateInstructions(e.target.value)}
      />
    </div>
  );
};

export default InstructionsForm;
