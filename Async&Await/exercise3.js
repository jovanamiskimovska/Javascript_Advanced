$(document).ready(function(){

    let table=$("#table");

    let url="https://restcountries.eu/rest/v2/capital/tallinn";
    let url2="https://restcountries.eu/rest/v2/currency/"

    function fillTable(cityDetails) {
        table.append(' <thead class="thead-dark"> <tr><th scope="col">Capital</th><th scope="col">Country</th><th scope="col">Alt Spellings</th><th scope="col">Region</th><th scope="col">Subregion</th><th scope="col">Currencies</th></tr></thead></table>');
        table.append(`<tbody><div class="row">
    <td><div class="col-md-3">${cityDetails.capital}</div></td>
    <td><div class="col-md-3">${cityDetails.name}</div></td>
    <td><div class="col-md-3">${cityDetails.altSpellings}</div></td>
    <td><div class="col-md-3">${cityDetails.region}</div></td>
    <td><div class="col-md-3">${cityDetails.subregion}</div></td>
    <td><div class="col-md-3">name: ${cityDetails.currencies[0].name} code: ${cityDetails.currencies[0].code} symbol: ${cityDetails.currencies[0].symbol}</div></td>
</div></tbody>`);
    }


    async function apiCall(url){

       let capitalCity=await fetch(url);
        let capitalCityObject = await capitalCity.json();
        console.log(capitalCityObject[0]);
        fillTable(capitalCityObject[0]);

        let currency=capitalCityObject[0].currencies[0];
        console.log(`The currency is ${currency.name},its code is ${currency.code} and its symbol is ${currency.symbol}`);
        
        let countriesWithSameCurrency=await fetch(`${url2}${currency.code}`);
        let countriesWithSameCurrencyObject = await countriesWithSameCurrency.json();
        console.log(`Number of countries using ${currency.name} as their currency is ${countriesWithSameCurrencyObject.length}`);
    }

    apiCall(url);
})