function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var pe = window.document.getElementById('periodo')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = (`<p> Agora são <strong>${hora}:${min}</strong>. </p>`)
    if (hora >= 0 && hora < 12){
        img.src = `imagens/manha.jpg`
        document.body.style.background = '#e2cd9f'
        pe.innerHTML = (`Bom dia!!`)
        //Bom dia
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = `imagens/tarde.jpg`
        document.body.style.background = '#e2ca5f'
        pe.innerHTML = (`Boa tarde!!`)
    } else {
        // Boa noite
    img.src = `imagens/noite.jpg`
    document.body.style.background = '#3e3e3e'
    pe.innerHTML = (`Boa noite!!`)
    }
}
