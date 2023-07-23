import SecondComponent from "./SecontCompoenet";

const FirstComponent = () => {
    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <p className="teste">Texto do primeiro componente</p>
            <SecondComponent />
        </div>
    )
}

export default FirstComponent;