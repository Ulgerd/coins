var rates = [0.25, 0.1, 0.05, 0.01]

function amountToCoins(amount) {
	return rates.map( (cV, i) => {
		var excess = +(amount%cV).toFixed(2);   
		var coins = +((amount-excess)/cV).toFixed(2); 
		amount = excess;
		return coins;
	})
}

 /* or */

var rates = [0.25, 0.1, 0.05, 0.01]

function amountToCoins(amount) {
	var coins = new Array(4).fill(0);
	for (var i = 0; i < rates.length; i++) {
		while (amount >= rates[i]) {
			amount -= rates[i];
			coins[i] += 1;
		}
	} 
	return coins;
}

console.log(amountToCoins(0))    // [0, 0, 0, 0]
console.log(amountToCoins(1.11)) // [4, 1, 0, 1]
console.log(amountToCoins(2))    // [8, 0, 0, 0]
console.log(amountToCoins(0.01)) // [0, 0, 0, 1]
console.log(amountToCoins(0.20)) // [0, 2, 0, 0]
console.log(amountToCoins(0.25)) // [1, 0, 0, 0]