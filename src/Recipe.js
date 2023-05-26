import React from 'react';

function Recipe ({ recipe, deleteHandler }) {
  return (
    <>
      <tr className='recipe'>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img className='photo' alt={recipe.name} src={recipe.photo} />
        </td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td>
          <button name='delete' onClick={deleteHandler}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Recipe;
