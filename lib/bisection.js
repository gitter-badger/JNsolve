'use strict' ;
var sortInterval = require('./lib/sortInterval') ;
module.exports = {} ;


var bisection =  function (f, interval,options) {
    options = options || { npoints : 1000, presicion : 0.001  } ;
    var presicion = options.presicion ;
    var A, B, test, x, y ;
    sortInterval(interval) ;
    A= { x : interval[0]  ,
         y : f(interval[0]) } ;
    B= { x : interval[1]  ,
         y : f(interval[1]) } ;
    test = A.y * B.y > 0 ;
    if (test) {
      x = (A.x + B.x) / 2 ;
      y = f(x)  ;
      test = A.y * y > 0 ;
      if (!test) {
        B.x = x ;
        B.y = y ;
      }
      else {
        A.x = x ;
        A.y = y ;
      }
    }
    test = A.y * B.y > 0 ;
    if (  test) { return ;  }
    var Root ;
    var n = 1 ;
    while (! Root && n < 1000000) {
        n++;
        x = (A.x + B.x) / 2 ;
        y = f(x)  ;
        if ( Math.abs(y) <= presicion ) {
          Root=  x ;
        }
        test = A.y * y > 0 ;
        if (!test) {
          B.x = x ;
          B.y = y ;
        }
        else {
          A.x = x ;
          A.y = y ;
        }

    }
    return {Root : Root, n : n , method : 'bisection' } ;

};
module.exports.bisection = bisection ;
