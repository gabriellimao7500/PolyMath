const aula1 = document.querySelector(".A1")
const aula2 = document.querySelector(".A2")
const aula3 = document.querySelector(".A3")
const aula4 = document.querySelector(".A4")
const aula5 = document.querySelector(".A5")
const aula6 = document.querySelector(".A6")
const aula7 = document.querySelector(".A7")
const aula8 = document.querySelector(".A8")
const aula9 = document.querySelector(".A9")


var aulaAtual = localStorage.getItem("numAulaCompl");
if(isNaN == aulaAtual || aulaAtual == null){
    localStorage.setItem("numAulaCompl",1);
    aulaAtual = localStorage.getItem("numAulaCompl");
}




aula1.addEventListener("click", () => {
    if(aulaAtual > 0){
        localStorage.setItem("aulaAtual",1);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }

})
aula2.addEventListener("click", () => {
    if(aulaAtual > 1){
        localStorage.setItem("aulaAtual",2);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }

})
aula3.addEventListener("click", () => {
    if(aulaAtual > 2){
        localStorage.setItem("aulaAtual",3);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }

})
aula4.addEventListener("click", () => {
    if(aulaAtual > 3){
        localStorage.setItem("aulaAtual",4);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }

})
aula5.addEventListener("click", () => {
    if(aulaAtual > 4){
        localStorage.setItem("aulaAtual",5);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }

})
aula6.addEventListener("click", () => {
    if(aulaAtual > 5){
        localStorage.setItem("aulaAtual",6);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }

})
aula7.addEventListener("click", () => {
    if(aulaAtual > 6){
        localStorage.setItem("aulaAtual",7);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }

})
aula8.addEventListener("click", () => {
    if(aulaAtual > 7){
        localStorage.setItem("aulaAtual",8);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }

})
aula9.addEventListener("click", () => {
    if(aulaAtual > 8){
        localStorage.setItem("aulaAtual",9);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }

})