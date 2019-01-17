import React, { Component } from 'react';

class IngredientList extends Component {
 
  createItem(item){
    return  <li key={item.key}> {item.text} <button onClick={() =>this.props.deleteIngredient(item.key)}>delete</button></li>
  }

  render(){
    let ingredients = this.props.ingredients;

    const ingredientList = ingredients.map(this.createItem,this);

    return (
      <ul className="ingredientList">
        {ingredientList}
      </ul>
    )

  }
}

export default IngredientList;