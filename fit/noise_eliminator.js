'use strict';
var numbers = require('numbers');
var _ = require('underscore');
/** @function
 * This function elimanate the noise of  a set of datas given. The arraynoisy have to be like [[t_1,x_1],[t_2,x_2]...].
 * @param {Array} arraynoisy.
 * @return {Array} arrayflattened.
 */
module.exports = function(arraynoisy) {
var array = [],length = arraynoisy.length,i, mean, sigma,limit,arrayflattened,error,n=1,j=1;
array[j]=[];
arrayflattened =_.clone(arraynoisy,true) ;
for ( i = 0; i < length; i++) {
  array[j][i] = arraynoisy[i][1] ;
}
mean = numbers.statistic.mean(array[j]);
sigma = numbers.statistic.standardDev(array[j]);
limit = 3.5*sigma ;
while(n !== 0 ){
  i=0 ;
  while ( arrayflattened[i] ) {
    error = Math.abs(arrayflattened[i][1]-mean);
    if( error >= limit ){
      arrayflattened.splice(i,0) ;
      n++;i-- ;
    }
    i++;
  }
  n--; j++ ; length = arrayflattened.length ;
  array[j]=[];
  for ( i = 0; i < length; i++) {
    array[j][i] = arrayflattened[i][1] ;
  }
  mean = numbers.statistic.mean(array[j]);
  sigma = numbers.statistic.standardDev(array[j]);
  limit = 3.5*sigma ;
}
return arrayflattened ;
} ;
