import React from 'react';
import './RecipeModal.css';

const RecipeModal = ({ recipe, onClose, isOpen }) => {
    
    // Only render the component if isOpen is true
    if (!isOpen) return null;

    // Use placeholder text for the actual recipe content
    const fullRecipeContent = `
        ## Ingredients for ${recipe.name}:
        * 2 slices of artisan bread
        * 1 ripe avocado
        * Salt, pepper, chili flakes to taste
        * Optional: a drizzle of olive oil
        
        ## Instructions:
        1. Toast the bread until golden brown.
        2. Mash the avocado with a fork.
        3. Spread the mashed avocado evenly on the toast.
        4. Sprinkle with your chosen seasonings.
        5. Savor every bite!
    `;

    return (
        // The modal-overlay covers the whole screen darkly
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
                <h2>{recipe.name}</h2>
                <p className="modal-prep-time">Ready in 10 minutes</p>
                <div className="modal-recipe-body">
                    {/* Render the recipe content */}
                    <pre>{fullRecipeContent}</pre>
                </div>
            </div>
        </div>
    );
};

export default RecipeModal;