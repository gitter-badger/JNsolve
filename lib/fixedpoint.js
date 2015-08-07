'use strict' ;
module.exports = {} ;

var fixedpoint =  function (g,initialpoint,options) {
         var options = options || { npoints : 1000, presicion : 0.001  } ;
         presicion = options.presicion ;
         var x = 0, pivot = 0,f ,nmax = 100000;
         function f(x) {
           return x + g(x)
         }
         x = initialpoint   ;
         var Root ;
         var n = 1 ;
         while (!Root && n < nmax) {

         pivot = x ;
         x = f(pivot) ;
         console.log('x=',x,'pivot=',pivot);
         if (Math.abs( x - pivot ) <= presicion){ Root = x ; }
         n++ ;
         }

    return {Root : Root, n : n , method : 'fixedpoint' } ;
};

module.exports.fixedpoint = fixedpoint ;
