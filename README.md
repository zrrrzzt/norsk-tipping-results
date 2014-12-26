#norsk-tipping-results

Get the results from Norsk Tippings lottery games 

##Installation
Via npm
```
$ npm install norsk-tipping-results
```

Via GitHub

```
$ git clone git@github.com:zrrrzzt/norsk-tipping-results.git
```

##Usage

Pass in an options object.

**type** The Id for the game you want results from. Valid options: lotto, keno, extra, vikinglotto, joker or eurojackpot

```
'use strict';

var ntr = require('norsk-tipping-results')
  , opts = {
      type:'lotto'
  }
  `;

ntr(opts, function(err, data){
  if(err){
    console.error(err);
  } else {
    console.log(data);
  }
});
```