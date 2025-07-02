import styles from './InstructionsForm.module.css'
const InstructionsForm = ({ instructions, setInstructions }) => {
  return (
    <div className={styles.instrContainer}>
      <h3>Instructions</h3>
      <textarea
        placeholder="Enter instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
    </div>
  );
};

export default InstructionsForm;
