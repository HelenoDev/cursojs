var agora = new Date()
var diaSem = agora.getDay()

/*
Dias da Semana
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado
*/

switch(diaSem){

    case 0:
        diaSemana = 'Domingo'
        break
    case 1:
        diaSemana = 'Segunda-feira'
        break
    case 2:
        diaSemana = 'Terça-feira'
        break
    case 3:
        diaSemana = 'Quarta-feira'
        break
    case 4:
        diaSemana = 'Quinta-feira'
        break
    case 5:
        diaSemana = 'Sexta-feira'
        break
    case 6:
        diaSemana = 'Sábado'
        break
    default:
        console.log('Erro -Dia Inválido')
        break
 
}

console.log(`Hoje é ${diaSemana}`)
