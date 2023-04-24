function carregar() {

    var dia = new Date()

    var hora = dia.getHours()
  
    var greet = document.querySelector('header#greetings')
    var clock = document.querySelector('div#box')
    var hours = document.querySelector('h1#time')

    if(hora >= 6 && hora <= 11) {
        greet.innerHTML = `Bom dia!`
        hours.innerHTML = `Agora são ${hora} horas`
    } else if(hora >= 12 && hora <= 17) {
        document.body.style.background = '#FA7000'
        clock.style.background = '#ADD8E6'
        greet.innerHTML = `Boa tarde!`
        hours.innerHTML = `Agora são ${hora} horas`
    } else if(hora >= 18 && hora <= 23) {
        document.body.style.background = '#00008B'
        clock.style.background = '#D3D3D3'
        greet.innerHTML = `Boa noite!`
        hours.innerHTML = `Agora são ${hora} horas`
    } else {
        document.body.style.background = 'black'
        clock.style.background = '#A9A9A9'
        greet.innerHTML = `<font color="white">Boa madrugada!</font>`
        hours.innerHTML = `<font color="white">Agora são ${hora} horas</font>`
        document.querySelector('p#credits').innerHTML = `<font color="white">@Kodnz</font>`
    }

}

