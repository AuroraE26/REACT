import logo from './logo.svg';
import './App.css';
import Greeting from "./components/Greeting.js"
import Calculator from "./components/Calculator.js"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greeting firstName="Oscar" lastName="Ruiz"/>
        <Calculator a="{5}" b={6} op="resta"/>
      </header>
    </div>
  );
}

export default App;
