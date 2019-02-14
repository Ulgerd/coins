/*
Penny: 1 cent
Nickel: 5 cents
Dime: 10 cents
Quarter: 25 cents
*/

var rates = [0.25, 0.1, 0.05, 0.01];

function coinsToAmount(coins) {
	return +(coins.reduce( (a, cV, i) => cV*rates[i] + a, 0)).toFixed(2);
};

console.log(coinsToAmount([0, 0, 0, 0])) // 0
console.log(coinsToAmount([0, 0, 0, 1])) // 0.01
console.log(coinsToAmount([0, 0, 1, 1])) // 0.06
console.log(coinsToAmount([0, 1, 1, 1])) // 0.16
console.log(coinsToAmount([1, 1, 1, 1])) // 0.41