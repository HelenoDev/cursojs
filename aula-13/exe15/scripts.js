function verificar(){

    var data = new Date()
    var ano = data.getFullYear()

    
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){

        window.alert('Verifique os dados e tente novamente.')

    } else {
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        var genero = ''

        if (fsex[0].checked) {

            genero = 'Homem'
            
            document.body.style.background = '#2980b9'
            


            if (idade <= 18){
                //criança
                img.setAttribute('src', 'crianca-masc.png')
            
            } else if (idade <=60){
                //Adulto
                img.setAttribute('src', 'adulto-masc.png')

            } else{

                //Idoso
                img.setAttribute('src', 'idoso-masc.png')

            }



        }
        else{
            genero = 'Mulher'

            document.body.style.background = '#9b59b6'

            if (idade <= 18){
                //criança
                img.setAttribute('src', 'crianca-fem.png')
            
            } else if (idade <=60){
                //Adulto
                img.setAttribute('src', 'adulto-fem.png')

            } else{

                //Idoso
                img.setAttribute('src', 'idoso-fem.png')

            }


        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
    


   

}