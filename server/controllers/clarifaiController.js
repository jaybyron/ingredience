const request = require('request');
const rp = require('request-promise-native');
const Clarifai = require('clarifai');




const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_KEY
 });
 

 const clarifaiController = {};

 clarifaiController.predictImage = predictImage;

 function predictImage(req, res, next) {

  console.log('we are in clarifai');
  console.log('clarifai query string',req.query.query)


    app.models.predict("bd367be194cf45149e75f01d59f77ba7", req.query.query).then(
      function(response) {
        console.log('this is the clarifai response: ', response);
        res.status(200).json(response);
      },
      function(err) {
        res.status(400).send('API call failed');
      }
    );

  }



 module.exports = clarifaiController;
