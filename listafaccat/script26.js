let qtdMin = parseInt(prompt("Informe a quantidade mínima necessária"))
let qtdMax = parseInt(prompt("Informe a quantidade máxima necessária"))
let qtdAtual = parseInt(prompt("Informe a quantidade atual no estoque"))

let media = (qtdMax+qtdMin)/2

if (qtdAtual>=media) {
    document.write("Quantidade atual: " + qtdAtual + "<br>")
    document.write("Quantidade média necessária: " + media + "<br>")
    document.write("Não é necessário fazer reposição")
} else {
    document.write("Quantidade atual: " + qtdAtual + "<br>")
    document.write("Quantidade média necessária: " + media + "<br>")
    document.write("Reposição necessária")
}