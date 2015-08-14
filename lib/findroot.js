'use strict' ;
 var methodN =    require('./methodN') ;
  /** @function
   * function that found the root of equation g(x)=0 try in interval ([a,b]) beginning on initialpoint using the options. Here is try by every method available into methodN until find one solution.
   * @param {Function} g  {Array} interval {Number} initialpoint {Object} options.
   * @return {Object} solution with properties Root found, numSteps and method's name used.
   */
module.exports =  function (g,interval,initialpoint,options) {
  if(!g){return ;}
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
