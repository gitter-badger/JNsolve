'use strict';
var  _ = require('lodash');
var length, random_position,  search_array=[];


module.exports = function (search, arraytosearch) {
  var array_to_search     = _.clone(arraytosearch,true), found;
      length              = array_to_search.length ;
      found               = false ;
      while (!found){
      random_position = Math.floor(Math.random()*length);
      if (search == array_to_search[random_position] ){found = true ; position = random_position   }
      }
      return {position : position ,
              search : search    };
} ;
