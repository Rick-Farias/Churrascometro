let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let btnCalcular = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let carne = 400;
    let refri = 1000;
    let cerveja = 1200;

    if(duracao >= 6){
        carne = 650;
        refri = 1500;
        cerveja = 2000;
    }

    let carneTotal = carne * adultos+ (carne /2 * criancas);
    let refriTotal = refri * adultos + (refri /2 * criancas);
    let cervejaTotal = cerveja * adultos;
    
    resultado.innerHTML = `<p> ${carneTotal/1000} Kg de Carne </p>`;
    resultado.innerHTML += `<p> ${refriTotal/1000} Litros de Refrigerante </p>`;
    resultado.innerHTML += `<p> ${Math.ceil(cervejaTotal/355)} Latas de Cerveja </p>`;
})

