'use strict' ;
var Xintersection=require('./Xintersection');
module.exports  = function (A, B, f, presicion) {
   var x = Xintersection(A,B) ;
   var y = f(x)               ;
   if (Math.abs(y) <= presicion) {
   return x ;
   }
   var test = A.y * y < 0 ;
   if (test) {
     B.x = x ;
     B.y = y ;
   }
   else {
     A.x = x ;
     A.y = y ;
  }
};
