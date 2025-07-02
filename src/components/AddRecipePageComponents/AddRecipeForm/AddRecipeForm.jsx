import React, { useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./AddRecipeForm.module.css";
import GeneralInfoForm from "../GeneralInfoForm/GeneralInfoForm.jsx";
import IngredientsForm from "../IngredientsForm/IngredientsForm.jsx";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [calories, setCalories] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [photo, setPhoto] = useState(null);

  const addIngredient = () => {
    if (ingredientName && ingredientAmount) {
      setIngredientsList([
        ...ingredientsList,
        { name: ingredientName, amount: ingredientAmount },
      ]);
      setIngredientName("");
      setIngredientAmount("");
    }
  };

  const removeIngredient = (index) => {
    setIngredientsList(ingredientsList.filter((_, i) => i !== index));
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      description,
      time,
      calories,
      ingredientsList,
      instructions,
      photo,
    });
  };

  return (
    <>
      {/* <header className={styles.header}>
        <div className={styles.logo}>
          <Icon name="recipe" classname={styles.icon} />
          <span className={styles.logoText}>Tasteorama</span>
        </div>
        <nav className={styles.nav}>
          <a href="/">Recipes</a>
          <a href="/profile">My Profile</a>
          <button className={styles.addBtn}>Add Recipe</button>
          <div className={styles.userIcon}>M</div>
          <div className={styles.syncIcon}>⟳</div>
        </nav>
      </header> */}

      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h1>Add Recipe</h1>

        <div className={styles.mainSection}>
          <GeneralInfoForm title={title}
  setTitle={setTitle}
  description={description}
  setDescription={setDescription}
  time={time}
  setTime={setTime}
  calories={calories}
  setCalories={setCalories}
  category={category}
  setCategory={setCategory}
  categoryOptions={["Soup", "Main", "Salad", "Dessert"]}/>

          <div className={styles.rightSide}>
            <h3>Upload Photo</h3>
            <div className={styles.uploadArea}>
              <span className={styles.cameraIcon}>📷</span>
              <input
                type="file"
                onChange={handlePhotoChange}
                className={styles.fileInput}
              />
            </div>
          </div>
        </div>
        <IngredientsForm
          ingredient={ingredientName}
          setIngredient={setIngredientName}
          amount={ingredientAmount}
          setAmount={setIngredientAmount}
          ingredientsList={ingredientsList}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
          ingredientOptions={ingredientOptions}
        />

        {/* <div className={styles.ingredients}>
          <h3>Ingredients</h3>
          <div className={styles.row}>
            <label>
              Name
              <input
                type="text"
                placeholder="Broccoli"
                value={ingredientName}
                onChange={(e) => setIngredientName(e.target.value)}
              />
            </label>
            <label>
              Amount
              <input
                type="text"
                placeholder="100g"
                value={ingredientAmount}
                onChange={(e) => setIngredientAmount(e.target.value)}
              />
            </label>
          </div>
          <button
            type="button"
            onClick={addIngredient}
            className={styles.fullWidthBtn}
          >
            Add new ingredient
          </button>

          <div className={styles.tableHeader}>
            <span>Name:</span>
            <span>Amount:</span>
          </div>

          <ul>
            {ingredientsList.map((ing, index) => (
              <li key={index}>
                <span>{ing.name}</span>
                <span>{ing.amount}</span>
                <button type="button" onClick={() => removeIngredient(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div> */}

        <div className={styles.instructions}>
          <h3>Instructions</h3>
          <textarea
            placeholder="Enter instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Publish Recipe
        </button>
      </form>

      {/* <footer className={styles.footer}>
        <div className={styles.logo}>
          <Icon name="recipe" classname={styles.icon} />
          <span className={styles.logoText}>Tasteorama</span>
        </div>
        <span>© 2025 CookingCompanion. All rights reserved.</span>
        <nav>
          <a href="/">Recipes</a>
          <a href="/account">Account</a>
        </nav>
      </footer> */}
    </>
  );
};

export default AddRecipeForm;
