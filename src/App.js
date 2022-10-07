import { CharacterCard } from "./components/character card";
import "./AppUI.css";

import Characters from "./api/api.json";

function App() {
	return (
		<div className="App">
			<div className="main-container">
				<h1>Between cityes, characters wiki</h1>
				{Characters.map((character) => {
					return (
						<CharacterCard
							key={character.name}
							imgURL={character.imgURL}
							name={character.name}
							details={character.details}
							story={character.story}
							phrase={character.phrase}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
