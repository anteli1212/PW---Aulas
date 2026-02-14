function Logar(event){
    event.preventDefault();
    const email = document.getElementById("inputEmail").value;
    const pas = document.getElementById("inputSenha").value;

    console.log(`Email: ${email} e Senha: ${pas}`);

    if (email == "KanyeWest@Yahoo.com" && pas == "ImEvil"){
        alert(`Usuário ${email} logado com sucesso!`);
        window.location.href = "pag2.html";
    }else{
        alert("Usuário não cadastrado :/ revise seus dados");
    }
}