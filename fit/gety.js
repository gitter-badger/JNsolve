'use strict';
var  get_y = get_y || [] , array_y=[],j,
 length_query = get_y.length ;
module.exports = function (f,get_y) {
  // Calculate the values of "y" using get_y.
  for (j = 0; j < length_query; j++){
  array_y[j]  = [] ;
  array_y[j][1] = f(get_y[j]) ;
  array_y[j][0] = get_y[j];
  }
  return array_y ;
};
