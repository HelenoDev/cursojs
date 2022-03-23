/*
var idade = 80
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Não Vota')
} else if (idade < 18 || idade > 65){
  console.log('Voto Opcional')
} else{
    console.log('Voto Obrigatório')
}
*/


var agora = new Date()
var hora = agora.getHours()



console.log(`São exatamente ${hora} Hora.`)
if (hora < 12){
    console.log('Bom Dia')
} else if (hora < 18){
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}

  