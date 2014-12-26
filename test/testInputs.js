'use strict';

var assert = require('assert')
  , ntr = require('../index')
  ;

describe('norsk tipping results', function(){

  it('requires type to be defined', function(done){

    var opts = {
        type:false
      }
      ;

    ntr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: type/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});