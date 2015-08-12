'use strict';
var  f = require('./fitFunction'),
    betterfit = require('./betterfit'),
     getx = require('./getx'),j,fit={},
     length_query ,array_y= [] ,array_x=[],interval;

/** @function
 * This function calculate the best fit to a Array given and make
 * a calculus of second argument with get_y and first argument with
 * get_x.
 * @param {Array} arrayFit, {Array} get_y,  {Array} get_x
 * @return {Object} fit
 */
module.exports = function(arrayFit, get_y, get_x ) {
   var  a = arrayFit[0][0] ,b =arrayFit[arrayFit.length-1][0] ;
   get_y = get_y || [] ;
   length_query = get_y.length ;
   get_x = get_x || [] ;
   // Find the best fit.
   fit = betterfit(arrayFit) ;
   // Calculate the values of "y" using get_y.
   for (j = 0; j < length_query; j++){
   array_y[j]  = [] ;
   array_y[j][1] = f(get_y[j],
                            fit.best.name,
                            fit[fit.best.name].regression.equation
                           ) ;
   array_y[j][0] = get_y[j];
   }
   // Choices the best  interval to solve the equation fit(x)=get_x.
   if( fit.best.name  !== 'logarithmic'){
     interval = [a,b+6*(b-a)];
   } else {
     interval = [0.000001,b+5*(b-a)];
   }
  // Obtain the values "x" using get_x.
   array_x = getx(fit.best.f,get_x, interval) ;
   return {ans_ofY : array_y,
         ans_ofX : array_x,
         fitUsed  : fit.best.name ,
         fitEquationUsed : fit[fit.best.name].regression.string,
         fitParamsUsed   : fit[fit.best.name].regression.equation,
         fitPointsUsed   : fit[fit.best.name].regression.points,
         fitWithError    : fit.best.error,
         fit             : fit
         };
} ;
