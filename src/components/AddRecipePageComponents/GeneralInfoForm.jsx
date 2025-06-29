import React from "react";

const GeneralInfoForm = ({ title, setTitle, description, setDescription, time, setTime, calories, setCalories, category, setCategory }) => {
  return (
    <section>
      <h3>General Information</h3>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cooking time in minutes"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select category</option>
        <option value="Soup">Soup</option>
        <option value="Salad">Salad</option>
      </select>
    </section>
  );
};

export default GeneralInfoForm;
