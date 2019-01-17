import React, { Component } from 'react';
import { render } from 'react-dom';

import IngredientList from './IngredientList.jsx';


class IngredientsContainer extends Component {

  render() {


    return (
         <div id="sidebar">
        
            <h1>My Ingredients</h1>
            <form onSubmit={(e) => {this.props.submitImage(this._inputImage.value); this._inputImage.value =''; e.preventDefault();}}> 
              <input type="url" ref={(b) => this._inputImage = b}>
              </input>
            <button> Add Ingredient Picture </button>
            </form>


            <form onSubmit={(e) => {this.props.addIngredient(this._inputElement.value); this._inputElement.value =''; e.preventDefault();}}> 
              <input ref={(a) => this._inputElement = a}>
              </input>
            <button> Add Ingredient Manually </button>
            </form>

            <button onClick = {this.props.submitIngredients}>Analyze Ingredients</button>

            <IngredientList ingredients={this.props.ingredients} deleteIngredient={this.props.deleteIngredient}></IngredientList>

        </div>
    )

  }


}

export default IngredientsContainer;
