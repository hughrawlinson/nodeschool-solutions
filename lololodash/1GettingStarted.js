var _ = require("lodash");

module.exports = function(array){
	return _.where(array,{active:true});
}