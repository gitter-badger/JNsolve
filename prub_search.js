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
console.log('Newton_Raphson =', nsolve.Newton_Raphson(f,[-10,10],2));
console.log('=========================================');
console.log('Newton_Raphson_Higherorder =', nsolve.Newton_Raphson_Higherorder(f,[-10,10],2));
console.log('=========================================');
