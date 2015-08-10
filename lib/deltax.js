'use strict' ;
var  sortInterval = require('./sortInterval');


module.exports =  function (npoints,interval,pointsDistribution) {
        var a, b, N, n, x_n_array = [], alpha , beta ;
        pointsDistribution = pointsDistribution || 'linear' ;
        sortInterval(interval) ;
        N= npoints ; a = interval[0] ;  b = interval[1];

        var Distribution =  {
             'linear':function () {
               alpha = ( b - a ) / (N - 1 ) ;
               beta = a - alpha;
               for (n=1 ; n <=  N ; n++) {
               x_n_array[n] = alpha * n + beta  ;
               }
               },

           'exponential':
           function () {
             beta  = Math.log(b / a)/ (N - 1 ) ;
             alpha = Math.exp( Math.log(a) - beta ) ;
             for (n=1 ; n <=  N ; n++) {
             x_n_array[n] = alpha * Math.exp(beta * n ) ;
             }
               },
           'logarithmic':
           function () {
              beta  = (b - a)/ Math.log(N) ;
              alpha = a   ;
              for (n = 1 ; n <= N ; n++) {
              x_n_array[n] = alpha +  beta * Math.log(n) ;
              }
               },
             'law':
             function () {
                  beta  = Math.log(b/a) / Math.log(N) ;
                  alpha = a   ;
                  for (n=1 ; n  <=  N ; n++) {
                  x_n_array[n] = alpha * Math.pow( n, beta ) ;
                  }
               },
            'cuadratic':
            function () {

                   alpha = (b - a + 1 - N * N ) / (N - 1 )   ;
                   beta  = a -1 - alpha ;
                   for (n=1 ; n <=  N ; n++) {
                   x_n_array[n] = n * n + alpha * n + beta ;
               }
               },

            'inverse':
               function ( ) {
                   alpha = ( 1 / b - 1 / a ) / (N - 1 ) ;
                   beta = a - alpha ;
                   for (n=1 ; n <=  N ; n++) {
                   x_n_array[n] = alpha * n + beta  ;
                   }
               },

        };

        Distribution[pointsDistribution]();
    return { x_n_array              : x_n_array ,
             pointsdistribution : pointsDistribution          } ;

};
