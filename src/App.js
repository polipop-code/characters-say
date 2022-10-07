import { CharacterCard } from "./components/character card";
import "./AppUI.css";

function App() {
	return (
		<div className="App">
			<div className="main-container">
				<h1>Between cityes, characters wiki</h1>
				<CharacterCard
					imgURL="https://i.pinimg.com/564x/e3/e8/df/e3e8df1e56e1c8839457b42bdcd750e5.jpg"
					name="Polipop"
					details="The total diva"
					story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus accusantium cum ipsam. Beatae sit voluptatum, dolor illo officia alias modi. Similique culpa cumque exercitationem at optio vero excepturi aspernatur."
					phrase="World is in black and white with a touch of color"
				/>
				<CharacterCard
					imgURL="https://i.pinimg.com/564x/e3/e8/df/e3e8df1e56e1c8839457b42bdcd750e5.jpg"
					name="Mango"
					details="The happy artist"
					story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus accusantium cum ipsam. Beatae sit voluptatum, dolor illo officia alias modi. Similique culpa cumque exercitationem at optio vero excepturi aspernatur."
					phrase="The simplest artlines have the greatest message"
				/>
				<CharacterCard
					imgURL="https://i.pinimg.com/564x/e3/e8/df/e3e8df1e56e1c8839457b42bdcd750e5.jpg"
					name="Mora"
					details="The embittered dressmaker"
					story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus accusantium cum ipsam. Beatae sit voluptatum, dolor illo officia alias modi. Similique culpa cumque exercitationem at optio vero excepturi aspernatur."
					phrase="I only need my hands"
				/>
				<CharacterCard
					imgURL="https://i.pinimg.com/564x/e3/e8/df/e3e8df1e56e1c8839457b42bdcd750e5.jpg"
					name="Cherry"
					details="The nervous assistant"
					story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus accusantium cum ipsam. Beatae sit voluptatum, dolor illo officia alias modi. Similique culpa cumque exercitationem at optio vero excepturi aspernatur."
					phrase="I need coffee"
				/>
			</div>
		</div>
	);
}

export default App;
