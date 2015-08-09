'use strict' ;
var search = require('./randomsearch'),
    deltax = require('./deltax'),
    sortInterval = require('./sortInterval'),
    derivativenumeric = require('./derivativenumeric'),
    linear_interpolation = require('./linearinterpolation'),
    derivativenumericOpt = require('./derivativenumericOpt'),
    _ = require('lodash') ;

module.exports.deltax  = deltax
module.exports.derivativenumeric  = derivativenumeric ;
module.exports.linearinterapolation  = linear_interpolation ;


var Nof =  function (f,npoints,interval) {
  interval = _.clone(interval,true) ;
    var array_of_derivative = derivativenumeric(f,npoints,interval);
    this.f_x = new  linear_interpolation(array_of_derivative.dfdx_array).function_interpolated ;
};
module.exports.Nof  = Nof;


module.exports.derivativenumericOpt  = derivativenumericOpt ;
