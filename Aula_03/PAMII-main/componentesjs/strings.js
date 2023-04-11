const escola = "Cod3r"

console.log(escola.charAt(4)) // me retorna a letra da quarta posição
console.log(escola.charAt(5)) // me retorna vazio. JS retorna um valor de percentual de erros menor
// de erros menor

// para colocar string pode usar " " ou ' '

console.log(escola.charCodeAt(3)) // retorna o valor da tabela UNICODE
console.log(escola.indexOf("o")) // índice associado a varíavel escola

console.log(escola.substring(1)) // inclui índice 1 até o final
console.log(escola.substring(0,3)) // inclui índice 0 a 2
console.log("Escola" .concat(escola).concat("!")) 
// Escola é um valor do tipo literal, ou seja, posso
// passar direto sem variável
// poderia usar console.log("Escola" + "escola" + "!")
// + no contexto numérico vai somar mas no string vai concatenar

console.log(escola.replace(3, "e"))
console.log(escola.replace(/\d/, "e")) // regex para substituir
// todos os digitos numéricos dentro do texto 

console.log("Ana, Maria Pedro".split("","")) // conversão para array
// pode ser usado regex /,/












