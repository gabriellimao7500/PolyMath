const aula1 = document.querySelector(".A1")
const aula2 = document.querySelector(".A2")
const aula3 = document.querySelector(".A3")
const aula4 = document.querySelector(".A4")
const aula5 = document.querySelector(".A5")
const aula6 = document.querySelector(".A6")
const aula7 = document.querySelector(".A7")
const aula8 = document.querySelector(".A8")
const aula9 = document.querySelector(".A9")

var aulaAtual = localStorage.getItem("aulaAtual");
if(isNaN == aulaAtual || aulaAtual == null){
    localStorage.setItem("aulaAtual",1);
    aulaAtual = localStorage.getItem("aulaAtual");
}


aula1.addEventListener("click", () => {
    if(aulaAtual > 0){
        localStorage.setItem("aulaAtual",1);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }

})
