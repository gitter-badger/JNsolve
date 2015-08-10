'use strict';
var growth = require('./fit/bestfit'),
 nsolve = require('./index'),
 findroot = require('./lib/findroot');

var test_array= [[0,1.1],[1,4.6],[2,1.9],[4,15]];
var test_query = [3.4, 4.8, 8, 11] ;
var test_y     = [8,8.5,15,20] ;
function g(x) {
  return  x*x-120;
}

var f = g ;
var initialpoint =  6 ;
var interval =  [-0,20] ;


console.log(
  'Solve the equation x⁵-16x⁴+2x³-20x²+6x-7-1.6 e^(-4x²) = 0 with initial point random selected  in an interval [-100,100] with a number maximum of steps of 1000 and 1000 partitions on the calculus of numerical derivative.'
);
console.log('=> regulafalsi =', nsolve.regulafalsi(f,interval));
//console.log('=> bisection =', nsolve.bisection(f,interval));

console.log('=> fixedpoint =', nsolve.fixedpoint(f,initialpoint));

//console.log('=> Newton_Raphson =', nsolve.Newton_Raphson(f,interval,initialpoint));

//console.log('=> Newton_Raphson_Higherorder =', nsolve.Newton_Raphson_Higherorder(f,interval));
console.log('=> fit =', growth(test_array,test_query,test_y));


//console.log('=> nsolveqn =', nsolve.nsolveqn(f,interval,initialpoint));


console.log('=> findroot =', findroot(f,interval,initialpoint));
