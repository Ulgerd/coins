var rates = [0.25, 0.1, 0.05, 0.01]

function amountToCoins2(amount, coins) {
	return rates.map( (cV, i) => {
		var excess = +(amount%cV).toFixed(2); 
		var quntOfCoins = +((amount-excess)/cV).toFixed(2);
		if (quntOfCoins > coins[i]) {         
			amount = excess + (quntOfCoins-coins[i])*cV;
			return coins[i];
		} 
			amount = excess;
			return quntOfCoins;
	})
}


 /* or */


var rates = [0.25, 0.1, 0.05, 0.01]

function amountToCoins2(amount, coins) {
	var change = new Array(4).fill(0);
	amount*=100;
	for (var i = 0; i < rates.length; i++) {
		let penny = coins[i];
		let r = rates[i]*100;
		while (amount >= r && penny > 0) {
			amount -= r;
			change[i]++;
			penny--;
		}
	} 
	return change;
}

console.log(amountToCoins2(0.25, [0, 99, 99, 99])) // [0, 2, 1, 0]
console.log(amountToCoins2(0.51, [1, 99, 99, 99])) // [1, 2, 1, 1] 
console.log(amountToCoins2(1.75, [1, 1, 99, 99])) // [1, 1, 28, 0]
console.log(amountToCoins2(7, [99, 99, 99, 99])) // [28, 0, 0, 0]
console.log(amountToCoins2(1.4, [0, 0, 99, 99])) // [0, 0, 28, 0]