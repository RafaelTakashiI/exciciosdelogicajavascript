let valorReal = parseFloat(prompt("Informe a quantia disponivel para conversão"))
let cotacaoDolar = parseFloat(prompt("Informe a cotação do dólar"))
let conversao = valorReal/cotacaoDolar

document.write("A quantia informa em dólares será: $" + conversao.toFixed(2))