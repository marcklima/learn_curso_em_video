
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são  ${hora} Horas`; 

    if (hora >= 0 && hora <= 12) {
        img.src = `img/bomdia.png`
        msg.innerHTML = `Bom dia !!!`
        document.body.style.background=`#e2cd9f`
    } else if(hora >= 12 && hora <= 18) {
        img.src = `img/boatarde.png`
         msg.innerHTML = `Boa Tarde !!!`
         document.body.style.background =  `#b9846f`
    } else { img.src = `img/boanoite.png`
        msg.innerHTML = `Boa Noite !!!`
        document.body.style.background =`#515154` 
          
    }         
}
