'use strict' ;
 var methodN =    require('./methodN') ;

module.exports =  function (g,interval,initialpoint,options) {

  options = options || {npoints_DNumeric : 1000, presicion : 0.001 , nstepsmax : 1000  } ;
  options.presicion = options.presicion || 0.001 ;
  options.npoints_DNumeric = options.npoints_DNumeric || 1000 ;
  options.nstepsmax = options.nstepsmax || 1000 ;
    var Root, prop, solution ;
    for( prop in methodN) {
      solution = methodN[prop](g,interval,initialpoint,options) ;
      if(solution){Root = solution.Root;}
      if (Root) { break;}
    }
    return solution ;

};
