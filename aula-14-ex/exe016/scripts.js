function contar(){

    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('resultado')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){

        //window.alert('Erro - Preencha todos os campos')
        res.innerHTML = 'Impossível contar!'

    }
    else
    {
     
        res.innerHTML = 'Contando...'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){

            window.alert('Impossível contar de 0. Considerando Passo1')
            p = 1
        }
        
        
        if (i <f){

            //Contagem Crescente
            for(let c = i; c <= f; c +=p){
                res.innerHTML += `${c} \u{1F449} `
            }
            

        } else{

            //Contagem Descrescente
            for(let c = i; c >= f; c -=p){
                res.innerHTML += `${c} \u{1F449} `
            }
            


        }
        //Coloca bandeirinha no fim da execução
        res.innerHTML += ' \u{1F3C1}'
        
        

    }
}