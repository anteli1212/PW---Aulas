import {promises as fs} from "fs";

async function pegaDados(){
    const dados = JSON.parse(await fs.readFile("./people.json"));

    console.log(dados);

    return dados;
}

pegaDados();