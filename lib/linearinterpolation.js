'use strict';

module.exports =  function (arraytointerpolate) {
    arraytointerpolate = arraytointerpolate || [] ;
    var _arraytosearch = [],length;
    this.arraytointerpolate = arraytointerpolate ;
    length = this.arraytointerpolate.length -1 ;
    for (var i = 0; i <= length; i++) {
        _arraytosearch[i] = arraytointerpolate[i][0];
    }
    this.arraytosearch_x  = _arraytosearch ;
    this.function_interpolated = function (x) {
      var a = _arraytosearch[0] ;
      var beta = _arraytosearch[length] ;
      var N = length;
      var A = {}, B = {}, m, b ,n;
      if (x<a||x>b || !x || !a || !beta)  {return ;}
      n = Math.floor( (x - a ) / ( beta - a ) * (N-1));
      if(n < 0 || n > (N-1) || !arraytointerpolate[n]){return ;}
          A = { x : arraytointerpolate[n][0],
              y : arraytointerpolate[n][1]};
          B = { x : arraytointerpolate[n+1][0],
              y : arraytointerpolate[n+1][1]} ;
      m = ( B.y - A.y ) /  (B.x - A.x) ;
      b = A.y-A.x * m ;
      return  m * x + b ;
    };
} ;
