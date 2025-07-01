import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Layout from "../shared/Layout/Layout.jsx";

import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../routes/PrivateRoute.jsx";
import { RestrictedRoute } from "../../routes/RestrictedRoute.jsx";

const MainPage = lazy(() => import("../../pages/MainPage.jsx"));
const RecipeViewPage = lazy(() => import("../../pages/RecipeViewPage.jsx"));
const AddRecipePage = lazy(() => import("../../pages/AddRecipePage.jsx"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage.jsx"));
const AuthPage = lazy(() => import("../../pages/AuthPage.jsx"));

const App = () => {
  return (
    <>
      <Header />

      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/recipes/:recipeId" element={RecipeViewPage} />

            <Route
              path="/add-recipe"
              element={<PrivateRoute component={AddRecipePage} />}
            />
            <Route
              path="/profile"
              element={<PrivateRoute component={ProfilePage} />}
            />
            <Route
              path="/auth"
              element={<RestrictedRoute component={AuthPage} />}
              // element={<AuthPage />}
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>

      <Footer />
    </>
  );
};

export default App;
