var _ = require('lodash');

module.exports = function(array){
	return _.forEach(array,function(item){
		item.size = item.population>1?"big":item.population>0.5?"med":"small";
	});
}
