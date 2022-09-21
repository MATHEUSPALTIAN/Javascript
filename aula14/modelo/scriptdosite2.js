function carregar (){
    //var foto = document.getElementById('foto')
    //foto.src='manha.png'
    
    var genero = ''
    var res = document.querySelector('div#texto')
    var idade = document.getElementById('idade')
    var idadecal = Number.parseInt(idade.value)
    var foto = window.document.getElementById('imagem')
    var sexo = document.getElementsByName('sexo') //Aqui precisaria ser byname para pegar tds possibilidades
    imagem.scr="homem.png"
    res.style.textAlign = 'center'
    var divfoto = document.getElementById('foto')
    divfoto.style.textAlign = 'center'
    if (sexo[0].checked){
        genero = 'Homem'
        res.innerHTML = `Detectamos ${genero} com ${idadecal} anos`
        if (idadecal > 0 && idadecal <=18){
            foto.style.alignContent = 'center'
            foto.src='bbhomem.png'
        }else if (idadecal>18 && idadecal <60){
            foto.src='homem.png'
        }else if (idadecal>=60 ){
            foto.src='velho.png'
        }
    }else if (sexo[1].checked){
        genero='mulher'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idadecal} anos`
        
        if (idadecal > 0 && idadecal <=18){
            foto.style.alignContent = 'center'
            foto.src='bebemulher.png'
        }else if (idadecal>18 && idadecal <60){
            foto.src='mulhermed.png'
        }else if (idadecal>=60 ){
            foto.src='velha.png'
    }}
}
