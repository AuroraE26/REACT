import logo from "./logo.svg";
import "./App.css";
// import { useEffect, useState } from "react";
// // Components
import NavBar from "./components/NavBar/NavBar";

// const _users = [
// 	{
// 		id: 1,
// 		firstName: "Selene",
// 		lastName: "Chavez",
// 	},
// 	{
// 		id: 2,
// 		firstName: "Omar",
// 		lastName: "Mijangos",
// 	},
// 	{
// 		id: 3,
// 		firstName: "Luis",
// 		lastName: "Balán",
// 	},
// 	{
// 		id: 4,
// 		firstName: "Odon",
// 		lastName: "Balán",
// 	},
// ];

function App() {
	// const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	// await fetch()
	// 	setTimeout(() => {
	// 		const response = _users;
	// 		setUsers(response);
	// 	}, 3000);
	// }, []);

	// console.log(users);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<NavBar />

				{/* {users.map((user) => (
					<div key={user.id}>
						<h1>
							{user.firstName} {user.lastName}
						</h1>
					</div>
				))} */}
			</header>
		</div>
	);
}

export default App;