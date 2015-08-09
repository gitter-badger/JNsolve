'use strict';
var growth = require('./fit/bestfit'),
 nsolve = require('./index'),
 argv = require('yargs').argv,
 gulp = require('gulp'),
 prompt = require('prompt');
var test_array= [[0,3.2],[1,4.6],[2,5.1],[4,6.9]];
var test_query = [3.4, 4.8, 8, 11] ;
function g(x) {
  return 7+Math.pow(x,3);
}

var f = g ;
var array_to_fit =  test_array ;
var initialpoint =  1 ;
var interval =  [-100,100] ;
var array_to_Query =  test_query  ;

console.log(
  'Solve the equation cos(x) + x = 0 with initial point random selected  in an interval [-100,100] with a number maximum of steps of 1000 and 1000 partitions on the calculus of numerical derivative.'
);
//console.log('=> regulafalsi =', nsolve.regulafalsi(f,interval));

//console.log('=> bisection =', nsolve.bisection(f,interval));

//console.log('=> fixedpoint =', nsolve.fixedpoint(f,initialpoint));

console.log('=> Newton_Raphson =', nsolve.Newton_Raphson(f,interval,initialpoint));

//console.log('=> Newton_Raphson_Higherorder =', nsolve.Newton_Raphson_Higherorder(f,interval));
//console.log('=> fit =', growth(test_array,test_query));


console.log('=> nsolveqn =', nsolve.nsolveqn(f,interval,initialpoint));
