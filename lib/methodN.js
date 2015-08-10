'use strict';
var regulafalsi =  require('./regulafalsi'),
fixedpoint =   require('./fixedpoint'),
bisection =    require('./bisection'),
Newton_Raphson = require('./Newton_Raphson'),
Newton_Raphson_Higherorder = require('./Newton_Raphson_Higherorder') ;

module.exports = {
  Newton_Raphson_Higherorder  : Newton_Raphson_Higherorder ,

  Newton_Raphson :
  Newton_Raphson ,

  fixedpoint :
  fixedpoint,

  regulafalsi :
  regulafalsi,

    bisection :
    bisection
};
