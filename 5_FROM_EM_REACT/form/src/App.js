import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>forms</h1>
      <MyForm  user = {{name:"João", email:"joao@gmail.com", bio:"Sou advogado", role:"admin"}}/>
    </div>
  );
}

export default App;
