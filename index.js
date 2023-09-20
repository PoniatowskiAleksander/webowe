console.log("")

const prompt = require('prompt-sync')();

const rates = {
  1: 4.6,
  2: 4.3,
  3: 5.4
}

const symbols = {
  1: 'EUR',
  2: 'USD',
  3: 'GBP'
}

var currency = 0;

do {
  console.log('1 - EUR, 2 - USD, 3 - GBP');

  currency = parseInt(prompt("wybierz odpowiednia walute"));
} while (![1, 2, 3].includes(currency));

var number;

do {
  //console.log(
  number = parseInt(prompt("podaj kwote w pln: "));
  //console.log(number);
  //console.log(!isNaN(number));
} while (isNaN(number));


console.log(number + ' PLN in ' + symbols[currency] + ' is ' + 
            Math.round(number / rates[currency] * 100)/100)







