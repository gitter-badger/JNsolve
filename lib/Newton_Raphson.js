'use strict' ;
var sortInterval = require('./sortInterval');
var D = require('./derivativenum');
module.exports = {} ;
module.exports =  function (f,interval,point_initial,options) {
    options = options || { npoints : 1000, presicion : 0.001  } ;
    var presicion = options.presicion ;
    var x_n , x_n_1, y_n ,Root, a, b, n,
    npoints = options.npoints , df_dx ;
    sortInterval(interval) ;
    a = interval[0] ;
    b = interval[1] ;
    var DNof =  new D.Nof(f,npoints,[a,b]) ;
    df_dx = DNof.f ;
    point_initial = point_initial || (b + a) / 2;
    x_n_1 = point_initial  ;
    var nmax = options.npoints ;
    n = 1 ;
    while (!Root && n < nmax) {
     n++ ;
     x_n = x_n_1 - f(x_n_1) / df_dx(x_n_1) ;
     y_n = f(x_n);
     console.log('x_n=',x_n ,'y_n=',y_n);
     if (Math.abs(y_n) <= presicion){ Root = x_n ;}
     x_n_1 = x_n ;
    }
        return {Root : Root, n : n , method : 'Newton_Raphson' } ;
};
