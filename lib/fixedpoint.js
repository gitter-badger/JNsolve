'use strict' ;

module.exports =  function (g,point_initial ,options) {
         options = options || { npoints : 1000, presicion : 0.001  } ;
         var presicion = options.presicion ;
         var x = 0, pivot = 0,nmax = 100000;
         function f(x) {
           return x + g(x);
         }
         x = point_initial  ;
         var Root ;
         var nmax = options.npoints ;
         var n = 1
         while (!Root && n < nmax) {

         pivot = x ;
         x = f(pivot) ;
         if (Math.abs( x - pivot ) <= presicion){ Root = x ; }
         n++ ;
         }

    return {Root : Root, n : n , method : 'fixedpoint' } ;
};
