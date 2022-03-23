function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    //var hora = 20

    
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //Bom Dia
        img.src = "foto-manha.png"
        document.body.style.background = '#E7C595'



    } else if (hora >=12 && hora <18){
        //Boa Tarde
        img.src = "foto-tarde.png"
        document.body.style.background = '#A63D40'


    } else {
        //Boa Noite
        img.src = "foto-noite.png"
        document.body.style.background = '#151515'
    }

}



