function tocaSom(idTeclaSom){
    document.querySelector(idTeclaSom).play()
}

const listaTeclas = document.querySelectorAll('.tecla')
let i = 0

while (i < listaTeclas.length) {
    const tecla = listaTeclas[i]
    const idInstrumento = `#som_${tecla.classList[1]}`
    tecla.onclick = function(){
        tocaSom(idInstrumento)
    }
    i =i+1
}