const request = require('request');

const currencies = ''; //damit er die currencies annimmt 

request('https://api.exchangeratesapi.io/latest', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body); // Print the response status code if a response was received
  let bodyObj = JSON.parse(body);
  //console.log(bodyObj);

  //let rate = bodyObj.rate;

  //for (let field in bodyObj.rates) {
  //console.log(field);
  //console.log(rate[field]);
  //try {
  //try probiert die Schleife durchzulaufen 
  //man muss bei dem try auch ein catch haben 
  for (let field in bodyObj.rates) {
    if (currencies.hasOwnProperty(field)) {
      currencies[field].rate = bodyObj.rates[field];
    } else if (currencies.hasOwnProperty(field) == false) {
      currencies[field] = {};
      currencies[field].rate = bodyObj.rates[field];
    }
    console.log(field);
    console.log(bodyObj.rates[field])
  }
});

// let output = 1 / currencies[originalCurrency].value * [amount] * currencies[targetCurrency].value
// console.log('Das Ergebnis ist: ' + output + currencies[targetCurrency].symbol);


//});

// den ganzen Block in die index.js eingesetzt 