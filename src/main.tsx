import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import "./index.css";
import "./fonts/CarlaSansRegular.ttf";
import "./fonts/HelveticaBold.ttf";
import "./fonts/Hertine.ttf";
import "./fonts/PistilliRoman.otf";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
