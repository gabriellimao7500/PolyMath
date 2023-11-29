const moduleOne = document.querySelector(".uncomplete-moduleOne")
const moduleTwo = document.querySelector(".uncomplete-moduleTwo")
const moduleThree = document.querySelector(".uncomplete-moduleThree")

const lineOne = document.querySelector(".line-one")
const lineTwo = document.querySelector(".line-two")

const One = document.querySelector(".One")

const Two = document.querySelector(".Two")
const Three = document.querySelector(".Three")

const teste = document.querySelector(".L-one")

var i = localStorage.getItem("AtuModulo")

if(isNaN == i || i == null){
    localStorage.setItem("AtuModulo",0);
    i = localStorage.getItem("AtuModulo");
}

var aulaCompleta = localStorage.getItem("aula")


if(aulaCompleta == 1){
    if(i == 1){
        var element = document.getElementById("One");
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(colorOne,1100)
        moduleOne.classList.toggle("complete-module")
        function colorOne(){
            moduleOne.classList.toggle("complete")
            lineOne.classList.toggle("line-on")
            lineOne.classList.toggle("line-full")
            i = 1
        }
    }
    if(i == 2){
        moduleOne.classList.toggle("complete")
        lineOne.classList.toggle("line-full")
    }
    if(i == 3){
        var element = document.getElementById("Two");
        moduleOne.classList.toggle("complete")
        lineOne.classList.toggle("line-full")
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(colorTwo,1100)
        moduleTwo.classList.toggle("complete-module")
        function colorTwo(){
            moduleTwo.classList.toggle("complete")
            lineTwo.classList.toggle("line-on")
            lineTwo.classList.toggle("line-full")
            i = 2
        }
    }
    if(i == 4){
        moduleOne.classList.toggle("complete")
        lineOne.classList.toggle("line-full")
        moduleTwo.classList.toggle("complete")
        lineTwo.classList.toggle("line-full")
    }
    if(i == 5){
        var element = document.getElementById("Three");
        moduleOne.classList.toggle("complete")
        lineOne.classList.toggle("line-full")
        lineTwo.classList.toggle("line-full")
        moduleTwo.classList.toggle("complete")
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(colorOne,1100)
        moduleThree.classList.toggle("complete-module")
        function colorOne(){
            moduleThree.classList.toggle("complete")
            lineOne.classList.toggle("line-on")
            lineOne.classList.toggle("line-full")
        }
    }
    if(i == 6){
        moduleOne.classList.toggle("complete")
        lineOne.classList.toggle("line-full")
        moduleTwo.classList.toggle("complete")
        lineTwo.classList.toggle("line-full")
        moduleThree.classList.toggle("complete")
    }
}

if(i == 1){
    localStorage.setItem("AtuModulo",2);
    i = localStorage.getItem("AtuModulo");     
}
if(i == 3){
    localStorage.setItem("AtuModulo",4);
    i = localStorage.getItem("AtuModulo");     
}
if(i == 5){
    localStorage.setItem("AtuModulo",6);
    i = localStorage.getItem("AtuModulo");     
}