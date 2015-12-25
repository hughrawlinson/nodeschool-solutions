var _ = require('lodash');

module.exports = function(freelancers){
	var total = _.reduce(freelancers,function(acc,val,key){
		return acc + val.income;
	},0);

	var average = total / _.size(freelancers);
	var final = _.reduce(freelancers,function(acc,val,key){
		if(val.income>average){
			acc.overperform.push(val);
		} else {
			acc.underperform.push(val);
		}
		return acc;
	},{
		average:average,
		underperform:[],
		overperform:[]
	});

	final.underperform = _.sortBy(final.underperform,'income');
	final.overperform = _.sortBy(final.overperform,'income');

	return final;
};
