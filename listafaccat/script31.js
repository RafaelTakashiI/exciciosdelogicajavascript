alert("Dê três valores e irá retornar se é possível ou não formar um triângulo")
let l1 = Number(prompt("Lado A"))
let l2 = Number(prompt("Lado B"))
let l3 = Number(prompt("Lado C"))

if ((l1 && l2 && l3) < (l2 + l3) &&  (l1 && l2 && l3) < (l3 + l1) && (l1 && l2 && l3) < (l1 + l2)) {
    document.write("Forma um triângulo");  
} else {   
    document.write("Não forma um triângulo");  
}