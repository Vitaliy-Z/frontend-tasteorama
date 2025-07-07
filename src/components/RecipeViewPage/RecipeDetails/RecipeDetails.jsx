// import { lazy, Suspense } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../../redux/auth/selectors.js";

// // Ліниве завантаження компонентів
// const GeneralInfo = lazy(() => import("../GeneralInfo/GeneralInfo.jsx"));
// const AboutSection = lazy(() => import("../AboutSection/AboutSection.jsx"));
// const IngredientsRecipeViewPage = lazy(() =>
//   import("../IngredientsRecipeViewPage/IngredientsRecipeViewPage.jsx")
// );
// const StepsSections = lazy(() => import("../StepsSections/StepsSections.jsx"));
// const Icon = lazy(() => import("../../shared/Icon/Icon.jsx"));

// import styles from "./RecipeDetails.module.css";

// const RecipeDetails = ({ recipe }) => {
//   const navigate = useNavigate();
//   const isLoggedIn = useSelector(selectUser);

//   const handleFavoriteClick = () => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
//     // Логіка для додавання/видалення з обраного можна додати тут
//   };

//   if (!recipe) {
//     return <p>Loading...</p>; // Покажемо повідомлення або індикатор завантаження, поки recipe не завантажено
//   }

//   return (
//     <Suspense fallback={<div>Loading components...</div>}>
//       <img
//         src={recipe.thumb || recipe.imageUrl}
//         alt={recipe.title}
//         className={styles.recipeImage}
//         loading="lazy"
//       />
//       <h1 className={styles.title}>{recipe.title}</h1>

//       <div className={styles.recipeLayout}>
//         <div className={styles.generalInfobutton}>
//           <GeneralInfo category={recipe.category} time={recipe.time} />
//           <button className={styles.saveButton} onClick={handleFavoriteClick}>
//             Save
//             <Icon name="bookmarkicon" classname={styles.icon} />
//           </button>
//         </div>

//         <div className={styles.leftContent}>
//           <AboutSection description={recipe.description} />
//           <IngredientsRecipeViewPage ingredients={recipe.ingredients} />
//           <StepsSections instructions={recipe.instructions} />
//         </div>
//       </div>
//     </Suspense>
//   );
// };

// export default RecipeDetails;
