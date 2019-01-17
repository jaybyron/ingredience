import React, { Component } from 'react';
import { render } from 'react-dom';
import Recipe from './Recipe.jsx';

class RecipesContainer extends Component {

  createRecipe(item){
    return <li><Recipe recipeData={item}> </Recipe> </li>  
    //<li key={item.key}> {item.text} <button onClick={() =>this.props.deleteIngredient(item.key)}>delete</button></li>
  }

  render(){
    
    let recipes = this.props.recipes;
    const recipeList = recipes.map(this.createRecipe,this);

    
    return <div id="mainbar">
    <h1>Recipes</h1>
    <ul>
    {recipeList}
    </ul>


    </div>

  }

}

export default RecipesContainer