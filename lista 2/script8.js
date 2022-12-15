let temp = parseInt(prompt("Digite o tempo de viagem: "));
let velocidade = parseInt(prompt("Digite a velocidade média do véiculo: "));

distancia = temp*velocidade;
consumo = distancia/12;

alert("A velocidade da viagem foi de: "+velocidade)
alert("O tempo de viagem foi de: "+temp)
alert("A distancia distancia da viagem foi de: "+distancia)
alert("O consumo de gasolina foi de: "+consumo)