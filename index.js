'use strict' ;
 var D = require('./lib/derivativenum'),
  Xintersection=require('./lib/Xintersection'),
 testRoot=require('./lib/testRoot'),
 regulafalsi = require('./lib/regulafalsi'),
  randomsearch = require('./lib/randomsearch'),
 sortInterval = require('./lib/sortInterval'),
 fixedpoint = require('./lib/fixedpoint'),
 bisection = require('./lib/bisection'),
 Newton_Raphson = require('./lib/Newton_Raphson'),
 Newton_Raphson_Higherorder = require('./lib/Newton_Raphson_Higherorder') ;
 module.exports = { } ;


var nsolveqn =  function (g,interval,options) {
    options = options || { npoints : 1000, presicion : 0.001, method : 'bisection' } ;
        var presicion = options.presicion ;
        var method = options.method ;
        return  eval(' this.' +method)(g,interval,presicion);
};
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
