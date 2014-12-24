'use strict';

var https = require('https')
  , services = require('./services')
  ;

function fixResult(inp){
  var data = inp.toString()
    , json
    ;
  data = data.replace('while(true);/* 0;', '');
  data = data.replace('/* */', '');
  json = JSON.parse(data);
  return json;
}

function getResults(gametype, callback){
  var service = services[gametype] || services.lotto
    ;

  https.get(service, function(res){

    res.on('data', function handleData(data){
      var result = fixResult(data)
        ;
      return callback(null, result);
    });

  }).on('error', function(e) {
    return callback(e, null);
  });
}

module.exports = getResults;