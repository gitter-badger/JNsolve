'use strict' ;
 var D =         require('./lib/derivativeN'),
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
var methodN = {
  Newton_Raphson_Higherorder  : Newton_Raphson_Higherorder ,

  Newton_Raphson :
  Newton_Raphson ,

  fixedpoint :
  fixedpoint,

  regulafalsi :
  regulafalsi,

    bisection :
    bisection
}
module.exports.nsolveqn  =  function (g,interval,initialpoint,options) {
    options = options || {npoints_DNumeric : 1000, presicion : 0.001 , nstepsmax : 1000 , method : 'Newton_Raphson' } ;
    options.presicion = options.presicion || 0.001 ;
    options.npoints_DNumeric = options.npoints_DNumeric || 1000 ;
    options.nstepsmax = options.nstepsmax || 1000 ;
    options.method = options.method || 'Newton_Raphson'
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
module.exports.randomsearch = randomsearch  ;
