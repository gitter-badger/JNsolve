'use strict';
var regression = require('regression'),
             _ = require('lodash'),
    fits_name, i ,j,fit={},x ,array_Cloned , length ,
    error = 0, best_fit='', best_fit_error, length_query,
    length_namefit ,array_answered= [], y ;

module.exports = function (x,nameF,equationFit) {
    var Fname =  {
        linear: function (x) {
          return  equationFit[0] * x + equationFit[1] ;
          } ,

         exponential:  function (x) {
            return equationFit[0] * Math.exp(equationFit[1]*x) ;
         },

         logarithmic: function (x) {
           return equationFit[0] + equationFit[1]*Math.log(x) ;
         },

        power : function (x) {
              return equationFit[0]* Math.pow(x , equationFit[1]) ;
            } ,
        polynomial: function (x) {
        return equationFit[0] + equationFit[1] * x + equationFit[2] * x * x
        }

    }
return Fname[nameF](x) ;
}
