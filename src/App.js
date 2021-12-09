import logo from "./logo.svg";
import "./App.css";

// Components
import NavBar from "./components/NavBar/NavBar";
import Counter from "./components/Counter/Counter";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<NavBar />
			</header>
		</div>
	);
}

export default App;