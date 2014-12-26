#norsk-tipping-results [![Build Status](https://travis-ci.org/zrrrzzt/norks-tipping-results.svg?branch=master)](https://travis-ci.org/zrrrzzt/norsk-tipping-results)

Get the results from [Norsk Tippings](https://www.norsk-tipping.no/) lotteries.
Thes includes Lotto, Keno, Extra, VikingLotto, Joker and EuroJackpot.

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

##Disclaimer
This is not an official API from Norsk Tipping, it might break.