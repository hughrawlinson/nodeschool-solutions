var _ = require('lodash');

module.exports = function(orders){
	return _(orders).groupBy('article')
					.map(function(ordersByArticle){
						return _(ordersByArticle).reduce(function(acc, val, key){
							acc.total_orders+=val.quantity;
							return acc;
						},{
							article:ordersByArticle[0].article,
							total_orders:0
						})
					}).sortBy(function(total){return -total.total_orders});
};
