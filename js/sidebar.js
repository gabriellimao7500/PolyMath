const statistics = document.getElementById('statistics')
const learn = document.querySelector('.learn')
const ranking = document.getElementById('ranking')
const perfil = document.getElementById('perfil')
const exit = document.querySelector('.off')


console.log(learn)

ranking.addEventListener("click", () => {
    setTimeout(irranking,400)
    exit.classList.add('off-locate')
    function irranking(){
        window.location.href = "ranking.html"
    }
})


perfil.addEventListener("click", () => {
    setTimeout(irperfil,400)
    exit.classList.add('off-locate')
    function irperfil(){
        window.location.href = "perfil.html"
    }
})

statistics.addEventListener("click", () => {
    setTimeout(irhome,400)
    exit.classList.add('off-locate')
    function irhome(){
        window.location.href = "statistics.html"
    }
})

learn.addEventListener("click", () => {
    setTimeout(ir,400)
    exit.classList.add('off-locate')
    function ir(){
        window.location.href = "main.html"
    }
})



