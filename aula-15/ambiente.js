//Cria um vetor
let num = [4, 3, 2]
//Ordena o vetor
num.sort()
//Exibe conteúdo do vetor
console.log(num)

//Insere uma posição no vetor
num.push(10)
//Exibe novo vetor
console.log(num)
//Exibe quantidade de posições de um vetor
console.log(`Esse array possui ${num.length} posições`)

//Exibe a primeira posição do vetor
console.log(`O primeiro valor deste vetor é ${num[0]}`)
//Exibe a última posição de um vetor
console.log(`O último valor deste vetor é ${num[num.length - 1]}`)

//Percorrendo vetor através do FOR
for (let pos = 0; pos < num.length; pos++){
    console.log(`Indice ${pos} - Valor ${num[pos]} `)
}

// Jeito mais simples de percorrer um vetor
for (pos in num){
    console.log(num[pos])
}


// Exibe a posição de um valor dentro de um vetor - num.indexOf(2)

if (num.indexOf(2) == -1){

    console.log(`O valor não existe no Vetor`)

}
else
{
    console.log(`O valor está na posição ${num.indexOf(2)}`)

}
