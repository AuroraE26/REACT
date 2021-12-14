// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Components
import UserName from "./components/UserName/UserName";

function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const getUsers = async () => {
			const response = await fetch("https://rickandmortyapi.com/api/character");
			const data= await response.json();
			const parsedRes = data.results;
			console.log(parsedRes);
			setUsers(parsedRes);
		};

		getUsers();
	}, []);

	const dataNew = users.map((user)=>(
		<UserName id={user.id} name={user.name} status={user.status} species={user.species} lastLoc={user.location.name} origin={user.origin.name} image={user.image}/>
	));

	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				{/* <NavBar /> */}
				{dataNew}
			</header>
		</div>
	);
}

export default App;