//AULA 16 - funções 2

function soma(n1, n2){
    valor = n1 + n2
    return valor
}

console.log(soma(10,1))

//Função com predefinição de parâmetro
function soma(n1 = 0, n2 = 0){
    valor = n1 + n2
    return valor
}

console.log(soma(10))