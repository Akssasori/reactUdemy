import { useState } from 'react';
import './App.css';
import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
// import { City } from '.';

function App() {
  // const name = "Joaquim"
  const [userName] =  useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234},
  ];

  function showMessage() {
    console.log("Evento do componente pai!")
    
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/spring-framework.png" alt="spring" />
      </div>
      {/* Imagem e masset*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name= {userName}/>
      {/* destructring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Azul" newCar={false} />
       {/* loop em array de ojetos */}
       {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
       ))}
       <Fragment propFragment = "teste"/>
       {/*children */}
       <Container myValue="testing">
        <p>E este é o conteúdo</p>
       </Container>
       {/*executar função */}
       <ExecuteFunction myFunction={showMessage} />
       {/*state lift */}
       <Message msg={message}/>
       <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
