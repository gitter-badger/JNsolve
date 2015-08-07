'use strict';
var growth = require('../lib/bestfit'),
 nsolve = require('../index'),
 argv = require('yargs').argv,
 gulp = require('gulp'),
 prompt = require('prompt');
var test_array= [[0,3.2],[1,4.6],[2,5.1],[4,6.9]];
var test_query = [3.4, 4.8, 8, 11] ;
function g(x) {
  return  Math.cos(x)-x;
}
var test = function () {
var f = g ;
var array_to_fit =  test_array ;
var initialpoint =  0.5 ;
var interval =  [-10,10] ;
var array_to_Query =  test_query  ;

console.log(
  'Solve the equation cos(x) + x = 0 with initial point equal to 0.5 in an interval [-10,10] with a number maximum of steps of 1000 and 1000 partitions on the calculus of numerical derivative.'
);
console.log('=> regulafalsi =', nsolve.regulafalsi(f,interval));

console.log('=> bisection =', nsolve.bisection(f,interval));

console.log('=> fixedpoint =', nsolve.fixedpoint(f,initialpoint));

console.log('=> Newton_Raphson =', nsolve.Newton_Raphson(f,interval,initialpoint));

console.log('=> Newton_Raphson_Higherorder =', nsolve.Newton_Raphson_Higherorder(f,interval,initialpoint));
};

    gulp.task( 'test', function () {

    test() ;
  //  process.exit();

  });

module.exports = test;
