'use strict' ;
var sortInterval = require('./sortInterval'),
_ = require('lodash')  ;


module.exports =  function (f, interval,options) {
  options = options || { npoints_DNumeric : 1000, presicion : 0.001 , nstepsmax : 1000 } ;
    var presicion = options.presicion ;
    interval = _.clone(interval,true) ;
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
    var nmax = options.nstepsmax ;
    while (! Root && n < nmax) {
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
    return {Root : Root, numSteps : n , method : 'bisection' } ;

};
