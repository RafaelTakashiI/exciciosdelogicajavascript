let a = parseInt(prompt("Informe um valor para variável A"))
let b = parseInt(prompt("Informe um valor para variável B"))
let c = parseInt(prompt("Informe um valor para variável C"))
let d = parseInt(prompt("Informe um valor para variável D"))


let somaAB = a+b
let somaAC = a+c
let somaAD = a+d
let somaBC = b+c
let somaBD = b+d
let somaCD = c+d


let multiAB = a*b
let multiAC = a*c
let multiAD = a*d
let multiBC = b*c
let multiBD = b*d
let multiCD = c*d

document.write(a + " + " + b + " = " + somaAB + "<br>")
document.write(a + " + " + c + " = " + somaAC + "<br>")
document.write(a + " + " + d + " = " + somaAD + "<br>")
document.write(b + " + " + c + " = " + somaBC + "<br>")
document.write(b + " + " + d + " = " + somaBD + "<br>")
document.write(c + " + " + d + " = " + somaCD + "<br>")
document.write("<br>")
document.write(a + "x" + b + " = " + multiAB + "<br>")
document.write(a + "x" + c + " = " + multiAC + "<br>")
document.write(a + "x" + d + " = " + multiAD + "<br>")
document.write(b + "x" + c + " = " + multiBC + "<br>")
document.write(b + "x" + d + " = " + multiBD + "<br>")
document.write(c + "x" + d + " = " + multiCD + "<br>")