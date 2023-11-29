const aula1 = document.querySelector(".A1")
const aula2 = document.querySelector(".A2")
const aula3 = document.querySelector(".A3")
const aula4 = document.querySelector(".A4")
const aula5 = document.querySelector(".A5")
const aula6 = document.querySelector(".A6")
const aula7 = document.querySelector(".A7")
const aula8 = document.querySelector(".A8")
const aula9 = document.querySelector(".A9")

const icon1 = document.querySelector(".icon1")
const icon2 = document.querySelector(".icon2")
const icon3 = document.querySelector(".icon3")
const icon4 = document.querySelector(".icon4")
const icon5 = document.querySelector(".icon5")
const icon6 = document.querySelector(".icon6")
const icon7 = document.querySelector(".icon7")
const icon8 = document.querySelector(".icon8")
const icon9 = document.querySelector(".icon9")

var aulaAtual = localStorage.getItem("numAulaCompl");
if(isNaN == aulaAtual || aulaAtual == null || aulaAtual == 0){
    localStorage.setItem("numAulaCompl",1);
    aulaAtual = localStorage.getItem("numAulaCompl");
}
console.log(aulaAtual)
if(aulaAtual == 2){
    icon1.classList.add("complete-img")
    icon2.classList.add("learn-img")
    icon2.classList.remove("lock-img")
}
if(aulaAtual == 3){
    icon1.classList.add("complete-img")
    icon2.classList.add("complete-img")
    icon2.classList.remove("lock-img")
    icon3.classList.remove("lock-img")
    icon3.classList.add("learn-img")
}
if(aulaAtual == 4){
    icon1.classList.add("complete-img")
    icon2.classList.add("complete-img")
    icon2.classList.remove("lock-img")
    icon3.classList.add("complete-img")
    icon3.classList.remove("lock-img")
    icon4.classList.remove("lock-img")
    icon4.classList.add("learn-img")
}
if(aulaAtual == 5){
    icon1.classList.add("complete-img")
    icon2.classList.add("complete-img")
    icon2.classList.remove("lock-img")
    icon3.classList.add("complete-img")
    icon3.classList.remove("lock-img")
    icon4.classList.remove("lock-img")
    icon4.classList.add("complete-img")

    icon5.classList.remove("lock-img")
    icon5.classList.add("learn-img")
}
if(aulaAtual == 6){
    icon1.classList.add("complete-img")
    icon2.classList.add("complete-img")
    icon2.classList.remove("lock-img")
    icon3.classList.add("complete-img")
    icon3.classList.remove("lock-img")
    icon4.classList.remove("lock-img")
    icon4.classList.add("complete-img")
    icon5.classList.remove("lock-img")
    icon5.classList.add("complete-img")

    icon6.classList.remove("lock-img")
    icon6.classList.add("learn-img")
}
if(aulaAtual == 7){
    icon1.classList.add("complete-img")
    icon2.classList.add("complete-img")
    icon2.classList.remove("lock-img")
    icon3.classList.add("complete-img")
    icon3.classList.remove("lock-img")
    icon4.classList.remove("lock-img")
    icon4.classList.add("complete-img")
    icon5.classList.remove("lock-img")
    icon5.classList.add("complete-img")
    icon6.classList.remove("lock-img")
    icon6.classList.add("complete-img")

    icon7.classList.remove("lock-img")
    icon7.classList.add("learn-img")
}
if(aulaAtual == 8){
    icon1.classList.add("complete-img")
    icon2.classList.add("complete-img")
    icon2.classList.remove("lock-img")
    icon3.classList.add("complete-img")
    icon3.classList.remove("lock-img")
    icon4.classList.remove("lock-img")
    icon4.classList.add("complete-img")
    icon5.classList.remove("lock-img")
    icon5.classList.add("complete-img")
    icon6.classList.remove("lock-img")
    icon6.classList.add("complete-img")
    icon7.classList.remove("lock-img")
    icon7.classList.add("complete-img")

    icon8.classList.remove("lock-img")
    icon8.classList.add("learn-img")
}
if(aulaAtual == 9){
    icon1.classList.add("complete-img")
    icon2.classList.add("complete-img")
    icon2.classList.remove("lock-img")
    icon3.classList.add("complete-img")
    icon3.classList.remove("lock-img")
    icon4.classList.remove("lock-img")
    icon4.classList.add("complete-img")
    icon5.classList.remove("lock-img")
    icon5.classList.add("complete-img")
    icon6.classList.remove("lock-img")
    icon6.classList.add("complete-img")
    icon7.classList.remove("lock-img")
    icon7.classList.add("complete-img")
    icon8.classList.remove("lock-img")
    icon8.classList.add("complete-img")

    icon9.classList.remove("lock-img")
    icon9.classList.add("learn-img")
}
if(aulaAtual == 10){
    icon1.classList.add("complete-img")
    icon2.classList.add("complete-img")
    icon2.classList.remove("lock-img")
    icon3.classList.add("complete-img")
    icon3.classList.remove("lock-img")
    icon4.classList.remove("lock-img")
    icon4.classList.add("complete-img")
    icon5.classList.remove("lock-img")
    icon5.classList.add("complete-img")
    icon6.classList.remove("lock-img")
    icon6.classList.add("complete-img")
    icon7.classList.remove("lock-img")
    icon7.classList.add("complete-img")
    icon8.classList.remove("lock-img")
    icon8.classList.add("complete-img")
    icon9.classList.remove("lock-img")
    icon9.classList.add("complete-img")
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
