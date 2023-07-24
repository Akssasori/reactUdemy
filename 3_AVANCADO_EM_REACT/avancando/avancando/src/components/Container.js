const Container = ({children, myValue}) => {
    return(
        <div>
            <h2>Este é o titulo do caontainer</h2>
            {children}
            <p>Meu valor é {myValue}</p>
        </div>
    )
}

export default Container;