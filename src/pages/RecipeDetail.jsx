import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

export const RecipeDetail = () => {
    const { id } = useParams();
    const { recipes } = useContext(RecipeContext);
    const recipe = recipes.find((recipe) => recipe.id == id);
    console.log(recipe);
    return (
        <div className="detail-container">
            <h1>{recipe.name}</h1>
            <h2>{recipe.cuisineType}</h2>
            <img src={recipe.image} />
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
};
