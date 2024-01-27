import React from 'react';
import Recipe from './Recipe';

function RecipeList ({ recipes, deleteHandler }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  //  console.log(typeof recipes)
  return (
    <div className='recipe-list'>
      <table>
        <thead>
          <tr>
            <th className='recipe-heading'>Name</th>
            <th className='recipe-heading'>Cuisine</th>
            <th className='recipe-heading'>Photo</th>
            <th className='recipe-heading'>Ingredients</th>
            <th className='recipe-heading'>Preparation</th>
            <th className='recipe-heading'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <Recipe
              deleteHandler={() => deleteHandler(index)}
              key={index}
              recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

// you have to use an index whenever you're mapping things
