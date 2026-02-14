import {promises as fs} from 'fs';
async function PegaDados(){
    const dados = JSON.parse(await fs.readFile("./src/times.json"));

    return dados;
}

async function Atividade02(){
    const dados = await PegaDados();

    dados.forEach(item => {
        console.log(`Nome: ${item.nome}`);
    });
}

async function Atividade03(){
    const dados = await PegaDados();

    dados.forEach(item => {
        if(item.detalhes.nome_oficial[0] == 'S'){
            console.log(`Nome: ${item.detalhes.nome_oficial}`);
        }
    });
}

async function Atividade04(){
    const dados = await PegaDados();

    const ordenados = dados.sort((a, b) => {
        return a.detalhes.estadio.nome.length - b.detalhes.estadio.nome.length;
    }).map(item => {
        return item.detalhes.estadio.nome;
    });

    console.log(ordenados);
}

async function Atividade05(){
    const dados = await PegaDados();

    dados.forEach(item => {
        if(item.detalhes.localizacao.estado == "SP"){
            console.log(`Nome Estádio: ${item.detalhes.estadio.nome}\nCapacidade: ${item.detalhes.estadio.capacidade}\nCidade: ${item.detalhes.localizacao.cidade}\n`);
        }
    });
}

async function Atividade06(){
    const dados = await PegaDados();

    const timesRS = dados.filter(item => {
        return item.detalhes.localizacao.estado == "RS" && item.nome.length > 7;
    }).map(item => {
        return item.nome;
    });

    console.log(timesRS);
}

async function Atividade07(){
    const dados = await PegaDados();

    dados.forEach(item => {
        let quantidadeTitulos = 0; 
        item.historico.principais_titulos.forEach(item => {
            quantidadeTitulos += item.quantidade;
        })

        console.log(`Nome: ${item.nome} \nQtde Total Titulos: ${quantidadeTitulos}\n`)
    });
}

async function Atividade08(){
    const dados = await PegaDados();

    const timesEscolhidos = dados.filter(item => {
        return item.detalhes.estadio.capacidade >= 50000;
    }).forEach(item => {
        console.log(`Nome Time: ${item.nome}\nNome Estádio: ${item.detalhes.estadio.nome}\nNome Mascote: ${item.mascote}\n`)
    });
}

async function Atividade09(){
    const dados = await PegaDados();

    dados.forEach(item => {

        console.log(`Nome: ${item.nome}\n${item.historico.maiores_idolos.sort()}\n`)
    });
}

async function Atividade10() {
    const dados = await PegaDados();

    // objeto que vai guardar as siglas e quantos times tem em cada
    let rj = [], sp = [], rs = [], mg = [], ba = [], pe = [], pr = [], go = [], ce = [], sc = [];

    dados.forEach(item =>{
        if(item.detalhes.localizacao.estado === "RJ"){
            rj.push(item.detalhes.localizacao.estado);
        };

        if(item.detalhes.localizacao.estado === "SP"){
            sp.push(item.detalhes.localizacao.estado);
        };

        if(item.detalhes.localizacao.estado === "RS"){
            rs.push(item.detalhes.localizacao.estado);
        };

        if(item.detalhes.localizacao.estado === "MG"){
            mg.push(item.detalhes.localizacao.estado);
        };

        if(item.detalhes.localizacao.estado === "BA"){
            ba.push(item.detalhes.localizacao.estado);
        };

        if(item.detalhes.localizacao.estado === "PE"){
            pe.push(item.detalhes.localizacao.estado);
        };

        if(item.detalhes.localizacao.estado === "PR"){
            pr.push(item.detalhes.localizacao.estado);
        };

        if(item.detalhes.localizacao.estado === "GO"){
            go.push(item.detalhes.localizacao.estado);
        };

        if(item.detalhes.localizacao.estado === "CE"){
            ce.push(item.detalhes.localizacao.estado);
        };

        if(item.detalhes.localizacao.estado === "SC"){
            sc.push(item.detalhes.localizacao.estado);
        };
    })

    console.log(
        `\tRJ: ${rj.length}
        SP: ${sp.length}
        RS: ${rs.length}
        MG: ${mg.length}
        BA: ${ba.length}
        PE: ${pe.length}
        PR: ${pr.length}
        GO: ${go.length}
        CE: ${ce.length}
        SC: ${sc.length}`
    )
}

//Atividade02();
//Atividade03();
//Atividade04();
//Atividade05();
//Atividade06();
//Atividade07();
//Atividade08();
//Atividade09();
//Atividade10();