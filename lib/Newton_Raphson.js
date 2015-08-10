'use strict' ;
var sortInterval = require('./sortInterval');
var D = require('./derivativeN'),
_ = require('lodash') ;

module.exports =  function (f,interval,point_initial,options) {
    options = options || { npoints_DNumeric : 1000, presicion : 0.001 , nstepsmax : 1000 } ;
      options.presicion = options.presicion || 0.001 ;
      options.npoints_DNumeric = options.npoints_DNumeric || 1000 ;
      options.nstepsmax = options.nstepsmax || 1000 ;
    interval = _.clone(interval,true) ;
    var presicion = options.presicion ;
    var x_n , x_n_1, y_n ,Root, a, b, n,
    npoints = options.npoints_DNumeric , df_dx ;
    sortInterval(interval) ;
    a = interval[0] ;
    b = interval[1] ;
    var DNof =  new D.Nof(f,npoints,[a,b]) ;
    df_dx = DNof.f_x ;
    point_initial = point_initial || a + Math.random()*(b - a);
    x_n_1 = point_initial  ;
    var nmax = options.nstepsmax ;
    n = 1 ;
    while (!Root && n < nmax) {
     n++ ;
     x_n = x_n_1 - f(x_n_1) / df_dx(x_n_1) ;
     if(!x_n || x_n < a || x_n > b){break ;}
     y_n = f(x_n);
     if (Math.abs(y_n) <= presicion){ Root = x_n ;}
     x_n_1 = x_n ;

     }
     return {Root : Root, numSteps : n , method : 'Newton_Raphson' } ;
};
