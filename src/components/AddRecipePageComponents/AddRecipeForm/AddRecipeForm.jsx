import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GeneralInfoForm from "../GeneralInfoForm/GeneralInfoForm.jsx";
import IngredientsForm from "../IngredientsForm/IngredientsForm.jsx";
import InstructionsForm from "../InstructionsForm/InstructionsForm.jsx";
import PhotoUpload from "../../AddRecipePageComponents/PhotoUpload/PhotoUpload.jsx";
import { fetchAddRecipe } from "../../../redux/recipes/operations";
import { selectRecipesIsLoadingAddRecipe } from "../../../redux/recipes/selectors";
import Loader from "../../shared/Loader/Loader.jsx";

import styles from "./AddRecipeForm.module.css";

const initialRecipeState = {
  title: "",
  description: "",
  time: "",
  calories: "",
  ingredients: [],
  instructions: "",
  thumb: null,
  category: null
};

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState(initialRecipeState);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectRecipesIsLoadingAddRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAddRecipe(recipe));
    setRecipe(initialRecipeState);
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <h1 className={styles.titleAddRecipe}>Add Recipe</h1>
          <div className={styles.flexContainer}>
            <div className={styles.rightSide}>
              <PhotoUpload
                onChange={(value) =>
                  setRecipe((prev) => ({ ...prev, thumb: value }))
                }
              />
            </div>
            <div className={styles.leftContent}>
              <GeneralInfoForm recipe={recipe} setRecipe={setRecipe} />
              <IngredientsForm
                ingredients={recipe.ingredients}
                onAddIngredient={(value) =>
                  setRecipe((prev) => ({
                    ...prev,
                    ingredients: [...prev.ingredients, value]
                  }))
                }
                onRemoveIngredient={(index) =>
                  setRecipe((prev) => ({
                    ...prev,
                    ingredients: prev.ingredients.filter((_, i) => i !== index)
                  }))
                }
              />
              <InstructionsForm
                instructions={recipe.instructions}
                onUpdateInstructions={(value) =>
                  setRecipe((prev) => ({ ...prev, instructions: value }))
                }
              />
              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isLoading}
                >
                  Publish Recipe
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddRecipeForm;
