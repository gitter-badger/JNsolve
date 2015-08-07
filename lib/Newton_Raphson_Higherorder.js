'use strict' ;
var sortInterval = require('./sortInterval');
var D = require('./derivativenum');



module.exports   =  function (f,interval,initialpoint,options) {
    options = options || { npoints : 5, presicion : 0.001  } ;
    var presicion = options.presicion ;
    var x_n , x_n_1, y_n ,Root, a, n, b ;
    var npoints = options.npoints , df_dx,d2f_dx2;
    sortInterval(interval) ;
    a = interval[0] ;
    b = interval[1] ;
    initialpoint = initialpoint || (b-a)/2 ;
    df_dx   = new D.Nof(f,npoints,[a,b]).f ;
    d2f_dx2 = new D.Nof(df_dx,npoints,[a,b]).f ;
    x_n_1 = initialpoint ;
    var nmax = npoints ; n = 1 ;
    while (!Root && n < nmax ) {
        x_n = x_n_1 - f(x_n_1) / df_dx(x_n_1)+ 0.5 * ( d2f_dx2(x_n_1) * f(x_n_1) * f(x_n_1) )/(df_dx(x_n_1)*df_dx(x_n_1)*df_dx(x_n_1)) ;
        y_n = f(x_n);
    if (Math.abs(y_n) <= presicion){ Root = x_n ;}
    x_n_1 = x_n ;
    n++ ;
    }
        return {Root : Root, n : n , method : 'Newton_Raphson_Higherorder =' } ;
};
