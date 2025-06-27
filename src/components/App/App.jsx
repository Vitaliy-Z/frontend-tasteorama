import styles from "./App.module.css";
import { Navigate, Routes, Route } from "react-router-dom";
import RecipeViewPage from "../../pages/RecipeViewPage";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route
          path="/"
          element={<Navigate to="" />}
        /> */}
        <Route path="/recipes/:id" element={<RecipeViewPage />} />
      </Routes>
    </div>
  );
};

export default App;
