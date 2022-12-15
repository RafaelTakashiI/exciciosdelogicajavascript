let custofabrica = parseFloat(prompt("Informe o custo de fábrica: "));
valordist = 0.28;
valorimp = 0.45;
let distriimposto = custofabrica*valordist;
let distriimposto2 = custofabrica*valorimp;
let impostofinal = distriimposto+distriimposto2;
carro = impostofinal+custofabrica;
alert("O custo do consumidor é: "+carro)


