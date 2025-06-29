import { createRoot } from "react-dom/client";
// import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import App from "./components/App/App.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render
(
//   // <StrictMode>
//   //   <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  //   </Provider>
  // </StrictMode>
);
