'use strict';
var findroot = require('../lib/findroot'), length_get_x ,array_x=[],arrayX = [];

/**@function
 * This function solve the equation h(x)=y_i. The y_i are given into get_x.
 * @param {function} h, {Array} get_x, {Array} interval.
 * @return {Array} values of "x".
 */
module.exports = function (h, get_x, interval ) {
  var i, options =  {npoints_DNumeric : 1000, presicion : 0.001 , nstepsmax : 1000  };
  length_get_x = get_x.length ;
  for ( i = 0; i < length_get_x; i++) {
     array_x[i] = [];
// Find the root using the module findroot.
     arrayX[i]= findroot(function (x) {
                         return  h(x)-get_x[i] ;
                         },interval, options) ;
     if(arrayX[i]){array_x[i][0]=arrayX[i].Root;array_x[i][1]= get_x[i] ;}
  }
   return array_x;
} ;
