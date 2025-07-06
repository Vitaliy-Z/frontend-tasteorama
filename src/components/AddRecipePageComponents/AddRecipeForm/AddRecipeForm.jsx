import React from "react";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddRecipe } from "../../../redux/recipes/operations";
import { selectRecipesIsLoading } from "../../../redux/recipes/selectors";
import * as Yup from "yup";
import GeneralInfoForm from "../GeneralInfoForm/GeneralInfoForm.jsx";
import IngredientsForm from "../IngredientsForm/IngredientsForm.jsx";
import InstructionsForm from "../InstructionsForm/InstructionsForm.jsx";
import PhotoUpload from "../../AddRecipePageComponents/PhotoUpload/PhotoUpload.jsx";
import Loader from "../../shared/Loader/Loader.jsx";
import styles from "./AddRecipeForm.module.css";

const initialValues = {
  title: "",
  description: "",
  time: "",
  calories: "",
  category: "",
  ingredients: [],
  instructions: "",
  thumb: null,
};

const validationSchema = Yup.object().shape({
  title: Yup.string().trim().min(2).max(100).required("Title is required"),
  description: Yup.string().trim().min(5).required("Description is required"),
  time: Yup.number()
    .typeError("Must be a number")
    .positive("Must be positive")
    .required("Cooking time is required"),
  calories: Yup.number()
    .typeError("Must be a number")
    .min(0, "Cannot be negative")
    .nullable(),
  category: Yup.string().required("Category is required"),
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Ingredient name is required"),
        measure: Yup.string().required("Amount is required"),
      })
    )
    .min(1, "Add at least one ingredient"),
  instructions: Yup.string().trim().required("Instructions are required"),
  thumb: Yup.mixed().required("Photo is required"),
});

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectRecipesIsLoading);

  const handleSubmit = (values, { resetForm }) => {
    const formData = { ...values };
    dispatch(fetchAddRecipe(formData));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className={styles.formContainer} noValidate>
          <div className={styles.container}>
            <h1 className={styles.titleAddRecipe}>Add Recipe</h1>
            <div className={styles.flexContainer}>
              <div className={styles.rightSide}>
                <PhotoUpload
                  value={values.thumb}
                  onChange={(file) => setFieldValue("thumb", file)}
                />
                <ErrorMessage
                  name="thumb"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.leftContent}>
                <GeneralInfoForm
                  values={values}
                  setFieldValue={setFieldValue}
                />
                <IngredientsForm
                  values={values}
                  setFieldValue={setFieldValue}
                />
                <InstructionsForm
                  value={values.instructions}
                  onChange={(val) => setFieldValue("instructions", val)}
                />
                <ErrorMessage
                  name="instructions"
                  component="div"
                  className={styles.error}
                />

                {isLoading || isSubmitting ? (
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
        </Form>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
