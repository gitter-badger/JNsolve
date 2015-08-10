'use strict';
var  f = require('./fitFunction'),
    betterfit = require('./betterfit'),
     getx = require('./getx'),j,fit={},
     length_query ,array_y= [] ,array_x=[],interval;


module.exports = function (arrayFit, get_y, get_x ) {
   var  a = arrayFit[0][0] ,b =arrayFit[arrayFit.length-1][0] ;
   get_y = get_y || [] ;
   length_query = get_y.length ;
   get_x = get_x || [] ;
   fit = betterfit(arrayFit) ;
   for (j = 0; j < length_query; j++){
   array_y[j]  = [] ;
   array_y[j][1] = f(get_y[j],
                            fit.best.name,
                            fit[fit.best.name].regression.equation
                           ) ;
   array_y[j][0] = get_y[j];
   }
   if( fit.best.name  !== 'logarithmic'){
     interval = [a,b+5*(b-a)];
   } else {
     interval = [0.000001,b+5*(b-a)];
   }
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
