const request = require('request');
const rp = require('request-promise-native');
const KEYS = require('../../private')


const yummilyController = {};

yummilyController.queryYummily = queryYummily;

function queryYummily (req, res, next) {

  let options = {
    uri: 'http://api.yummly.com/v1/api/recipes',
    qs: {

      _app_id: KEYS.APPID,
      _app_key: KEYS.APIKEY,
      q: ['beef'],
      requirePictures: true,
      maxResult:5


    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }

  rp(options)
  .then(function(repos){
    console.log('this is the yummily response: ', repos);
    res.status(200).json(repos);
  })
  .catch(function (err){
    res.status(400).send('API call failed');
  })

}


module.exports = yummilyController;
