'use strict';
var growth = require('../lib/bestfit'),
 nsolve = require('../index'),
 argv = require('yargs').argv,
 gulp = require('gulp'),
 prompt = require('prompt');
var test_array= [[0,3.2],[1,4.6],[2,5.1],[4,6.9]];
var test_query = [3.4, 4.8, 8, 11] ;
function g(x) {
  return Math.pow(x,5)-16*Math.pow(x,4)+2*Math.pow(x,3)-20*Math.pow(x,2)+6*x-7-1.6*Math.exp(-4*x*x);
}
var test = function () {
var f = g ,
initialpoint =  2 ,
interval =  [-10,10] ;


console.log(
'Solve the equation x⁵-16x⁴+2x³-20x²+6x-7-1.6 e^(-4x²) = 0 with initial point random selected  in an interval [-10,10] with a number maximum of steps of 1000 and 1000 partitions on the calculus of numerical derivative.'
);
console.log('=> regulafalsi =', nsolve.regulafalsi(f,interval));

console.log('=> bisection =', nsolve.bisection(f,interval));

console.log('=> fixedpoint =', nsolve.fixedpoint(f,initialpoint));

console.log('=> Newton_Raphson =', nsolve.Newton_Raphson(f,interval,initialpoint));

console.log('=> Newton_Raphson_Higherorder =', nsolve.Newton_Raphson_Higherorder(f,interval,initialpoint));
console.log('=> fit =', growth(test_array,test_query));
console.log('=> nsolveqn =', nsolve.nsolveqn(f,interval,initialpoint));
console.log('=> fit =', growth(test_array,test_query));



};


    gulp.task( 'test', function () {

    test() ;
    gulp.watch(['**/*.js', '!./node_modules/**'], ['test']);
  //  process.exit();

  });

module.exports = test;
