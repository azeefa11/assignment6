import React, { useState } from 'react'; // <-- THIS IS THE FIX!
import './Recipes.css';
import RecipeModal from './RecipeModal';
const RECIPES_DATA = [
    { id: 1, name: "Avocado Toast", desc: "Ready in 10 minutes", image: "https://i.pinimg.com/1200x/fc/75/50/fc7550e8c566ccc62068c16c3831ead0.jpg" },
    { id: 2, name: "Pasta Primavera", desc: "Ready in 10 minutes", image: "https://i.pinimg.com/1200x/43/12/85/431285173311b98fceaf20c2ab42fdaa.jpg" },
    { id: 3, name: "Berry Smoothie", desc: "Short recipes", image: "https://i.pinimg.com/736x/e4/80/f5/e480f5ca8bbf40dd38f688536bb0d025.jpg" },
    { id: 4, name: "Veggie Bowl", desc: "Ready in 1 take", image: "https://i.pinimg.com/1200x/d1/b1/a7/d1b1a7618876989e90a585b88e182646.jpg" },
    { id: 5, name: "Pancake Stack", desc: "Mince cookies", image: "https://i.pinimg.com/1200x/7e/91/41/7e91414ab63979c2ef6d20898c3fcb92.jpg" },
    { id: 6, name: "Tiramisu", desc: "Beta recipe", image: "https://i.pinimg.com/1200x/4c/ee/b5/4ceeb5a337c59564103c44a849fb73f1.jpg" },
];
const RecipeCard = ({ recipe, onSelectRecipe }) => (
    <div className="recipe-card">
        <div className="recipe-card-image">
            <img src={recipe.image} alt={recipe.name} />
        </div>
        <div className="recipe-card-info">
            <h3>{recipe.name}</h3>
            <p>{recipe.desc}</p>
            <button 
                className="btn-primary btn-small"
                onClick={() => onSelectRecipe(recipe)}
            >
                View Recipe
            </button>
        </div>
    </div>
);

const Recipes = () => {
  // Line 33 is likely here, requiring useState
  const [selectedRecipe, setSelectedRecipe] = useState(null); 

  // Function to open the modal
  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    document.body.classList.add('modal-open'); 
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedRecipe(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <section id="recipes" className="container">
      <h2 className="section-heading">Recipes</h2>
      <div className="recipes-grid">
        {RECIPES_DATA.map(recipe => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onSelectRecipe={handleSelectRecipe} 
          />
        ))}
      </div>
      
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={!!selectedRecipe} 
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Recipes;