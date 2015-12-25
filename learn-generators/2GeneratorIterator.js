function *factorial(n){
	var val = 1;
	for(var i = 1; i <= n; i++){
		val = val * i;
		yield val;
	}
}

for (var n of factorial(5)){
	console.log(n);
}
