import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Layout from "../shared/Layout/Layout.jsx";
import styles from "./App.module.css";

import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { lsGetToken } from "../../utils/localStorageUtils";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/auth/operations.js";
import { setAuthorizationToken } from "../../api/api";

import { PrivateRoute } from "../../routes/PrivateRoute.jsx";
import { RestrictedRoute } from "../../routes/RestrictedRoute.jsx";
import Loader from "../shared/Loader/Loader.jsx";

const MainPage = lazy(() => import("../../pages/MainPage.jsx"));
const RecipeViewPage = lazy(() => import("../../pages/RecipeViewPage.jsx"));
const AddRecipePage = lazy(() => import("../../pages/AddRecipePage.jsx"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage.jsx"));
const AuthPage = lazy(() => import("../../pages/AuthPage.jsx"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = lsGetToken();
    if (token) {
      setAuthorizationToken(token);
      dispatch(fetchUser());
    }
  }, [dispatch]);

  return (
    <div className={styles.appWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/recipes/:recipeId" element={<RecipeViewPage />} />

              <Route
                path="/auth/:authType"
                element={<RestrictedRoute component={AuthPage} />}
              />
              <Route
                path="/auth/*"
                element={<RestrictedRoute component={AuthPage} />}
              />
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

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Layout>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
