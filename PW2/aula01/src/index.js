console.log("Hello World");

//const readline = require('readline'); //Importa o módulo readline para ler entradas do usuário --> Forma antiga de importar módulos

import readline from 'readline'; //Importa o módulo readline para ler entradas do usuário

const rl = readline.createInterface({
  input: process.stdin, //Define a entrada como o fluxo de entrada padrão (teclado)
  output: process.stdout //Define a saída como o fluxo de saída padrão (console)
});

function perguntar(question){
    return new Promise((resolve) => {
        rl.question(question, (resposta) => resolve(resposta));
    });
}

async function CalcularIMC(){
  const peso = parseFloat(await perguntar("Digite seu peso (kg): "));
  const altura = parseFloat(await perguntar("Digite sua altura (m): "));

  const imc = peso / (altura * altura);

  if(imc < 16.9){
    console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é: "Muito abaixo do peso"`);
  } else if(imc >= 17 && imc <= 18.9){
    console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é: "Aabaixo do peso"`);
  } else if(imc >= 19 && imc <= 26.9){
    console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é: "Normal"`);
  } else if(imc >= 27 && imc <= 31.9){
    console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é: "Acima do peso"`);
  } else{
    console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é: "Obesidade"`);
  }
}

CalcularIMC();