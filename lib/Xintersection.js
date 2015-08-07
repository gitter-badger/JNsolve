'use strict' ;
module.exports = {} ;
var Xintersection= function (A,B) {
var x = A.x - A.y * (B.x - A.x) / (B.y - A.y);
return x ;
};

module.exports.Xintersection = Xintersection ;
