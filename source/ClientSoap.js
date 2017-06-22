'use strict';

const soap = require('soap');
const xml2js = require('react-native-xml2js');
var parser = new xml2js.Parser();

module.exports = function (callback ) {
  const URL = "http://www.webservicex.com/globalweather.asmx?wsdl";

  soap.createClient(URL, function (err, client) {
    if (err) {
      console.log(err);
    }
    else {
      return client.GetCitiesByCountry({CountryName: "Argentina"}, function (err, response) {
        if (err) {
          console.log(err);
        }
        else {
          parser.parseString(response.GetCitiesByCountryResult, (err, result) => {
            // Estructura: result.NewDataSet.Table[3];
            callback(result.NewDataSet);
          });
        }
      });
    }
  });

};
