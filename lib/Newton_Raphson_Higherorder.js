'use strict' ;
var sortInterval = require('./sortInterval');
var d = require('./derivativenum'),
    _ = require('lodash') ;



module.exports   =  function (f,interval,initialpoint,options) {
    options = options || { npoints_DNumeric : 1000, presicion : 0.001 , nstepsmax : 1000 } ;
    interval = _.clone(interval,true) ;
    var presicion = options.presicion ;
    var x_n , x_n_1, y_n ,Root, a, n, b ;
    var npoints = options.npoints_DNumeric , df_dx,d2f_dx2;
    sortInterval(interval) ;
    a = interval[0] ;
    b = interval[1] ;
    initialpoint = initialpoint ||  a + Math.random()*(b - a);
    var D   = new d.Nof(f,npoints,[a,b]) ;
    df_dx = D.f_x ;
    var D2 = new d.Nof(df_dx,npoints,[a,b]) ;
    d2f_dx2 = D2.f_x ;
    x_n_1 = initialpoint ;
    var nmax = options.nstepsmax ; n = 1 ;
    while (!Root && n < nmax ) {
        x_n = x_n_1 - f(x_n_1) / df_dx(x_n_1)+ 0.5 * ( d2f_dx2(x_n_1) * f(x_n_1) * f(x_n_1) )/(df_dx(x_n_1)*df_dx(x_n_1)*df_dx(x_n_1)) ;
        y_n = f(x_n);
    if (Math.abs(y_n) <= presicion){ Root = x_n ;}
    x_n_1 = x_n ;
    n++ ;
    }
        return {Root : Root, numSteps : n , method : 'Newton_Raphson_Higherorder' } ;
};
