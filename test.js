/*
var resultado  = require('./source/ClientSoap.js');

const TIME_DEFAULT = 2000;

setInterval(() => resultado((data) => {
  console.log(data);
}), TIME_DEFAULT);
*/

const URL = "http://www.webservicex.com/globalweather.asmx?wsdl";

fetch(URL);
/*
var request = new Request(URL, {
  headers: new Headers({
    "Content-Type": ""
  })
});
*/
