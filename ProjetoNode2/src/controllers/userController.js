import express from "express";

const route = express.Router();

route.post("/", (request, response) => {
    
    const {name, email, password, typeUser} = request.body;

    if(!name){
        return response.status(400).send("O usuário não pode ser nulo ou vazio")
    }

    if(name > 50){
        return response.status(400).send("O usuário não pode ter mais de 50 caracteres")
    }

    if(!email){
        return response.status(400).send("O email não pode ser nulo ou vazio")
    }

    if(email > 50){
        return response.status(400).send("O email não pode ter mais de 50 caracteres")
    }

    if(!password){
        return response.status(400).send("A senha não pode ser nula ou vazia")
    }

    if(password > 50){
        return response.status(400).send("A senha não pode ter mais de 50 caracteres")
    }

    if(!typeUser){
        return response.status(400).send("Tipo de usuário não pode ser nulo ou vazio")
    }

    if(typeUser.toUpperCase() !== "ADMIN" && typeUser.toUpperCase() !== "COMUM"){
        return response.status(400).send("Tipo de usuário deve ser ADMIN ou COMUM")
    }

    return response.status(201).send({"response": `O usuário ${name} foi criado com sucesso`});
});

export default route;