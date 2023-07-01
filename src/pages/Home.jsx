import React, { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { RecipeCard } from "../components/RecipeCard/RecipeCard";
import "../App.css";
import { Modal } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "black",
};

export const Home = () => {
    const { recipes, addRecipe } = useContext(RecipeContext);
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    const handleOpen = () => setOpenModal(true);

    const [name, setName] = useState("");
    const [cuisineType, setcuisineType] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [image, setImage] = useState("");
    const [filter, setFilter] = useState("Name");
    const [searchText, setSearchText] = useState("");
   
    let displayRecipes = recipes;


    function handleRecipe() {
        addRecipe(
            recipes?.length + 1,
            name,
            image,
            cuisineType,
            ingredients,
            instructions
        );
        setName("");
        setImage("");
        setIngredients("");
        setcuisineType("");
        setIngredients("");
        setInstructions("");    
        handleClose();
    }

    function handleSearch(event) {
        setSearchText(event.target.value.toLowerCase());
        if (event.target.value === "") {
            displayRecipes = [...recipes];
            return;
        }
    }
    displayRecipes = recipes?.filter((recipe) =>  {
         let searchIn;
         if (filter === "Name") searchIn = "name";
         if (filter === "Ingredients") searchIn = "ingredients";
         if (filter === "Cuisine") searchIn = "cuisineType";

         return recipe[searchIn].toLowerCase().includes(searchText);
        
    });
    //console.log(displayRecipes);
    //console.log("rerender");

    return (
        <div>
            <h1>Recipe Book</h1>

            <div className="header">
                <div className="filter-contents">
                    <input
                        type="text"
                        placeholder="search"
                        value={searchText}
                        onChange={handleSearch}
                    />
                    <label>Filters: </label>
                    <div>
                        <input
                            type="radio"
                            checked={filter === "Name"}
                            onChange={() => setFilter("Name")}
                        />
                        <label>Name</label>
                        <input
                            type="radio"
                            checked={filter === "Ingredients"}
                            onChange={() => setFilter("Ingredients")}
                        />
                        <label>Ingredients</label>
                        <input
                            type="radio"
                            checked={filter === "Cuisine"}
                            onChange={() => setFilter("Cuisine")}
                        />
                        <label>Cuisine</label>
                    </div>
                </div>
            </div>

            <div className="recipe-container">
                {
                    displayRecipes?.map((recipe) => (
                        <RecipeCard key={recipe.id} {...recipe} />
                    ))
                    
                }
                <button onClick={handleOpen}>Add Recipe</button>
                <Modal open={openModal} onClose={handleClose}>
                    <div style={style} className="modal-container">
                        <h1>New Recipe</h1>
                        <div className="recipe-entries">
                            <input
                                type="text"
                                placeholder="Recipe Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Cuisine Type"
                                value={cuisineType}
                                onChange={(e) => setcuisineType(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Enter Image Link"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <textarea
                                type="text"
                                placeholder="Ingredients"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                            ></textarea>
                            <textarea
                                type="text"
                                placeholder="Instructions"
                                value={instructions}
                                onChange={(e) =>
                                    setInstructions(e.target.value)
                                }
                            ></textarea>
                            <button onClick={handleRecipe}>Add Recipe</button>
                            <button onClick={handleClose}>Discard</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};
