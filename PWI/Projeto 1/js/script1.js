
//#region Primeiro Formulario
function Alerta(){

    const nome = document.getElementById("input-nome").value;
    const idade = document.getElementById("input-idade").value;

    alert(`${nome} possui ${idade} anos`);
}
//#endregion

//#region Salario Contemplado
function CompraSalario(){

    const p1 = parseFloat(document.getElementById("input-p1").value);
    const p2 = parseFloat(document.getElementById("input-p2").value);

    const rf = p1 + p2;

    if (rf > 6000){
        alert("Contemplados");
    }
    else if (rf > 3000){
        alert("Passar por teste");
    }
    else{
        alert("Não podem participar");
    }
}
//#endregion


//#region Compra Computador

function Comprar()
{
    const dinheiro = parseFloat(document.getElementById("dinheiro").value);
    const preco = parseFloat(document.getElementById("preco").value)
    const resto = dinheiro - preco;

    if (dinheiro >= preco){
        alert(`Item comprado! Dinheiro Atual: ${resto}`)
    }
    else{
        alert(`Que pena, você não tem dinheiro suficiente :/. Adquira mais R$${resto * -1}`)
    }
}

//#endregion

//#region Calculadora

function Calc(conta){

    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado;

    if (conta == "Sum"){
        resultado = numero1 + numero2;

    } else if(conta == "Sub"){
        resultado = numero1 - numero2;

    } else if(conta == "Mul"){
        resultado = numero1 * numero2;

    } else if(conta == "Div"){
        resultado = numero1 / numero2;
        
    } else if(conta == "Pow"){
        resultado = numero1 ** numero2;
            
    } else if(conta == "Res"){
        resultado = numero1 % numero2;

    }

    document.getElementById("resultado").value = resultado;

}
//#endregion
