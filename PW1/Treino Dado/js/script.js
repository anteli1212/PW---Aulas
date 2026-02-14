let dado1, dado2;

function Sortear1(){
    dado1 = Math.floor(Math.random() * 6) + 1;

    const dadoImg = document.getElementById("dado1");

    dadoImg.src = `/img/dado${dado1}.png`
}

function Sortear2(){
    dado2 = Math.floor(Math.random() * 6) + 1;

    const dadoImg = document.getElementById("dado2");

    dadoImg.src = `/img/dado${dado2}.png`
}

function Somar(){
    const soma = dado1 + dado2;
    

    alert(`Soma é igual a ${soma}`);
}