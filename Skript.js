const jsonData = require('./fxrate.json');

const obj = JSON.stringify(jsonData)
const mapJSON = new Map(Object.entries(JSON.parse(obj)))
let map2 = new Map();
map2= mapJSON.get("106");
const obj3 = JSON.stringify(map2)
const mapJSON2=new Map(Object.entries(JSON.parse(obj3)))
const currencyMap= new Map();
for(const[key, value]) of mapJSON2){
    const num = parseFloat(value);
    currencyMap.set(key, num);
}
const usdRateCell = document.getElementById('usd-rate');
const eurRateCell = document.getElementById('eur-rate');
const plnRateCell = document.getElementById('pln-rate');
const gbpRateCell = document.getElementById('gbp-rate');
const cadRateCell = document.getElementById('cad-rate');
const chfRateCell = document.getElementById('chf-rate');
const czkRateCell = document.getElementById('czk-rate');
const nokRateCell = document.getElementById('nok-rate');
usdRateCell.innerHTML = currencyMap.get('USD');
eurRateCell.innerHTML = currencyMap.get('EUR');
plnRateCell.innerHTML = currencyMap.get('PLN');
gbpRateCell.innerHTML = currencyMap.get('GBP');
cadRateCell.innerHTML = currencyMap.get('CAD');
chfRateCell.innerHTML = currencyMap.get('CHF');
czkRateCell.innerHTML = currencyMap.get('CZK');
nokRateCell.innerHTML = currencyMap.get('NOK');

const amountInput = document.getElementById('amount');
const exchangeInput = document.getElementById('exchange');
const currencyFromInput = document.getElementById('currencyFrom');
const currencyToInput = document.getElementById('currencyTo');

function calculateExchange() {
    const amount = parseFloat(amountInput.value);
    const currencyFrom = currencyFromInput.value;
    const currencyTo = currencyToInput.value;

    if (currencyMap.has(currencyFrom) && currencyMap.has(currencyTo) && !isNaN(amount)) {
        const exchangeRateFrom = currencyMap.get(currencyFrom);
        const exchangeRateTo = currencyMap.get(currencyTo);
        const convertedAmount = (amount / exchangeRateFrom) * exchangeRateTo;
        exchangeInput.value = convertedAmount.toFixed(2);
    }
}
function performExchange() {
    calculateExchange();
}
