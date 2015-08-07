'use strict' ;
var    D = require('./derivativenum');
var Xintersection=require('./lib/Xintersection');
var testRoot=require('./lib/testRoot');
var regulafalsi = require('./lib/regulafalsi');
var sortInterval = require('./lib/sortInterval');
var fixedpoint = require('./lib/fixedpoint');
var bisection = require('./lib/bisection');
var Newton_Raphson = require('./lib/Newton_Raphson');
var Newton_Raphson_Higherorder = require('./lib/Newton_Raphson_Higherorder');
var module.exports = {} ;

var nsolveqn =  function (g,interval,options) {
    var options = options || { npoints : 1000, presicion : 0.001, method : 'regulafalsi' } ;
        var presicion = options.presicion ;
        var method = options.method ;
        return  eval("this." +method)(g,interval,presicion);
};
module.exports.nsolveqn = nsolveqn ;
