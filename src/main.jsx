import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render
(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
