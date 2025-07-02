const InstructionsForm = ({ instructions, setInstructions }) => {
  return (
    <section>
      <h3>Instructions</h3>
      <textarea
        placeholder="Enter instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
    </section>
  );
};

export default InstructionsForm;
