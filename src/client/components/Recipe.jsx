import React, { Component } from 'react';
import { render } from 'react-dom';


class Recipe extends Component {

  
  render(){

    return (
      <div className={'recipe'}>
        <img src={this.props.recipeData.smallImageUrls[0]}></img>
        <a href={'https://yummly.com/recipe/'+this.props.recipeData.id}>
          <h3>{this.props.recipeData.recipeName}</h3>
        </a>
        <p> Ingredients: {this.props.recipeData.ingredients.join()}</p>
        <p>Cooking Time: {this.props.recipeData.totalTimeInSeconds/60} minutes</p>
        <p>Rating: {this.props.recipeData.rating}/5</p>

      </div>
    )

  }

}

export default Recipe;