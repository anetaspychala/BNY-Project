let currencyMap;
let list =[];
data.forEach(o =>list.push(o.Column1));
let mySelect = document.getElementById('list');
let selectedOptionText = document.getElementById('selectedOptionText');
mySelect.addEventListener("change",()=>{
    const selectedMonth =mySelect.value;
    selectedOptionText.textContent=mySelect.value;
    const selectedData =data.find(o=> o.Column1 === selectedMonth);
    if (selectedData) {
        currencyMap = new Map(Object.entries(selectedData));
        let usdRateCell = document.getElementById('usd-rate');
        let eurRateCell = document.getElementById('eur-rate');
        let plnRateCell = document.getElementById('pln-rate');
        let gbpRateCell = document.getElementById('gbp-rate');
        let cadRateCell = document.getElementById('cad-rate');
        let chfRateCell = document.getElementById('chf-rate');
        let czkRateCell = document.getElementById('czk-rate');
        let nokRateCell = document.getElementById('nok-rate');
        usdRateCell.innerHTML = currencyMap.get('USD').toFixed(2);
        eurRateCell.innerHTML = currencyMap.get('EUR').toFixed(1);
        plnRateCell.innerHTML = currencyMap.get('PLN').toFixed(2);
        gbpRateCell.innerHTML = currencyMap.get('GBP').toFixed(2);
        cadRateCell.innerHTML = currencyMap.get('CAD').toFixed(2);
        chfRateCell.innerHTML = currencyMap.get('CHF').toFixed(2);
        czkRateCell.innerHTML = currencyMap.get('CZK').toFixed(2);
        nokRateCell.innerHTML = currencyMap.get('NOK').toFixed(2);
    }else{
        alert('Brak danych');
    }
});
let amountInput = document.getElementById('amount');
let exchangeInput = document.getElementById('exchange');
let currencyFromInput = document.getElementById('currencyFrom');
let currencyToInput = document.getElementById('currencyTo');

function calculateExchange() {
    const amount = parseFloat(amountInput.value);
    const currencyFrom = currencyFromInput.value;
    const currencyTo = currencyToInput.value;

    if (currencyMap.get(currencyFrom) && currencyMap.get(currencyTo) && !isNaN(amount)) {
        const exchangeRateFrom = currencyMap.get(currencyFrom);
        const exchangeRateTo = currencyMap.get(currencyTo);
        const convertedAmount = (amount / exchangeRateFrom) * exchangeRateTo;
        exchangeInput.value = convertedAmount.toFixed(2);
    }
}
list.forEach(item=>{
    let optionElement=document.createElement("option");
    optionElement.textContent=item;
    mySelect.appendChild(optionElement);
});
function performExchange() {
    calculateExchange();
}