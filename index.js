'use strict' ;
 var D =         require('./lib/derivativenum'),
  Xintersection= require('./lib/Xintersection'),
  testRoot=      require('./lib/testRoot'),
  regulafalsi =  require('./lib/regulafalsi'),
  randomsearch = require('./lib/randomsearch'),
  sortInterval = require('./lib/sortInterval'),
  fixedpoint =   require('./lib/fixedpoint'),
  bisection =    require('./lib/bisection'),
  Newton_Raphson = require('./lib/Newton_Raphson'),
  bestfit = require('./fit/bestfit'),
  Newton_Raphson_Higherorder = require('./lib/Newton_Raphson_Higherorder') ;


var nsolveqn =  function (g,interval,initialpoint,options) {
    options = options || {npoints_DNumeric : 1000, presicion : 0.001 , nstepsmax : 1000 , method : 'Newton_Rapshon' } ;
    options.presicion = options.presicion || 0.001 ;
    options.npoints_DNumeric = options.npoints_DNumeric || 1000 ;
    options.nstepsmax = options.nstepsmax || 1000 ;
    options.method = options.method || 'Newton_Rapshon_Higherorder'
        var presicion = options.presicion ;
        var method = options.method ;
        return  eval(method)(g,interval,initialpoint,presicion);
};
module.exports.bestfit = bestfit ;
module.exports.nsolveqn = nsolveqn ;
module.exports.Xintersection = Xintersection ;
module.exports.testRoot = testRoot ;
module.exports.regulafalsi= regulafalsi ;
module.exports.sortInterval= sortInterval ;
module.exports.fixedpoint = fixedpoint  ;
module.exports.bisection = bisection  ;
module.exports.Newton_Raphson = Newton_Raphson  ;
module.exports.Newton_Raphson_Higherorder = Newton_Raphson_Higherorder  ;
module.exports.D = D  ;
module.exports.randomsearch = randomsearch  ;
