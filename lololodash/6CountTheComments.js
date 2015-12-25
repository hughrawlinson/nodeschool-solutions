var _ = require('lodash');

module.exports = function(array){
  return _.chain(array)
    .groupBy('username')
    .map(function(val){
      return {username:val[0].username,comment_count:_.size(val)};
    })
    .sortBy(function(val){return -val.comment_count;});
};
