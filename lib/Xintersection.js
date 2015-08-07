'use strict' ;
module.exports = function (A,B) {
var x = A.x - A.y * (B.x - A.x) / (B.y - A.y);
return x ;
};
