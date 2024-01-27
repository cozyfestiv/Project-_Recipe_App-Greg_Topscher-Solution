import React, { useState } from 'react';
import './App.css';
import RecipeCreate from './RecipeCreate';
import RecipeList from './RecipeList';
import RecipeData from './RecipeData';
import lasso from './assets/lasso.png';

function App () {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = newRecipe =>
    setRecipes(currentRecipes => [...currentRecipes, newRecipe]);

  const deleteRecipe = indexToDelete => {
    const recipeCopy = [...recipes];
    recipeCopy.splice(indexToDelete, 1);
    setRecipes(recipeCopy);
  };

  return (
    <div className='App'>
      <header className='header'>
        <img src={lasso} alt='cartoon lasso' className='header-img'></img>
        <h1 className='header-title'>Recipe Roundup</h1>
        <img src={lasso} alt='cartoon lasso' className='header-img'></img>
      </header>
      <RecipeList deleteHandler={deleteRecipe} recipes={recipes} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
