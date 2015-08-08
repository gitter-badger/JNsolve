'use strict' ;

module.exports =  function (g,point_initial ,options) {
         options = options || { npoints_DNumeric : 1000, presicion : 0.001 , nstepsmax : 1000 } ;
         var presicion = options.presicion ;
         var x = 0, pivot = 0;
         function f(x) {
           return x + g(x);
         }
         x = point_initial  ;
         var Root ;
         var nmax = options.nstepsmax ;
         var n = 1
         while (!Root && n < nmax) {
         pivot = x ;
         x = f(pivot) ;
         if (Math.abs( x - pivot ) <= presicion){ Root = x ; }
         n++ ;
         }

    return {Root : Root, numSteps : n , method : 'fixedpoint' } ;
};
