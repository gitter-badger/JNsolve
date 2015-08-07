'use strict';
var growth = require('./bestfit') ;
var nsolve = require('./index') ;
var pru= [[0,3.2],[1,4.6],[2,5.1],[4,6.9]];
//console.log( growth(pru,[5,6,7]) );
function f(x) {
  return  Math.cos(x)-x;
}
console.log('regulafalsi =', nsolve.regulafalsi(f,[0,1]));
console.log('=========================================');
console.log('bisection =', nsolve.bisection(f,[0,1]));
console.log('=========================================');
console.log('fixedpoint =', nsolve.fixedpoint(f,0.5));
console.log('=========================================');
console.log('Newton_Raphson =', nsolve.Newton_Raphson(f,[-10,10]));
console.log('=========================================');
console.log('randomsearch=', nsolve.randomsearch(11,[1,4,5,5.5,7,8,9,12,]));
console.log('=========================================');
