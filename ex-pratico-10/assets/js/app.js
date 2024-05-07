const currencys = [
    { name: "real", surname: "BRL", symbol: "R$", rates: { real: 1.00, dolar: 0.20, euro: 0.18, yuan: 1.42, peso: 171.73 } },
    { name: "dolar", surname: "USD", symbol: "$", rates: { real: 5.10, dolar: 1.00, euro: 0.93, yuan: 7.24, peso: 876.14 } },
    { name: "euro", surname: "EUR", symbol: "€", rates: { real: 6.40, dolar: 1.08, euro: 1.00, yuan: 7.79, peso: 943.54 } },
    { name: "yuan", surname: "CNY", symbol: "¥", rates: { real: 0.70, dolar: 0.14, euro: 0.13, yuan: 1.00, peso: 121.05 } },
    { name: "peso", surname: "ARS", symbol: "$", rates: { real: 0.0058, dolar: 0.0011, euro: 0.0011, yuan: 0.0083, peso: 1.00 } }
]


let currency1 = document.querySelector("#currency-1").value
let currency2 = document.querySelector("#currency-2").value
let valueToConvert

function changeSelect() {
    currency1 = document.querySelector("#currency-1").value
    currency2 = document.querySelector("#currency-2").value
}

let button = document.querySelector("#confirm")


function convert(){
    
}


button.addEventListener("click", convert)





