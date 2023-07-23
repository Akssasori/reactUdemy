import './App.css';
import Challenge from './components/Challenge';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';

function App() {
  return (
    <div className="App">
      <h1>app.js</h1>
      <FirstComponent />
      <TemplateExpression />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
