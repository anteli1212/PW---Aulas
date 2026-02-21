import { useState } from "react"

export default function Contador(){
    const [num, setNum] = useState(0);
    const [mostrar, setMostrar] = useState(false);
    const [text, setText] = useState("");

    return(
        <div>
            <h1>{num}</h1>
            <button onClick={() => setNum(num + 1)}>Somar</button>
            <button onClick={() => setNum(num - 1)}>Substrair</button>

            { 
                num < 10 ? 
                <p>Carregando...</p> :
                <p style={{color: '#ffffff'}}>Dados Carregados!</p>
            }
        </div>
    )
}