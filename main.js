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
    tecla.onkeydown = function(evento){
        if(evento.code == 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }

}