function mensagem () {
    let msg = 'Hello World'
    return msg
}

console.log(mensagem())

const nome = () => {
    return "Ana"
}
console.log(nome())

function lindaMensagem (parametro) {
    return console.log ("A sua mensagem é: ", parametro)
}

lindaMensagem("Java é bom! É incrível")
lindaMensagem(3)
lindaMensagem("Coitado do Juarez por aguentar o João nas segundas")

// utilizar o atalho crtl + alt + N para executar 
// e aparecer no console
