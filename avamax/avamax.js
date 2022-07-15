var audio1 = document.getElementById('mytpmp3');
var audio2 = document.getElementById('soamimp3')
var audio3 = document.getElementById('wlnowmp3')
var audio4 = document.getElementById('sweetbpmp3')

function maybeytp() {

    let imagem = document.getElementById('image')

    imagem.src = 'imagens/mytp.jpg'

    audio1.volume = 0.3
    audio1.play()

    audio2.pause()
    audio3.pause()
    audio4.pause()

    document.body.style.backgroundColor = '#cc1100'
    document.body.style.transition = '500ms'
}

function soAmI() {

    let imagem = document.getElementById('image')

    imagem.src = 'imagens/soami.jpg'

    audio2.volume = 0.3
    audio2.play()

    audio1.pause()
    audio3.pause()
    audio4.pause()

    document.body.style.backgroundColor = '#003A88'
    document.body.style.transition = '500ms'
}

function whosLaNow() {

    let imagem = document.getElementById('image')

    imagem.src = 'imagens/wln.png'

    audio3.volume = 0.3
    audio3.play()

    audio1.pause()
    audio2.pause()
    audio4.pause()

    document.body.style.backgroundColor = '#da5736'
    document.body.style.transition = '500ms'
}

function sweetButPs() {

    let imagem = document.getElementById('image')

    imagem.src = 'imagens/sweetbp.jpg'

    audio4.volume = 0.3
    audio4.play()

    audio1.pause()
    audio2.pause()
    audio3.pause()

    document.body.style.backgroundColor = '#ff087f'
    document.body.style.transition = '500ms'
}

function retornar() {

    let imagem = document.getElementById('image')

    imagem.src = 'imagens/avamax.jpg'

    document.body.style.backgroundColor = 'rgba(221, 37, 37, 0.774)'
    document.body.style.transition = '500ms'


    audio1.pause()
    audio2.pause()
    audio3.pause()
    audio4.pause()
}

function parar() {
    audio1.pause()
    audio2.pause()
    audio3.pause()
    audio4.pause()
} 
























