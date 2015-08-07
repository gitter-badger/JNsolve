'use strict';
var growth = require('./bestfit') ;
var nsolve = require('./nsolveqn') ;
var regression = require('regression');
var pru= [[0,3.2],[1,4.6],[2,5.1],[4,6.9]];
//console.log( growth(pru,[5,6,7]) );
function f(x) {
  return  Math.cos(x)-x
}
console.log('regulafalsi =',nsolve.regulafalsi(f,[0.0001, 100],0.0001));


console.log('bisection =',nsolve.nsolveqn(f,[0.0000001, 100],0.0000001));

console.log('fixedpoint =',nsolve.fixedpoint(f, 0.75 ,0.1));
