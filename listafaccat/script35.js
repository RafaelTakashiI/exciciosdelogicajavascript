let tipoCombustivel = prompt("Digita 'A' para álcool ou 'G' para Gasolina")
let totalLitros = Number(prompt("Quantos litros irá colocar?"))


if ((tipoCombustivel == 'A') && (totalLitros<=20)) {
    let precoTotal = (2.90*totalLitros)-((2.90*totalLitros)*0.03)
    document.write("Combustível: Àlcool <br>")
    document.write("Preço do àlcool: R$2,90 <br>")
    document.write("Preço sem desconto: R$" + totalLitros*2.90.toFixed(2) + "<br>")
    document.write("Desconto de compra: 3% <br>")
    document.write(`Valor final: R$${precoTotal.toFixed(2)}`)
} else if ((tipoCombustivel == 'A') && (totalLitros>20)) {
    let precoTotal = (2.90*totalLitros)-((2.90*totalLitros)*0.05)
    document.write("Combustível: Àlcool <br>")
    document.write("Preço do àlcool: R$2,90 <br>")
    document.write("Preço sem desconto: R$" + totalLitros*2.90.toFixed(2) + "<br>")
    document.write("Desconto de compra: 5% <br>")
    document.write(`Valor final: R$${precoTotal.toFixed(2)}`)
} else if ((tipoCombustivel == 'G') && (totalLitros<=20)) {
    let precoTotal = (3.30*totalLitros)-((3.30*totalLitros)*0.04)
    document.write("Combustível: Gasolina <br>")
    document.write("Preço da gasolina: R$3,30 <br>")
    document.write("Preço sem desconto: R$" + totalLitros*3.30.toFixed(2) + "<br>")
    document.write("Desconto de compra: 4% <br>")
    document.write(`Valor final: R$${precoTotal.toFixed(2)}`)
} else if ((tipoCombustivel == 'G') && (totalLitros>20)) {
    let precoTotal = (3.30*totalLitros)-((3.30*totalLitros)*0.06)
    document.write("Combustível: Gasolina <br>")
    document.write("Preço da gasolina: R$3,30 <br>")
    document.write("Preço sem desconto: R$" + totalLitros*3.30.toFixed(2) + "<br>")
    document.write("Desconto de compra: 6% <br>")
    document.write(`Valor final: R$${precoTotal.toFixed(2)}`)
} else {
    document.write("Digite apenas A ou G para gasolina escolhida!")
}