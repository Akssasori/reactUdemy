const TemplateExpression = () => {

    const name = "Lucas"
    const data = {
        age: 31,
        job: "Programer"

    } 
    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
        </div>
    )
}

export default TemplateExpression;