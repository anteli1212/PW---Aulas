let num1, num2;

function Sortear1(){
    num1 = Math.floor(Math.random() * 6) + 1;

    const img = document.getElementById("dado1");
    img.src = (`img/dado${num1}.png`)

}

function Sortear2(){
    num2 = Math.floor(Math.random() * 6) + 1;

    const img = document.getElementById("dado2");
    img.src = (`img/dado${num2}.png`)

}

function Soma(){
    alert(`Soma dos dados: ${num1 + num2}`);
}