function tocaSom(idTeclaSom){
    document.querySelector(idTeclaSom).play()
}

const listaTeclas = document.querySelectorAll('.tecla')
console.log(listaTeclas)

for(let i =0; i < listaTeclas.length; i++){

    const tecla = listaTeclas[i]
    const idInstrumento = `#som_${tecla.classList[1]}`
    
    tecla.onclick = function(){
        tocaSom(idInstrumento)
    }
    
}