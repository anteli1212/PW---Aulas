import {promises as fs} from 'fs';

async function PegaDados(){
    const dados = JSON.parse(await fs.readFile("./src/people.json"));

    return dados;
}

async function ExemploForeach(){
    const dados = await PegaDados();

    dados.forEach((item) => {
        console.log(`--------------\nNome: ${item.name.first} \nEmail: ${item.email}`);
    })
}

async function ExemploMap(){
    const dados = await PegaDados();

    const novoArray = dados.map((item) => {
        return {
            "nomeCompleto": `${item.name.first} ${item.name.last}`,
            "email": item.email,
            "idade": item.dob.age,
        };
    })

    console.log(novoArray);
}

async function ExemploFilter(){
    const dados = await PegaDados();

    const idosos = dados.filter((item) => {
        return item.dob.age >= 60 && item.gender === "male";

    }).map((item) => {
        return {
            "nomeCompleto": `${item.name.first} ${item.name.last}`,
            "email": item.email,
            "idade": item.dob.age,
        };
    })

    console.log(idosos);
}

async function ExemploFind(){
    const dados = await PegaDados();

    const encontrado = dados.find((item) => {
        return item.gender === "male";
    })

    console.log(encontrado);
}

async function ExemploEvery(){
    const dados = await PegaDados();

    const todosIguais = dados.every((item) => {
        return item.nat === "BR";
    })

    console.log(todosIguais);
}

// ExemploForeach();
// ExemploMap();
// ExemploFilter();
// ExemploFind();
ExemploEvery();