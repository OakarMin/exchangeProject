let dataOfExchange = {
    "info": "Central Bank of Myanmar",
    "description": "Official Website of Central Bank of Myanmar",
    "timestamp": "1642060800",
    "rates": {
    "USD": "1778.0",
    "SEK": "199.60",
    "ILS": "572.39",
    "NOK": "205.95",
    "GBP": "2443.1",
    "CAD": "1425.9",
    "MYR": "425.92",
    "RSD": "17.357",
    "BRL": "321.27",
    "HKD": "228.22",
    "KRW": "150.01",
    "PHP": "34.856",
    "VND": "7.8292",
    "JPY": "1,554.1",
    "CZK": "84.015",
    "NZD": "1223.4",
    "LKR": "8.7802",
    "SGD": "1322.4",
    "KHR": "43.643",
    "IDR": "12.440",
    "LAK": "15.764",
    "SAR": "473.73",
    "BDT": "20.680",
    "EGP": "112.94",
    "THB": "53.522",
    "KES": "15.693",
    "PKR": "10.079",
    "CHF": "1949.8",
    "CNY": "279.59",
    "NPR": "15.045",
    "ZAR": "116.39",
    "INR": "24.072",
    "EUR": "2040.6",
    "BND": "1322.4",
    "KWD": "5887.4",
    "RUB": "23.837",
    "AUD": "1300.2",
    "DKK": "274.26"
    }
};
let inputTag = document.getElementsByClassName("inputTag")[0];
let fromTag = document.getElementsByClassName("fromTag")[0];
let toTag = document.getElementsByClassName("toTag")[0];
let calculateBtn = document.getElementsByClassName("calculateBtn")[0];
let resultDiv = document.getElementsByClassName("resultDiv")[0];
let currencyNameObj = dataOfExchange.rates;
let tableBody = document.getElementsByClassName("tableBody")[0];
let selectingCurrency =(userSelect) =>{
    let getSelectOption = userSelect.selectedIndex;
    return userSelect.options[getSelectOption].text;
}
let selectInOption = (selectDiv)=>{
    for(let currencyName in currencyNameObj) {
        let optionData = `
        <option value="${currencyNameObj[currencyName]}">${currencyName}</option>
        `
        selectDiv.innerHTML += optionData;
    }
};
selectInOption(fromTag);
selectInOption(toTag);

//calculationProcess
calculateBtn.addEventListener("click",()=>{
    let inputValue = inputTag.value;
    let fromCurrencyRate = parseInt(fromTag.value);
    let toCurrencyRate = parseInt(toTag.value);
    let calculateResult = (inputValue*fromCurrencyRate)/toCurrencyRate;
    let result = calculateResult.toFixed(2);
    resultDiv.innerHTML = result;
    inputTag.value = "";
    let rateExchangeDate = new Date();
    let getDate = rateExchangeDate.getDate();
    let getMonth = rateExchangeDate.getMonth();
    let getMonthChange ;
    switch(getMonth) {
        case 0:
            getMonthChange = "Jan"
            break;
        case 1:
            getMonthChange = "Feb"
            break;
        case 2:
            getMonthChange = "Mar"
            break;
        case 3:
            getMonthChange = "Apr"
            break;
        case 4:
            getMonthChange = "May"
            break;
        case 5:
            getMonthChange = "Jun"
            break;
        case 6:
            getMonthChange = "Jul"
            break;
        case 7:
            getMonthChange = "Aug"
            break;
        case 8:
            getMonthChange = "Sept"
            break;
        case 9:
            getMonthChange = "Oct"
            break;
        case 10:
            getMonthChange = "Nov"
            break;
        case 11:
            getMonthChange = "Dec"
            break;
    };
    let getFullYear = rateExchangeDate.getFullYear();
    let fromTagSelect = selectingCurrency(fromTag);
    let toTagSelect = selectingCurrency(toTag);
    let insertTable = `
    <tr>
        <td>${getDate} / ${getMonthChange} / ${getFullYear}</td>
        <td>${inputValue}</td>
        <td>${fromTagSelect}</td>
        <td>${toTagSelect}</td>
        <td>${result} ${toTagSelect}</td>
  </tr>
    `
    tableBody.innerHTML += insertTable
})

