var _ = require('lodash');

var worker = function(array){
	var lists = {hot:[],warm:[]};

	var checkTemp = function(val){
		return val>19;
	};
	_.forEach(array,function(value,key){
		if(_.every(value,checkTemp)){
			lists.hot.push(key);
		} else if(_.some(value,checkTemp)){
			lists.warm.push(key);
		}
	});
	return lists;
};

module.exports = worker;
