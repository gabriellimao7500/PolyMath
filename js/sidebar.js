const statistics = document.getElementById('statistics')
const exit = document.querySelector('.off')
const learn = document.getElementById('learn')

statistics.addEventListener("click", () => {
    setTimeout(ir,425)
    exit.classList.add('off-locate')
    function ir(){
        window.location.href = "html/statistics.html"
    }
})

console.log(exit)

learn.addEventListener("click", () => {
    setTimeout(ir,425)
    exit.classList.add('off-locate')
    function ir(){
        window.location.href = "../index.html"
    }
})