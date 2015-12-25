var _ = require('lodash');

module.exports = function(array){
  return _.chain(array).map(function(val){return (val+"Chained").toUpperCase();}).sort();
}
