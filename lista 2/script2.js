let votos = parseFloat(prompt("Digite o total de votos: "));
let votov = parseFloat(prompt("Digite o total de votos validos: "));
let votob = parseFloat(prompt("Digite o total de votos brancos: "));
let voton = parseFloat(prompt("Digite o total de votos nulos: "));
let relacaov = 100*votov/votos
let relacaob = 100*votob/votos
let relacaon = 100*voton/votos
alert("resultado: " + relacaov + "%" +" resultado: " + relacaob + "%" +" resultado: " + relacaon +"%")