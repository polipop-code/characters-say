import { CharacterCard } from "./components/character card";
import "./AppUI.css";

function App() {
	return (
		<div className="App">
			<div className="main-container">
				<h1>Between cityes, characters wiki</h1>
				<CharacterCard />
			</div>
		</div>
	);
}

export default App;
