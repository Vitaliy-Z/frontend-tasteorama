import React, { useState } from "react";
import Icon from "../../shared/Icon/Icon.jsx";
import styles from "./AddRecipeForm.module.css";
import GeneralInfoForm from "../GeneralInfoForm/GeneralInfoForm.jsx";
import IngredientsForm from "../IngredientsForm/IngredientsForm.jsx";
import InstructionsForm from "../InstructionsForm.jsx";
import PhotoUpload from "../../AddRecipePageComponents/PhotoUpload/PhotoUpload.jsx";
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
  const [category, setCategory] = useState("Soup");
  const ingredientOptions = ["Broccoli", "Carrot", "Tomato"];

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
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h1 className={styles.titleAddRecipe}>Add Recipe</h1>
        <PhotoUpload handlePhotoChange={handlePhotoChange} />
        <div className={styles.mainSection}>
          <GeneralInfoForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            time={time}
            setTime={setTime}
            calories={calories}
            setCalories={setCalories}
            category={category}
            setCategory={setCategory}
            categoryOptions={["Soup", "Main", "Salad", "Dessert"]}
          />

          {/* <div className={styles.rightSide}>
            <h3>Upload Photo</h3>
            <div className={styles.uploadArea}>
              <span className={styles.cameraIcon}>📷</span>
              <input
                type="file"
                onChange={handlePhotoChange}
                className={styles.fileInput}
              />
            </div>
          </div> */}
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

        <InstructionsForm
          instructions={instructions}
          setInstructions={setInstructions}
        />

        <button type="submit" className={styles.submitBtn}>
          Publish Recipe
        </button>
      </form>
    </>
  );
};

export default AddRecipeForm;
