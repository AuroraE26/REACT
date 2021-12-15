import "./App.css";
import { useEffect, useState } from "react";

// Components
import Character from "./components/Character";

// Services
import { listCharacters } from "./services/characters";

function App() {

	
	
	// const [characters, setCharacters] = useState([]);
	// const [data, setData] = useState({});

	// useEffect(() => {
	// 	const list = async () => {
	// 		const { results, info } = await listCharacters();
	// 		setCharacters(results);
	// 		setData(info);
	// 	};
	// 	list();
	// }, []);

	// const handleClick = async (action) => {
	// 	if (action === "next" && data.next != null) {
	// 		const page = data.next.split("?")[1];
	// 		const { results, info } = await listCharacters(page);
	// 		setCharacters(results);
	// 		setData(info);
	// 	}else if(action === "prev" && data.prev != null){
	// 		const page = data.prev.split("?")[1];
	// 		const { results, info } = await listCharacters(page);
	// 		setCharacters(results);
	// 		setData(info);
	// 	}
	// };

	// console.log(data);
	const [input1,setIntput1] = useState("dfdsfsd");
	const [input2,setIntput2] = useState("dfdsfsd");
	return (
		// <div className="App">
		// 	<div className="fixed-container">
		// 		<button onClick={() => handleClick("prev")} className="btn">
		// 			Prev
		// 		</button>
		// 		<button onClick={() => handleClick("next")} className="btn">
		// 			Next
		// 		</button>
		// 	</div>
		// 	{characters.map(({ id, image, name, species, status }) => (
		// 		<Character
		// 			key={id}
		// 			image={image}
		// 			name={name}
		// 			species={species}
		// 			status={status}
		// 		/>
		// 	))}
		// </div>
		<div className="container">
			<form className="form">
				<div className="flex">
					<label htmlFor="input1">Input:</label>
					<input
						id="input1"
						onChange={(e)=>setIntput1(e.target.value)}
						value={input1}
					/>
					<input
					type={"number"}
						id="input2"
						onChange={(e)=>setIntput2(e.target.value)}
						value={input2}
					/>
				</div>
			</form>

		</div>
	);
}

export default App;