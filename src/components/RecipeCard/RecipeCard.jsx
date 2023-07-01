import { Link } from "react-router-dom";
import "./RecipeCard.css";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";

export const RecipeCard = ({id, image, ingredients, name, instruciton, cuisineType}) => {
    const { deleteRecipe } = useContext(RecipeContext);
    
    const handleDelete = () => {
        deleteRecipe(id);
    }
    
    return (
    <div className="card-container">
        <div className="card-header">
            <img src={image}/>
            <button onClick={handleDelete}>Delete</button>
            <button>Edit</button>
        </div>
        <div className="card-body">
            <h2>{name}</h2>
            <p><strong>Cuisine Type: </strong> {cuisineType}</p>
            <p><strong>Ingredients: </strong> <Link to={`/recipe/${id}`}>See Recipe</Link></p>
            <p><strong>Instructions: </strong> <Link to={`/recipe/${id}`}>See Recipe</Link></p>
        </div>  
    </div>
  )
}
