import { useState } from 'react';

const ManageData = () => {

    let someData = 10;
    // console.log(someData);

    const [numero, setNumero] = useState(15);

    return(
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar variavel</button>
            </div>
            <div>
                <p>Valor: {numero}</p>
                <button onClick={() => setNumero(25)}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData;