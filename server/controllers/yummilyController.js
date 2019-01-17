const request = require('request');
const rp = require('request-promise-native');

const yummilyController = {};

yummilyController.queryYummily = queryYummily;

function queryYummily (req, res, next) {

  console.log('we hit the yummily query')
  console.log('query paramaters: ',typeof req.query.query);

  let options = {
    uri: 'http://api.yummly.com/v1/api/recipes',
    qs: {

      _app_id: process.env.YUM_ID,
      _app_key: process.env.YUM_KEY,
      q: req.query.query,
      requirePictures: true,
      maxResult:30


    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }

  rp(options)
  .then(function(repos){
    //console.log('this is the yummily response: ', repos);
    res.status(200).json(repos.matches);
  })
  .catch(function (err){
    res.status(400).send(err);
  })

}


module.exports = yummilyController;
