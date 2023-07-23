const Challenge = () => {

    const a = 1;
    const b = 2;

    const soma = (a,b) => {
        console.log(a+b);
        return a+b;
    }

    return(
        <div>
            <h1>somando A:{a} + B:{b}</h1>
            <button onClick={() => soma(a,b)}>Clique aqui para somar A + B!</button>
        </div>
    )
}

export default Challenge;