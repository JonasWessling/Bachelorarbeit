import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.css";
import "./styles/main.scss";
import App from "./App.jsx";
import { store } from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
