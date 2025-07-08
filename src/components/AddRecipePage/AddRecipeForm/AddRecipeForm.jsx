import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAddRecipe } from "../../../redux/recipes/operations";
import { selectRecipesIsLoadingAddRecipe } from "../../../redux/recipes/selectors";

import GeneralInfoForm from "../GeneralInfoForm/GeneralInfoForm.jsx";
import IngredientsForm from "../IngredientsForm/IngredientsForm.jsx";
import InstructionsForm from "../InstructionsForm/InstructionsForm.jsx";
import PhotoUpload from "../PhotoUpload/PhotoUpload.jsx";
import Loader from "../../shared/Loader/Loader.jsx";

import styles from "./AddRecipeForm.module.css";

const initialRecipeState = {
  name: "",
  decr: "",
  cookiesTime: "",
  cals: "",
  category: null,
  ingredient: [],
  instruction: "",
  recipeImg: null
};

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState(initialRecipeState);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectRecipesIsLoadingAddRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", recipe.name);
    formData.append("decr", recipe.decr);
    formData.append("cookiesTime", recipe.cookiesTime);
    formData.append("cals", recipe.cals);
    formData.append("category", recipe.category);
    formData.append("ingredient", JSON.stringify(recipe.ingredient));
    formData.append("instruction", recipe.instruction);
    formData.append("recipeImg", recipe.recipeImg);

    dispatch(fetchAddRecipe(formData));
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
                  setRecipe((prev) => ({ ...prev, recipeImg: value }))
                }
              />
            </div>
            <div className={styles.leftContent}>
              <GeneralInfoForm recipe={recipe} setRecipe={setRecipe} />
              <IngredientsForm
                ingredients={recipe.ingredient}
                onAddIngredient={(value) =>
                  setRecipe((prev) => ({
                    ...prev,
                    ingredient: [...prev.ingredient, value]
                  }))
                }
                onRemoveIngredient={(index) =>
                  setRecipe((prev) => ({
                    ...prev,
                    ingredient: prev.ingredient.filter((_, i) => i !== index)
                  }))
                }
              />
              <InstructionsForm
                instructions={recipe.instruction}
                onUpdateInstructions={(value) =>
                  setRecipe((prev) => ({ ...prev, instruction: value }))
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
