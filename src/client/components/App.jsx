import React, { Component } from 'react';
import { render } from 'react-dom';
import IngredientsContainer from './IngredientsContainer.jsx';
import RecipesContainer from './RecipesContainer.jsx';
const uuidv1 = require('uuid/v1');
class App extends Component {


  constructor(){
    super();

    this.state = {
      ingredients :[],
      ingredientStringObj : {},
      ingredientString: '',
      filters : [],
      recipes : [],
      currentIngredient: {text:'', key:''},
    }


    this.submitImage = this.submitImage.bind(this);


    this.addIngredient = (item) => {
      console.log(item);
      if(item !== "") {
        var newItem = {
          text: item,
          key: uuidv1()
        }
      }
      const updatedIngredients = this.state.ingredients;
      updatedIngredients.push(newItem);

      const updateIngredientStringObj = JSON.parse(JSON.stringify(this.state.ingredientStringObj));
      updateIngredientStringObj[item] = 1;

      this.setState({ingredients: updatedIngredients, ingredientStringObj: updateIngredientStringObj}, function(){
        console.log(this.state);   
        console.log('this is the query string', Object.keys(this.state.ingredientStringObj))  
      });

    }

    this.deleteIngredient = (item) => {
      console.log(item);

      const updatedIngredients = this.state.ingredients.filter(curr => curr.key !== item);
      this.setState({ingredients: updatedIngredients}, function(){
        const updateIngredientStringObj = JSON.parse(JSON.stringify(this.state.ingredientStringObj));
      })
    }

 
    this.addManyIngredients = (ingredients) => {

      console.log('inside addMany');

    }

    this.submitIngredients = () => {
      let ingredients = this.state.ingredients.map((x) => x.text);
      const queryString = ingredients.join('%20');


      console.log('analyzing');
      const request = 'http://localhost:3000/analyze/?query='+queryString;
      console.log(request);

      const that = this;
      fetch(request)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log('here is our recipes', data)
        that.setState({recipes: data});
        return(data);
      })
      .then(function (){
        console.log(that.state);
      })
      .catch(function(error){
         console.log(error)
      })
    }



  }

  submitImage (image)  {
    console.log('we are submitting an image, ',image);
    const request='http://localhost:3000/test/?query='+image;
    const that = this;

    fetch(request)
    .then((response) =>{
      //console.log(that.state);
      return response.json();
    })
    .then((data) =>{
      console.log(data.outputs[0].data.concepts)
      let prediction = data.outputs[0].data.concepts;

      let filtered = prediction.filter((curr) => {if(curr.value>.75)return true; else return false;})
      
      const updatedIngredients = this.state.ingredients;

      for(let i=0; i<filtered.length; i++){
        const newItem = {
          text: filtered[i].name,
          key: uuidv1()
        }
        updatedIngredients.push(newItem);
      }

      this.setState({ingredients: updatedIngredients}, function(){
        console.log(this.state);
      });
    })
  }


  render() {
     return   <div>
      <h1 align="center"> Ingredience</h1>
      <h4 align="center">A smart recipe recommender</h4>
      <div id='main-app'>
          <IngredientsContainer submitImage={this.submitImage} submitIngredients={this.submitIngredients} ingredients={this.state.ingredients} deleteIngredient ={this.deleteIngredient} addIngredient ={this.addIngredient}></IngredientsContainer>
          <RecipesContainer recipes={this.state.recipes}></RecipesContainer>
      </div>
    </div>
  }
}

export default App;