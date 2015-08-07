'use strict' ;
module.exports = {} ;


var Newton_Raphson_Higherorder  =  function (f,interval,presicion, options) {
    var options = options || { npoints : 1000, presicion : 0.001  } ;
    presicion = options.presicion ;
    var x_n , x_n_1, y_n Root, a, b,
    npoints = options.npoints , dfdx;
    sortInterval(interval) ;
    a = interval[0] ;
    b = interval[1] ;
    df_dx   = D.derivativeNof(f,npoints,[a,b]).f ;
    d2f_dx2 = D.derivativeNof(df_dx,npoints,[a,b]).f ;
    x_n_1 = initialpoint ;
    while (!Root) {
        x_n = x_n_1 - f(x_n_1) / df_dx(x_n_1)
        + 0.5 * ( d2f_dx2(x_n_1) * f(x_n_1) * f(x_n_1) )/(df_dx(x_n_1)*df_dx(x_n_1)*df_dx(x_n_1)) ;
        y_n = f(x_n);
    if (Math.abs(y_n) <= presicion){ Root = x_n ;}
    }
        return {Root : Root, n : n , method : 'Newton_Raphson' } ;
};

module.exports.Newton_Raphson_Higherorder = Newton_Raphson_Higherorder ;