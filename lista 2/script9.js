let valor = parseInt(prompt("Digite o valor da prestação: "));
let tempo = parseInt(prompt("Digite quanto tempo de prestação: "));
let taxa = parseInt(prompt("Digite a taxa das parcelas atrasasdas: "));
prestacao = valor+(valor*taxa/100)*tempo;
alert(prestacao)
