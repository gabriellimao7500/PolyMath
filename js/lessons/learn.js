var aulaAtual = localStorage.getItem("numAulaCompl");
if(isNaN == aulaAtual || aulaAtual == null || aulaAtual == 0){
    localStorage.setItem("numAulaCompl",1);
    aulaAtual = localStorage.getItem("numAulaCompl");
}


function quiz1(){
    if(aulaAtual > 0){
        localStorage.setItem("aulaAtual",1);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }
}

function quiz2(){
    if(aulaAtual > 3){
        localStorage.setItem("aulaAtual",4);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }
}

function quiz3(){
    if(aulaAtual > 6){
        localStorage.setItem("aulaAtual",7);
        setTimeout(() => {
            window.location.href = "lesson.html"
        }, 200);
    }
}