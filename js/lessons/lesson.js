var aulaAtual = 1/*localStorage.getItem(aulaAtual);
if(isNaN == aulaAtual || aulaAtual == null){
    localStorage.setItem(aulaAtual,1);
    aulaAtual = localStorage.getItem(aulaAtual);
}
*/



const res1 = document.querySelector(".op1")
const res2 = document.querySelector(".op2")
const res3 = document.querySelector(".op3")
const res4 = document.querySelector(".op4")
const res5 = document.querySelector(".op5")
const res6 = document.querySelector(".op6")

var quest = 1;

const resp = document.querySelector(".ask");
const container = document.querySelector(".progressbar")

if(aulaAtual == 1){
    verify()
    function verify(){
        if(quest == 1){
            resp.innerHTML = "quanto é 7 - 5 ?"; //pergunta

            res1.innerHTML = "6";  //resposta errada

            res2.innerHTML = "5";  //resposta errada

            res3.innerHTML = "2";  //resposta certa

            res4.innerHTML = "4";  //resposta errada

            res5.innerHTML = "12";  //resposta errada

            res6.innerHTML = "99";  //resposta errada

        }
        if(quest == 2){
            resp.innerHTML = "quanto é 2 + 4 ?"; //pergunta

            res1.innerHTML = "6";  //resposta certa

            res2.innerHTML = "1";  //resposta errada

            
            res3.classList.toggle("none")

            res4.classList.toggle("none")

            res5.classList.toggle("none")

            res6.classList.toggle("none")

        }
        if(quest == 3){

            res3.classList.toggle("none")

            res4.classList.toggle("none")

            res5.classList.toggle("none")

            res6.classList.toggle("none")

            resp.innerHTML = "quanto é 5 + 5 ?"; //pergunta

            res1.innerHTML = "6";  //resposta errada

            res2.innerHTML = "5";  //resposta errada

            res3.innerHTML = "10";  //resposta certa

            res4.innerHTML = "4";  //resposta errada

            res5.innerHTML = "12";  //resposta errada

            res6.innerHTML = "99";  //resposta errada

        }
    }
}

res1.addEventListener("click", () => {
    if(aulaAtual == 1 & quest == 2){
        quest ++
        verify()
        correct()
    }else{
        quest ++
        verify()
        incorrect()
    }
})



res3.addEventListener("click", () => {
    if(aulaAtual == 1 & quest == 3 || aulaAtual == 1 & quest == 1){
        quest ++
        verify()
        correct()
    }else{
        quest ++
        verify()
        incorrect()
    }

})

var respCerto = 100;

function correct(){
    const bar = document.createElement('div')
    bar.className = 'progress'
    container.appendChild(bar)
    setTimeout(() => {
        bar.classList.add('right')
    }, 0.2);
    if(respCerto < 150){
        respCerto += 25
    }
}

function incorrect(){
    const bar = document.createElement('div')
    bar.className = 'progress'
    container.appendChild(bar)
    respCerto -= 25
    setTimeout(() => {
        bar.classList.add('wrong')
    }, 0.2);
}