function tocaSom(){
    document.querySelector('#som_tecla_pom').play()
}
const listaTeclas = document.querySelectorAll('.tecla')
let i = 0
while (i < listaTeclas.length) {
    listaTeclas[i].onclick = tocaSom
    i =i+1
}