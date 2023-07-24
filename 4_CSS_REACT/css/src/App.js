
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const n = 15;

  return (
    <div className="App">
      {/*css global */}
      <h1>React com CSS</h1>
      {/*css de componente */}
      <MyComponent />
      <p>Esse paragrafo é do App.js</p>
      {/* inline CSS */}
      <p style = {{ color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      {/*CSS inline dinamico */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}> CSS dinãmico</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}> CSS dinãmico</h2>
      {/*CSS modules */}
      <Title />
      <h2 className="my-title">Testando</h2>
    </div>
  );
}

export default App;
