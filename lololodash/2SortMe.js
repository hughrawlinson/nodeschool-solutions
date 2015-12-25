var _ = require('lodash');

module.exports = function(array){
	return _.sortBy(array,function(value){
		return -value.quantity;
	});
}