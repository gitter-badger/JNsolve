'use strict' ;
 var D =         require('./lib/derivativeN'),
  D_opt =         require('./lib/derivativeN'),
  methodN =    require('./lib/methodN'),
  Xintersection= require('./lib/Xintersection'),
  testRoot=      require('./lib/testRoot'),
  regulafalsi =  methodN.regulafalsi,
  randomsearch = require('./lib/randomsearch'),
  sortInterval = require('./lib/sortInterval'),
  fixedpoint =   require('./lib/fixedpoint'),
  bisection =    methodN.bisection,
  Newton_Raphson = methodN.Newton_Raphson,
  bestfit = require('./fit/bestfit'),
  Newton_Raphson_Higherorder = methodN.Newton_Raphson_Higherorder,
  findroot  = require('./lib/findroot') ;

module.exports.nsolveqn  =  function (g,interval,initialpoint,options) {
    if(!g){return ;}
    options = options || {npoints_DNumeric : 1000, presicion : 0.001 , nstepsmax : 1000 , method : 'Newton_Raphson' } ;
    options.presicion = options.presicion || 0.001 ;
    options.npoints_DNumeric = options.npoints_DNumeric || 1000 ;
    options.nstepsmax = options.nstepsmax || 1000 ;
    options.method = options.method || 'Newton_Raphson';
        var presicion = options.presicion ;
        var method = options.method ;
        return  methodN[method](g,interval,initialpoint,options);
};
module.exports.bestfit = bestfit ;

module.exports.Xintersection = Xintersection ;
module.exports.testRoot = testRoot ;
module.exports.regulafalsi= regulafalsi ;
module.exports.sortInterval= sortInterval ;
module.exports.fixedpoint = fixedpoint  ;
module.exports.bisection = bisection  ;
module.exports.Newton_Raphson = Newton_Raphson  ;
module.exports.Newton_Raphson_Higherorder = Newton_Raphson_Higherorder  ;
module.exports.D = D  ;
module.exports.D_opt=D_opt ;
module.exports.findroot = findroot  ;
module.exports.randomsearch = randomsearch  ;
