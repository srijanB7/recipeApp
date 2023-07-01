import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { RecipeProvider } from "./context/RecipeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <RecipeProvider>
                <App />
            </RecipeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
