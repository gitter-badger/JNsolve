'use strict';
var regression = require('regression'),
 _ = require('lodash'),
 fits_name, i ,j,fit={},x ,array_Cloned , length ,
 error = 0, best_fit='', best_fit_error, length_query,
 length_namefit ,array_answered= [], y ;


fits_name = ['linear','exponential','logarithmic','power','polynomial'];


function f(x,nameF,equationFit) {
    var  Fitted_fn =  {
        linear:

        function (x) {
        return equationFit[0] * x + equationFit[1] ;
      },
       exponential:
       function (x) {
         return equationFit[0] * Math.exp(equationFit[1]*x) ;
       },
       logarithmic:
       function (x) {
         return equationFit[0] + equationFit[1]*Math.log(x) ;
       },
       law:
       function (x) {
          return equationFit[0]* Math.pow(x , equationFit[1]) ;
       },
      polynomial:
      function (x) {
      return equationFit[0] + equationFit[1] * x + equationFit[2] * x * x ;
      }
    }
    return Fitted_fn[nameF](x) ;
}

 function bestfit(array_tofit) {
  length_namefit = fits_name.length ;
  array_Cloned   = _.clone(array_tofit,true) ;
  length         = array_tofit.length -1 ;
  best_fit       = fits_name[0];
  best_fit_error = 0 ;
  for ( i = 0 ; i < length_namefit ; i++){
    fit[fits_name[i]] = {regression : regression(fits_name[i],array_Cloned)}  ;
    error = 0 ;

    for ( j = 0 ; j < length ; j++){
        x     = array_tofit[j][0] ;
        error = error +
        ( array_tofit[j][1]  - f(x,fits_name[i],fit[fits_name[i]].regression.equation)  )*
        ( array_tofit[j][1]  - f(x,fits_name[i],fit[fits_name[i]].regression.equation)  );
    }
    error = Math.sqrt(error/length) ;
    fit[fits_name[i]].error = error ;
    if(best_fit_error === 0){ best_fit_error = error ;}
    if(error < best_fit_error){ best_fit = fits_name[i]; best_fit_error = error; }
  }
fit.best = { name :best_fit, error: best_fit_error} ;
return fit ;
}


module.exports = function (arrayFit, array_toQuery) {
 array_toQuery = array_toQuery || [] ;
 arrayFit      = arrayFit || [];
 length_query = array_toQuery.length ;
 fit = bestfit(arrayFit) ;
   for (j = 0; j < length_query; j++){
   array_answered[j]  = [] ;
   array_answered[j][1] = f(array_toQuery[j],
                            fit.best.name,
                            fit[fit.best.name].regression.equation
                           ) ;
   array_answered[j][0] = array_toQuery[j];
 }
 return {
         ansArray        : array_answered,
         fitUsed         : fit.best.name ,
         fitEquationUsed : fit[fit.best.name].regression.string,
         fitParamsUsed   : fit[fit.best.name].regression.equation,
         fitPointsUsed   : fit[fit.best.name].regression.points,
         fitWithError    : fit.best.error,
         };
} ;
