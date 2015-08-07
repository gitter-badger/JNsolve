'use strict' ;
var sortInterval = require('./lib/sortInterval');
var D = require('./lib/derivativenum');
module.exports = {} ;


var Newton_Raphson =  function (f,interval,point_initial,options) {
    options = options || { npoints : 1000, presicion : 0.001  } ;
    var presicion = options.presicion ;
    var x_n , x_n_1, y_n ,Root, a, b, n,
    npoints = options.npoints , df_dx ;
    sortInterval(interval) ;
    a = interval[0] ;
    b = interval[1] ;
    df_dx = D.derivativeNof(f,npoints,[a,b]).f ;
    x_n_1 = point_initial  ;
    while (!Root) {
     x_n = x_n_1 - f(x_n_1) / df_dx(x_n_1) ;
     y_n = f(x_n);
    if (Math.abs(y_n) <= presicion){ Root = x_n ;}
    }
        return {Root : Root, n : n , method : 'Newton_Raphson' } ;
};

module.exports.Newton_Raphson = Newton_Raphson ;
