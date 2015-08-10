'use strict' ;
 var  regulafalsi =  require('./regulafalsi'),
  methodN =    require('./methodN') ;

module.exports =  function (g,interval,initialpoint,options) {
    var Root, prop, solution ;
    for( prop in methodN) {
      solution = methodN[prop](g,interval,initialpoint,options) ;
      if(solution){Root = solution.Root} ;
      if (Root) { break;}
    }
    return solution ;

}
