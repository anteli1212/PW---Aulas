//#region Exercicio 1
function EntrarSistema(){
    const nome = document.getElementById("name1-input").value;

    alert(`Bem vindo ao sistema, ${nome}`);
}
//#endregion

//#region Exercicio 2
function NomeIdade(){
    const nome = document.getElementById("name2-input").value;
    const idade = parseInt(document.getElementById("idade1-input").value);

    alert(`${nome} tem ${idade} anos`);
}
//#endregion

//#region Exercicio 3
function PopulacaoMaior(){
    const popBrasil = parseInt(document.getElementById("brasil-input").value);
    const popChina = parseInt(document.getElementById("china-input").value);

    if(popBrasil > popChina){
        alert("Brasil tem a maior população");
    }
    else if(popChina > popBrasil){
        alert("China tem a maior população");
    }else{
        alert("Brasil e China possuem a mesma população");
    }
}
//#endregion

//#region Exercicio 4
function ParImpar(){
    const num = parseInt(document.getElementById("numero-input").value);

    if(num % 2 == 0){
        alert(`${num} é um número par`);
    }
    else{
        alert(`${num} é um número impar`);
    }
}
//#endregion

//#region Exercicio 5
function SalarioDesconto(){
    const sal = parseFloat(document.getElementById("salario-input").value);
    const desc = parseFloat(document.getElementById("desc-input").value);

    const valDesc = sal * (desc/100);

    const liq = sal - valDesc;

    alert(`Seu salário após o desconto: R$${liq}`);
}
//#endregion

//#region Exercicio 6
function Temperatura(){
    const tC = parseFloat(document.getElementById("celsius-input").value);

    const tF = (tC * 9/5) + 32;

    alert(`Temperatura em Fahrenheit: ${tF}°F`);
}
//#endregion

//#region Exercicio 7
function MaiorValor(){
    const valor1 = parseFloat(document.getElementById("val1-input").value);
    const valor2 = parseFloat(document.getElementById("val2-input").value);
    const valor3 = parseFloat(document.getElementById("val3-input").value);

    if(valor1 > valor2 && valor1 > valor3)
    {
        alert("O primeiro valor é o maior");
    }
    else if(valor2 > valor1 && valor2 > valor3){
        alert("O segundo valor é o maior");
    }
    else if (valor3 > valor1 && valor3 > valor2){
        alert("O terceiro valor é o maior");
    }
    else if(valor1 == valor2 && valor1 > valor3){
        alert("O primeiro e o segundo valor são os maiores");
    }
    else if(valor1 == valor3 && valor1 > valor2){
        alert("O primeiro e o terceiro valor são os maiores");
    }
    else if(valor2 == valor3 && valor2 > valor1){
        alert("O segundo e o terceiro valor são os maiores");
    }
    else{
        alert("Os três valores são iguais");
    }
}
//#endregion

//#region Exercicio 8
function AnoNascimento(){
    const ano = parseInt(document.getElementById("ano-input").value);
    const idade = parseInt(document.getElementById("idade2-input").value);

    const anoNascimento = ano - idade;

    alert(`Data de Nascimento: ${anoNascimento}`);
}
//#endregion

//#region Exercicio 9
function IMC(){
    const peso = parseFloat(document.getElementById("peso-input").value);
    const altura = parseFloat(document.getElementById("altura-input").value);

    const imc = (peso/(altura * altura)).toFixed(2);

    if (imc <= 16.9){
        alert(`Seu IMC é: ${imc}, portanto, se classifica como Muito Abaixo do Peso`);
    }
    else if(imc <= 18.9){
        alert(`Seu IMC é: ${imc}, portanto, se classifica como Abaixo do Peso`);
    }
    else if (imc <= 26.9){
        alert(`Seu IMC é: ${imc}, portanto, se classifica como Normal`);
    }
    else if (imc < 31.9){
        alert(`Seu IMC é: ${imc}, portanto, se classifica como Acima do Peso`);
    }
    else{
        alert(`Seu IMC é: ${imc}, portanto, se classifica como Obesidade`);
    }
}
//#endregion

//#region Exercicio 10
function MediaNota(){
    const nota1 = parseFloat(document.getElementById("nota1-input").value);
    const nota2 = parseFloat(document.getElementById("nota2-input").value);
    const nota3 = parseFloat(document.getElementById("nota3-input").value);
    const nota4 = parseFloat(document.getElementById("nota4-input").value);

    const media = ((nota1 + nota2 + nota3 + nota4)/4).toFixed(1);

    if (media >= 7){
        alert(`Sua média foi igual a ${media}, portanto, você foi aprovado!`)
    } 
    else if (media >= 5){
        alert(`Sua média foi igual a ${media}, portanto, você etá de recuperação`)
    } 
    else{
        alert(`Sua média foi igual a ${media}, portanto, você foi reprovado!`)
    }

}
//#endregion