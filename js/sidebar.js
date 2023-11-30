
const learn = document.querySelector('#main')
const exit = document.querySelector('.off')

console.log(learn)


function ranking() {
    setTimeout(irranking,400)
    exit.classList.add('off-locate')
    function irranking(){
        window.location.href = "ranking.html"
    }
}


function perfil() {
    setTimeout(irperfil,400)
    exit.classList.add('off-locate')
    function irperfil(){
        window.location.href = "perfil.html"
    }
}

statistics.addEventListener("click", () => {
    setTimeout(irhome,400)
    exit.classList.add('off-locate')
    function irhome(){
        window.location.href = "statistics.html"
    }
})
function main(){
    setTimeout(ir,400)
    exit.classList.add('off-locate')
    function ir(){
        window.location.href = "main.html"
    }
}





