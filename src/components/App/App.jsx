import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Layout from "../shared/Layout/Layout.jsx";

import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../routes/PrivateRoute.jsx";
import { RestrictedRoute } from "../../routes/RestrictedRoute.jsx";
import Loader from "../shared/Loader/Loader.jsx";

const MainPage = lazy(() => import("../../pages/MainPage.jsx"));
const RecipeViewPage = lazy(() => import("../../pages/RecipeViewPage.jsx"));
const AddRecipePage = lazy(() => import("../../pages/AddRecipePage.jsx"));
const ProfilePage = lazy(() =>
  import("../../pages/ProfilePage/ProfilePage.jsx")
);
const AuthPage = lazy(() => import("../../pages/AuthPage.jsx"));

const App = () => {
  return (
    <>
      <Header />

      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/recipes/:recipeId" element={<RecipeViewPage />} />
            <Route
              path="/add-recipe"
              element={<PrivateRoute component={AddRecipePage} />}
            />
            <Route
              path="/profile/:recipeType"
              element={<PrivateRoute component={ProfilePage} />}
            />
            <Route
              path="/profile/*"
              element={<Navigate to="/profile/own" replace />}
            />
            <Route
              path="/auth"
              element={<RestrictedRoute component={AuthPage} />}
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
