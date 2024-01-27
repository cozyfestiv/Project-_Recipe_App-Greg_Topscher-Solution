import React, { useState } from 'react';

function RecipeCreate ({ setRecipes, createRecipe }) {
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [photo, setPhoto] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');

  const nameChangeHandler = event => setName(event.target.value);
  const cuisineChangeHandler = event => setCuisine(event.target.value);
  const photoChangeHandler = event => setPhoto(event.target.value);
  const ingredientsChangeHandler = event => setIngredients(event.target.value);
  const preparationChangeHandler = event => setPreparation(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    setName('');
    setCuisine('');
    setPhoto('');
    setIngredients('');
    setPreparation('');
    createRecipe({ name, cuisine, photo, ingredients, preparation });
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name='create' onSubmit={handleSubmit}>
      <table className='create-recipe'>
        <tbody>
          <tr>
            <td>
              <input
                id='name'
                type='text'
                name='name'
                placeholder='Name'
                onChange={nameChangeHandler}
                value={name}
              />
            </td>
            <td>
              <input
                id='cuisine'
                type='text'
                name='cuisine'
                placeholder='Cuisine'
                onChange={cuisineChangeHandler}
                value={cuisine}
              />
            </td>
            <td>
              <input
                id='photo'
                name='photo'
                type='url'
                placeholder='URL'
                required={true}
                onChange={photoChangeHandler}
                value={photo}
              />
            </td>
            <td>
              <textarea
                id='ingredients'
                name='ingredients'
                placeholder='Ingredients'
                required={true}
                rows={2}
                onChange={ingredientsChangeHandler}
                value={ingredients}
              />
            </td>
            <td>
              <textarea
                id='preparation'
                name='preparation'
                placeholder='Preparation'
                required={true}
                rows={2}
                onChange={preparationChangeHandler}
                value={preparation}
              />
            </td>
            <td>
              <button type='submit'>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
