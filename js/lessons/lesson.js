var aulaAtual = 9/*localStorage.getItem(aulaAtual);
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
            resp.innerHTML = "Considere a função f(x) = 5x. Ela é crescente ou decrescente?"; //pergunta

            res1.innerHTML = "Crescente";  //resposta certa

            res2.innerHTML = "Decrescente";  //resposta errada

            res3.classList.toggle("none")

            res4.classList.toggle("none")

            res5.classList.toggle("none")

            res6.classList.toggle("none")

        }
        if(quest == 2){
            resp.innerHTML = "Vamos analisar a função g(x) = -2x. Ela é crescente ou decrescente?"; //pergunta

            res1.innerHTML = "Crescente";  //resposta errada

            res2.innerHTML = "Decrescente";  //resposta certa

        }
        if(quest == 3){
            resp.innerHTML = "Qual é o coeficiente angular da função h(x) = 3x, Ela é crescente ou decrescente?"; //pergunta

            res1.innerHTML = "Crescente";  //resposta certa

            res2.innerHTML = "Decrescente";  //resposta errada

        }
        if(quest == 4){
            resp.innerHTML = "Considere a função k(x) = 4x. Ela é crescente ou decrescente?"; //pergunta

            res1.innerHTML = "Crescente";  //resposta errada

            res2.innerHTML = "Decrescente";  //resposta certa

        }
        if(quest == 5){
            resp.innerHTML = "Determine se a função m(x) = x é crescente ou decrescente."; //pergunta

            res1.innerHTML = "Crescente";  //resposta certa

            res2.innerHTML = "Decrescente";  //resposta errada
        }
    }
    if(quest == 6){
        localStorage.setItem("AtuModulo",1);
        setTimeout(() => {
            window.location.href = "main.html"
        }, 50);
    }
}

if(aulaAtual == 2){
    verify()
    function verify(){
        if(quest == 1){
            resp.innerHTML = "Considere a função f(x) = 5x. Ela é crescente ou decrescente?"; //pergunta

            res1.innerHTML = "f(x) = ax² + b, onde a e b são números reais dados e a ≠ 0.";  //resposta errada

            res2.innerHTML = "f(x) = 1/x + b, onde b é um número real dado.";  //resposta errada

            res3.innerHTML = "f(x) = aeˣ + b, onde a e b são números reais dados e a ≠ 0.";  //resposta errada

            res4.innerHTML = "f(x) = ax + b, onde a e b são números reais dados e a ≠ 0. ";  //resposta certa

            res5.innerHTML = "f(x) = √(ax + b), onde a e b são números reais dados e a ≠ 0.";  //resposta errada

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada
        }
        if(quest == 2){
            resp.innerHTML = "Qual das seguintes opções descreve corretamente uma função linear?"; //pergunta

            res1.innerHTML = "f(x) = ax² + b, onde a e b são números reais dados.";  //resposta errada

            res2.innerHTML = "f(x) = 1/x + b, onde b é um número real dado.";  //resposta errada

            res3.innerHTML = "f(x) = aeˣ + b, onde a e b são números reais dados.";  //resposta errada

            res4.innerHTML = "f(x) = √(ax + b), onde a e b são números reais dados.";  //resposta errada

            res5.innerHTML = "f(x) = ax, onde a é um número real dado.";  //resposta certa

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada

        }
        if(quest == 3){
            resp.innerHTML = "Qual dessas funções é uma função linear?"; //pergunta

            res1.innerHTML = "f(x) = 2x² + 3";  //resposta errada

            res2.innerHTML = "f(x) = x";  //resposta certa

            res3.innerHTML = "f(x) = 3eˣ - 1";  //resposta errada

            res4.innerHTML = "f(x) = 4x + 7";  //resposta errada

            res5.innerHTML = "f(x) = √(2x + 1)";  //resposta errada

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada

        }
        if(quest == 4){
            resp.innerHTML = "Qual é o coeficiente angular da função h(x) = 3x, Ela é crescente ou decrescente?"; //pergunta

            res1.innerHTML = "Crescente";  //resposta certa

            res2.innerHTML = "Decrescente";  //resposta errada

            
            res3.classList.toggle("none")

            res4.classList.toggle("none")

            res5.classList.toggle("none")

            res6.classList.toggle("none")

        }
        if(quest == 5){
            resp.innerHTML = "Uma função afim pode ser crescente, decrescente ou constante. A função é classificada como constante se:"; //pergunta

            res1.innerHTML = "O seu coeficiente angular for um número maior que 0.";  //resposta errada

            res2.innerHTML = "O seu coeficiente angular for exatamente igual a 0.";  //resposta certa

            res3.innerHTML = "O seu coeficiente angular for menor que 0.";  //resposta errada

            res4.innerHTML = "O seu coeficiente angular for igual a 1.";  //resposta errada

            res5.innerHTML = "O seu coeficiente angular for um número entre 0 e 1.";  //resposta errada

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada

        }
        
    }
}

if(aulaAtual == 3){
    verify()
    function verify(){
        if(quest == 1){
            resp.innerHTML = "Considere a função k(x) = -4x. Ela é crescente ou decrescente?"; //pergunta

            res1.innerHTML = "Crescente";  //resposta errada

            res2.innerHTML = "Decrescente";  //resposta certa

            
            res3.classList.toggle("none")

            res4.classList.toggle("none")

            res5.classList.toggle("none")

            res6.classList.toggle("none")
        }
        if(quest == 2){
            resp.innerHTML = "Qual dessas funções é uma função linear?"; // pergunta

            res1.innerHTML = "f(x) = 2x² + 3"; // resposta errada
        
            res2.innerHTML = "f(x) = x"; // resposta certa
        
            res3.innerHTML = "f(x) = 3eˣ - 1"; // resposta errada
        
            res4.innerHTML = "f(x) = 4x + 7"; // resposta errada
        
            res5.innerHTML = "f(x) = √(2x + 1)"; // resposta errada

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada

        }
        if(quest == 3){
            resp.innerHTML = "A função onde y = x, seu tipo é:"; // pergunta

            res1.innerHTML = "Função Identidade"; // resposta certa
        
            res2.innerHTML = "Função Constante"; // resposta errada
        
            res3.innerHTML = "Função Quadrática"; // resposta errada
        
            res4.innerHTML = "Função do segundo grau"; // resposta errada
        
            res5.innerHTML = "Função do terceiro grau"; // resposta errada

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada

        }
        if(quest == 4){
            resp.innerHTML = "Qual das seguintes opções descreve corretamente uma função afim?"; // pergunta

            res1.innerHTML = "f(x) = ax² + b, onde a e b são números reais dados e a ≠ 0."; // resposta errada
        
            res2.innerHTML = "f(x) = 1/x + b, onde b é um número real dado."; // resposta errada
        
            res3.innerHTML = "f(x) = aeˣ + b, onde a e b são números reais dados e a ≠ 0."; // resposta errada
        
            res4.innerHTML = "f(x) = ax + b, onde a e b são números reais dados e a ≠ 0."; // resposta certa
        
            res5.innerHTML = "f(x) = √(ax + b), onde a e b são números reais dados e a ≠ 0."; // resposta errada
        
            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada

        }
        if(quest == 5){
            resp.innerHTML = "Agora, vamos analisar a função g(x) = 2x. Ela é crescente ou decrescente?"; // pergunta

            res1.innerHTML = "Crescente"; // resposta certa
        
            res2.innerHTML = "Decrescente"; // resposta errada
        
            // Ocultando as opções irrelevantes
            res3.classList.toggle("none");
            res4.classList.toggle("none");
            res5.classList.toggle("none");
            res6.classList.toggle("none");

        }
        if(quest == 6){
            localStorage.setItem("aula",1)
            localStorage.setItem("AtuModulo",1);
            setTimeout(() => {
                window.location.href = "main.html"
            }, 50);
        }
    }
}

if(aulaAtual == 4){
    verify()
    function verify(){
        if(quest == 1){
            resp.innerHTML = "Calcule: |-3 + 1|"; // pergunta

            res1.innerHTML = "1"; // resposta errada

            res2.innerHTML = "-2"; // resposta errada
        
            res3.innerHTML = "2"; // resposta certa
        
            res4.innerHTML = "-1"; // resposta errada
        
            res5.innerHTML = "3"; // resposta errada

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada
        }
        if(quest == 2){
            resp.innerHTML = "Calcule: |-8 - 2|"; // pergunta

            res1.innerHTML = "-10"; // resposta errada
        
            res2.innerHTML = "8"; // resposta errada
        
            res3.innerHTML = "10"; // resposta certa
        
            res4.innerHTML = "16"; // resposta errada
        
            res5.innerHTML = "-16"; // resposta errada

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada

        }
        if(quest == 3){
            resp.innerHTML = "Calcule: |-20| - |2|"; // pergunta

            res1.innerHTML = "-40"; // resposta errada
        
            res2.innerHTML = "-18"; // resposta errada
        
            res3.innerHTML = "40"; // resposta errada
        
            res4.innerHTML = "20"; // resposta errada
        
            res5.innerHTML = "18"; // resposta certa

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada
        }
        if(quest == 4){
            resp.innerHTML = "Calcule: |-101| - |-10|"; // pergunta

            res1.innerHTML = "93"; // resposta errada
        
            res2.innerHTML = "-93"; // resposta errada
        
            res3.innerHTML = "91"; // resposta certa
        
            res4.innerHTML = "100"; // resposta errada
        
            res5.innerHTML = "-90"; // resposta errada
        
            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada
        }
        if(quest == 5){
            resp.innerHTML = "Calcule: 29 + |-21|"; // pergunta

            res1.innerHTML = "50"; // resposta certa
        
            res2.innerHTML = "29"; // resposta errada
        
            res3.innerHTML = "21"; // resposta errada
        
            res4.innerHTML = "-21"; // resposta errada
        
            res5.innerHTML = "-49"; // resposta errada

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada
        }
    }
}

if(aulaAtual == 5){
    verify()
    function verify(){
        if(quest == 1){
            resp.innerHTML = "Em qual quadrante a função f(x) = |x-3| + 2 está localizada?"; // pergunta

            res1.innerHTML = "Origem"; // resposta errada
        
            res2.innerHTML = "1º Quadrante"; // resposta certa
        
            res3.innerHTML = "2º Quadrante"; // resposta errada
        
            res4.innerHTML = "3º Quadrante"; // resposta errada
        
            res5.innerHTML = "4º Quadrante"; // resposta errada

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada
        }
        if(quest == 2){
            resp.innerHTML = "Em qual quadrante a função f(x) = |x+25| + 6 está localizada?"; // pergunta

            res1.innerHTML = "Origem"; // resposta errada
        
            res2.innerHTML = "1º Quadrante"; // resposta errada
        
            res3.innerHTML = "2º Quadrante"; // resposta certa
        
            res4.innerHTML = "3º Quadrante"; // resposta errada
        
            res5.innerHTML = "4º Quadrante"; // resposta errada

        }
        if(quest == 3){
            resp.innerHTML = "Em qual quadrante a função f(x) = |x-21| + 11 está localizada?"; // pergunta

            res1.innerHTML = "Origem"; // resposta errada
        
            res2.innerHTML = "1º Quadrante"; // resposta certa
        
            res3.innerHTML = "2º Quadrante"; // resposta errada
        
            res4.innerHTML = "3º Quadrante"; // resposta errada
        
            res5.innerHTML = "4º Quadrante"; // resposta errada
        }
        if(quest == 4){
            resp.innerHTML = "Em qual quadrante a função f(x) = |x| está localizada?"; // pergunta

            res1.innerHTML = "Origem"; // resposta certa
        
            res2.innerHTML = "1º Quadrante"; // resposta errada
        
            res3.innerHTML = "2º Quadrante"; // resposta errada
        
            res4.innerHTML = "3º Quadrante"; // resposta errada
        
            res5.innerHTML = "4º Quadrante"; // resposta errada
        
            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada
        }
        if(quest == 5){
            resp.innerHTML = "Em qual quadrante a função f(x) = |x-21| - 33 está localizada?"; // pergunta

            res1.innerHTML = "Origem"; // resposta errada
        
            res2.innerHTML = "1º Quadrante"; // resposta errada
        
            res3.innerHTML = "2º Quadrante"; // resposta errada
        
            res4.innerHTML = "3º Quadrante"; // resposta errada
        
            res5.innerHTML = "4º Quadrante"; // resposta certa

            res6.innerHTML = "Nenhuma das alternativas";  //resposta errada
        }
    }
}
if(aulaAtual == 6){
    verify()
    function verify(){
        if(quest == 1){
            resp.innerHTML = "Determinar∣2 x-7∣=3."; //pergunta

            res1.innerHTML = "x=5";  //resposta errada

            res2.innerHTML = "x=4";  //resposta errada

            res3.innerHTML = "x=2";  //resposta certa

            res4.innerHTML = "x=7";  //resposta errada

            res5.innerHTML = "x=9";  //resposta errada

            res6.innerHTML = "x=14";  //resposta errada

        }

        if(quest == 2){
            resp.innerHTML = "Resolver∣3 x+1∣=5."; //pergunta

            res1.innerHTML = "x=2";  //resposta errada

            res2.innerHTML = "x=− 2";  //resposta certa

            res3.innerHTML = "x=1";  //resposta errada

            res4.innerHTML = "x=− 1";  //resposta errada

            res5.innerHTML = "x=9";  //resposta errada

            res6.innerHTML = "x=14";  //resposta errada

        }

        if(quest == 3){
            resp.innerHTML = "resolva a pesquisa∣2 x-3∣=1."; //pergunta

            res1.innerHTML = "x=2";  

            res2.innerHTML = "x=− 2";  

            res3.innerHTML = "x=-1";  

            res4.innerHTML = "x=1";  

            res5.innerHTML = "x=9";  

            res6.innerHTML = "x=14";  

        }

        if(quest == 4){
            resp.innerHTML = "Determine as soluções da solução∣3 x-2∣=4."; //pergunta

            res1.innerHTML = "x=2";  

            res2.innerHTML = "x=− 2";  

            res3.innerHTML = "x=-1";  

            res4.innerHTML = "x=1";  

            res5.innerHTML = "x=9";  

            res6.innerHTML = "x=14";  

        }

        if(quest == 5){
            resp.innerHTML = "Determine todas as soluções de∣2 z-1∣=3."; //pergunta

            res1.innerHTML = "z=-2";  

            res2.innerHTML = "z=2";  

            res3.innerHTML = "z=-1";  

            res4.innerHTML = "z=1";  

            res5.innerHTML = "z=9";  

            res6.innerHTML = "z=14";  

        }
        if(quest == 6){
            localStorage.setItem("aula",1)
            localStorage.setItem("AtuModulo",3);
            setTimeout(() => {
                window.location.href = "main.html"
            }, 50);
        }
    }
}

//modulo 3

if(aulaAtual == 7){
    verify()
    function verify(){
        if(quest == 1){
            resp.innerHTML = "Identifique, nas alternativas a seguir, a função do 2° grau crescente. "; //pergunta

            res1.innerHTML = " f(x) = - 3x² 2 – 6x + 1";  

            res2.innerHTML = "f(x) = 2x²  + 1";  

            res3.innerHTML = "f(x) = – 5 + 4x - x²";  

            res4.innerHTML = "f(x) = 7x² 2 – 2x";  

            res5.classList.toggle("none");  

            res6.classList.toggle("none");  

        }

        if(quest == 2){
            resp.innerHTML = "A soma das raízes da função quadrática f(x) = x2²  – 4x – 5 é:"; //pergunta

            res1.innerHTML = "x=2";  

            res2.innerHTML = "x=4";  

            res3.innerHTML = "x=1";  

            res4.innerHTML = "x=− 1";  

            res5.innerHTML = "x=9";  

            res6.innerHTML = "x=14";  

        }

        if(quest == 3){
            resp.innerHTML = "A função f(x) = – 3x² 2 + 12x – 9 é uma função do segundo grau. Das alternativas abaixo, qual é a que resulta da diferença entre as duas raízes da função?"; //pergunta

            res1.innerHTML = "2";  

            res2.innerHTML = "24";  

            res3.innerHTML = "28";  

            res4.innerHTML = "12";  

            res5.innerHTML = "10";  

            res6.innerHTML = "6";  

        }

        if(quest == 4){
            resp.innerHTML = "As raízes da equação 2x² 2 + bx + c = 0 são 3 e − 4. Nesse caso, o valor de b - c é"; //pergunta

            res1.innerHTML = "34";  

            res2.innerHTML = "31";  

            res3.innerHTML = "28";  

            res4.innerHTML = "14";  

            res5.innerHTML = "21";  

            res6.innerHTML = "26";  

        }

        if(quest == 5){
            resp.innerHTML = "Para quais valores f(x) = -x²  2 + 4x é positiva"; //pergunta

            res1.innerHTML = "para 0< x < 4.";  

            res2.innerHTML = "para x 4.";  

            res3.innerHTML = "para x < 0.";  

            res4.innerHTML = "para x < 4";  

            res5.innerHTML = "para x > 0.";  

            res6.innerHTML = "para x 5.";  

        }
    }
}

if(aulaAtual == 8){
    verify()
    function verify(){
        if(quest == 1){
            resp.innerHTML = "O gerente de uma Academia observou que o lucro (L) de sua empresa dependia da quantidade de clientes (x) que frequentava diariamente. Analisando matematicamente a situação estabeleceu a seguinte função: L(x) =  x² + 54x – 500. A partir da função, o lucro obtido em um mês em que a Academia recebeu 40 clientes foi igual a: "; //pergunta

            res1.innerHTML = "R$ 2.160,00.";  

            res2.innerHTML = "R$ 2.460.00.";  

            res3.innerHTML = "R$ 3.260,00.";  

            res4.innerHTML = "R$ 6.116,00.";  

            res5.classList.toggle("none");  

            res6.classList.toggle("none");  

        }

        if(quest == 2){
            resp.innerHTML = "O produto das raízes da equação 3x² 2 + 10x + 3 = 0 é igual a:"; //pergunta

            res1.innerHTML = "2";  

            res2.innerHTML = "4";  

            res3.innerHTML = "-1";  

            res4.innerHTML = " 1";  

            res5.innerHTML = "9";  

            res6.innerHTML = "14";  

        }

        if(quest == 3){
            resp.innerHTML = ". Pedro lançou uma bola no ar e observou que sua altura em relação ao tempo pode ser descrita pela função f(x) = - 5x² + 2x + 12, onde f(x) representa a altura em metros e x representa o tempo em segundos. Qual é a altura máxima que a bola atinge durante seu movimento?"; //pergunta

            res1.innerHTML = "33 metros.";  

            res2.innerHTML = "25 metros.";  

            res3.innerHTML = "20 metros.";  

            res4.innerHTML = "15,7 metros";  

            res5.innerHTML = "12,2 metros.";  

            res6.innerHTML = "15 metros";  

        }

        if(quest == 4){
            resp.innerHTML = "Considere a função f(x) = x² + 2 x + k. Encontre o valor real de k de modo que f(x) tenha o valor mínimo da função igual a -1."; //pergunta

            res1.innerHTML = "k = 0";  

            res2.innerHTML = "k = -1";  

            res3.innerHTML = "k = 2";  

            res4.innerHTML = "k = -2";  

            res5.innerHTML = "k = 4";  

            res6.innerHTML = "k = 5";  

        }

        if(quest == 5){
            resp.innerHTML = "Sobre as funções, julgue as afirmativas a seguir: I – O gráfico de uma função polinomial do 2º grau é sempre uma reta; II – O f(−2) da função f(x) = 3x² 3 − 4x 2 − 8 / x é igual a −36; III – 5 é uma das raízes da função f(x) = x 2² − 7x + 10; Analisando as afirmativas, podemos afirmar que:"; //pergunta

            res1.innerHTML = "Somente I é verdadeira.";  

            res2.innerHTML = "I e II são verdadeiras. ";  

            res3.innerHTML = "II e III são verdadeiras.";  

            res4.innerHTML = "Todas são falsas.";  

            res5.classList.toggle("none");  

            res6.classList.toggle("none");  

        }
    }
}

if(aulaAtual == 9){
    verify()
    function verify(){
        if(quest == 1){
            resp.innerHTML = ". A soma das raízes da equação 3²x2 + 12x – 18 = 0 é "; //pergunta

            res1.innerHTML = "–4.";  

            res2.innerHTML = "–3.";  

            res3.innerHTML = "0.";  

            res4.innerHTML = "3.";  

            res5.innerHTML = "9";  

            res6.innerHTML = "14";  

        }

        if(quest == 2){
            resp.innerHTML = "Considere x e y dois números reais, sendo que x < y, |x - y| = 1 e x² + y² = 3. Sendo x um número positivo, então o valor de x é"; //pergunta

            res1.innerHTML = "- 1/2 - √5/2";  

            res2.innerHTML = "-1/2 + √5/2";  

            res3.innerHTML = "-1 + √5";  

            res4.innerHTML = "-1 - √5";  

            res5.classList.toggle("none");  

            res6.classList.toggle("none");  

        }

        if(quest == 3){
            resp.innerHTML = "Assinale a alternativa que apresenta a maior solução da equação x² + 2x - 15 = 0"; //pergunta

            res1.innerHTML = "5";  

            res2.innerHTML = "4";  

            res3.innerHTML = "3";  

            res4.innerHTML = "9";  

            res5.innerHTML = "10";  

            res6.innerHTML = "15";  

        }

        if(quest == 4){
            resp.innerHTML = "Determine os pontos de intersecção da parábola da função f(x) = x² - 2x + 1, com o eixo das abscissas: "; //pergunta

            res1.innerHTML = "x = -5 e y = 5.";  

            res2.innerHTML = "x = 1 e y = 0.";  

            res3.innerHTML = "x = 1 e y = 2.";  

            res4.innerHTML = "x = 0 e y = 0";  

            res5.classList.toggle("none");  

            res6.classList.toggle("none");  

        }

        if(quest == 5){
            resp.innerHTML = "Os pontos P e Q constituem a interseção dos gráficos das funções reais de variável real, f e g, definidas por f(x) = x + 1 e g(x) = x² – 4x – 5. Nessas condições, a equação da circunferência na qual o segmento de reta PQ é um diâmetro é "; //pergunta

            res1.innerHTML = "x² + 5x + y² + 7y – 6 = 0.";  

            res2.innerHTML = "x² + 7x + y² – 5y – 6 = 0.";  

            res3.innerHTML = "x² – 5x + y² – 7y – 6 = 0.";  

            res4.innerHTML = "x² + 7x + y² + 5y – 6 = 0.";  

            res5.classList.toggle("none");  

            res6.classList.toggle("none");  

        }
        if(quest == 6){
            localStorage.setItem("aula",1)
            localStorage.setItem("AtuModulo",5);
            setTimeout(() => {
                window.location.href = "main.html"
            }, 50);
        }
    }
}


res1.addEventListener("click", () => {
    if(aulaAtual == 1 & quest == 1 || aulaAtual == 1 & quest == 3 || aulaAtual == 1 & quest == 5 || aulaAtual == 2 & quest == 4 || aulaAtual == 3 & quest == 3 || aulaAtual == 3 & quest == 5 || aulaAtual == 4 & quest == 5 || aulaAtual == 5 & quest == 4 || aulaAtual == 6 & quest == 5 || aulaAtual == 7 & quest == 3 || aulaAtual == 9 & quest == 1 ){
        quest ++
        verify()
        correct()
    }else{
        quest ++
        verify()
        incorrect()
    }

})

res2.addEventListener("click", () => {
    if(aulaAtual == 1 & quest == 2  || aulaAtual == 1 & quest == 4 || aulaAtual == 2 & quest == 3 || aulaAtual == 2 & quest == 5 || aulaAtual == 3 & quest == 1 || aulaAtual == 3 & quest == 2 || aulaAtual == 5 & quest == 1 || aulaAtual == 5 & quest == 3 || aulaAtual == 6 & quest == 2 ||aulaAtual == 7 & quest == 1 || aulaAtual == 7 & quest == 2 || aulaAtual == 8 & quest == 4 || aulaAtual == 9 & quest == 4 ){
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
    if(aulaAtual == 4 & quest == 1 || aulaAtual == 4 & quest == 2 || aulaAtual == 4 & quest == 4 || aulaAtual == 5 & quest == 2 || aulaAtual == 6 & quest == 1 || aulaAtual == 6 & quest == 4 || aulaAtual == 8 & quest == 1 || aulaAtual == 8 & quest == 5 || aulaAtual == 9 & quest == 3 ){
        quest ++
        verify()
        correct()
    }else{
        quest ++
        verify()
        incorrect()
    }

})

res4.addEventListener("click", () => {
    if(aulaAtual == 2 & quest == 1 || aulaAtual == 3 & quest == 4 || aulaAtual == 6 & quest == 3 || aulaAtual == 8 & quest == 2 || aulaAtual == 8 & quest == 3 || aulaAtual == 9 & quest == 2 || aulaAtual == 9 & quest == 5 ){
        quest ++
        verify()
        correct()
    }else{
        quest ++
        verify()
        incorrect()
    }

})

res5.addEventListener("click", () => {
    if(aulaAtual == 2 & quest == 2 || aulaAtual == 4 & quest == 3 || aulaAtual == 5 & quest == 5 || aulaAtual == 7 & quest == 5){
        quest ++
        verify()
        correct()
    }else{
        quest ++
        verify()
        incorrect()
    }

})

res6.addEventListener("click", () => {
    if(aulaAtual == 7 & quest == 4){
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
        localStorage.setItem("point",respCerto)
    }
}

function incorrect(){
    const bar = document.createElement('div')
    bar.className = 'progress'
    container.appendChild(bar)
    respCerto -= 20
    localStorage.setItem("point",respCerto)
    setTimeout(() => {
        bar.classList.add('wrong')
    }, 0.2);
}