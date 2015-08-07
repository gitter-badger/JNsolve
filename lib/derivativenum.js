'use strict'
var search = require('./lib/randomsearch');
module.exports = {} ;
var deltax =  function (npoints,interval,pointsDistribution) {
        var a, b, N, n, x_n_array = [], alpha ; beta ;
        pointsDistribution = pointsDistribution || 'linear' ;
        sortInterval(interval) ;
        N= npoints ; a = interval[0] ;  b = interval[1];
        switch (pointsDistribution) {
            case 'linear':
                 alpha = ( b - a ) / (N - 1 ) ;
                 beta = a - alpha;
                 for (n=1 ; n <  N ; n++) {
                 x_n_array[n] = alpha * n + beta  ;
                 } ;
                 break;
            case 'exponential':
                 beta  = Math.log(b / a)/ (N - 1 ) ;
                 alpha = Math.exp( Math.log(a) - beta ) ;
                 for (n=1 ; n <  N ; n++) {
                 x_n_array[n] = alpha * Math.exp(beta * n ) ;
                 } ;
                 break;
            case 'logarithmic':
                 beta  = (b - a)/ Math.log(N) ;
                 alpha = a   ;
                 for (n = 1 ; n <  N ; n++) {
                 x_n_array[n] = alpha +  beta * Math.log(n) ;
                 } ;
                 break;
            case 'law':
                 beta  = Math.log(b/a) / Math.log(N) ;
                 alpha = a   ;
                 for (n=1 ; n <  N ; n++) {
                 x_n_array[n] = alpha * Math.pow( n, beta ) ;
                 } ;
            case 'cuadratic':
                 alpha = (b - a + 1 - N * N ) / (N - 1 )   ;
                 beta  = a -1 - alpha ;
                 for (n=1 ; n <  N ; n++) {
                 x_n_array[n] = n * n + alpha * n + beta ;
                 } ;
                 break;
            case 'inverse':
                 alpha = ( 1 / b - 1 / a ) / (N - 1 ) ;
                 beta = a - alpha ;
                 for (n=1 ; n <  N ; n++) {
                 x_n_array[n] = alpha * n + beta  ;
                 } ;
                 break;
            default:
                 alpha = ( b - a ) / (N - 1 ) ;
                 beta = a - alpha;
                 for (n=1 ; n <  N ; n++) {
                 x_n_array[n] = alpha * n + beta  ;
            } ;
                break;
        }

    return { x_n_array              : dfdx ,
             pointsdistribution : deltaInterpolacion           } ;

};
module.exports.deltax = deltax;

var derivativenumeric =  function (f,npoints,interval, deltaInterpolacion) {
    var  x_n ,xpoints , h, a ,b , N, y_a, y_b, y_n, n , dfdx = [];
    var deltaInterpolacion = deltaInterpolacion || 'linear' ;
    sortInterval(interval) ;
    xpoints = deltax(npoints,interval, deltaInterpolacion).x_n_array ;
    N     = npoints
    a     = interval[0] ;
    b     = interval[1] ;
    y_a   = f(a) ;
    y_b   = f(b) ;
    x_n_1 = a ;
    y_n_1 = y_a ;
    n     = N-1 ;
    for ( var i = 0; i < n; i++ ) {
      x_n = xpoints[i+1] ;
      y_n = f(x_n) ;
      h   = x_n - x_n_1;
      df_dx[ i ] = [] ;
      df_dx[ i ]= [  x_n = xpoints[i+1] ,( y_n - y_n_1 ) / h ];
      x_n_1     = x_n ;
      y_n_1     = y_n ;
    }
    return {dfdx_array               : df_dx        ,
            pointsdistribution : deltaInterpolacion           } ;
};

module.exports.derivativenumeric  = derivativenumeric ;

var linearextrapolation =  function (arraytoextrapolate) {
    var _arraytosearch = [], length;
    this.arraytoextrapolate = arraytoextrapolate ;
    length = this.arraytoextrapolate.length ;
    for (var i = 0; i < length; i++) {
        _arraytosearch[i] = arraytoextrapolate[i][0]
    } ;
    this.arraytosearch  = _arraytosearch ;
    function_extrapolated = function (x) {
    var A = {}, B = {}, m, b ;
    if (x < this.arraytosearch[0] || x > this.arraytosearch[length -1 ])  {return ;}
    n = search(x, this.arraytosearch )  ;
    A = { x : arraytoextrapolate[n][0],
          y : arraytoextrapolate[n][1]};
    B = { x : arraytoextrapolate[n+1][0],
          y : arraytoextrapolate[n+1][1]} ;
    m = ( B.y - A.y ) /  (B.x - A.x) ;
    b = A.y-A.x * m ;
     return  m * x + b
 };
} ;
module.exports.linearextrapolation  = linearextrapolation ;


var derivativeNof =  function (f,npoints,interval) {
    var array_of_derivate = derivativenumeric(f,npoints,interval);
    this.f = linear_extrapolation(array_of_derivate.dfdx_array).function_extrapolated ;
};
module.exports.derivativeNof  = derivativeNof;