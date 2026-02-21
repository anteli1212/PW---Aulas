import "./welcome.css"

export default function Welcome({name, classe, gender}){
    return(
        <div>
            {
                gender == "feminino" ?
                <h1 className={classe}>Bem vinda ao sistema</h1> :
                <h1 className={classe}>Bem vindo ao sistema</h1>
            }

            <p className={classe}>Olá {name}, você acessou o sistema da Etec e 
            ganhou um curso gratuito</p>
        </div>

    )
}