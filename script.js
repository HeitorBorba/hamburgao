let hamburguer = document.querySelector("#hamburguer");
let menu = document.querySelector("section");
let tracos = document.querySelectorAll("span");



function controlarMenu(){
    menu.classList.toggle("aparecerMenu");
    tracos[1].classList.toggle("sumirIgualTiro");
    tracos[0].classList.toggle("virarX1");
    tracos[2].classList.toggle("virarX2");
}

hamburguer.onclick = controlarMenu;

let botao = document.querySelector("button");{

function trocarcor(){
    botao.style.backgroundColor = 'green';
}

botao.onclick = trocarcor;
}

let senha = prompt("Digite a senha: ");
    if (senha == 'senha') {
        alert('Voce acertou');
    }
    else if(senha){
        alert('Voce ERROU!!!!')
    }

