import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Layout from "../Layout/Layout";

import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("../../pages/MainPage"));
const RecipeViewPage = lazy(() => import("../../pages/RecipeViewPage"));
const AddRecipePage = lazy(() => import("../AddRecipePageComponents/AddRecipeForm.jsx"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage"));
const AuthPage = lazy(() => import("../../pages/AuthPage"));

const App = () => {
  return (
    <>
      <Header />

      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/recipes/:recipeId" element={<RecipeViewPage />} />
            <Route path="/add-recipe" element={<AddRecipePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>

      <Footer />
    </>
  );
};

export default App;
