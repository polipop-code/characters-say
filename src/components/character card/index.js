import React from "react";
import "./characterCard.css";

function CharacterCard() {
	return (
		<div className="card-container">
			<figure>
				<img src="https://i.pinimg.com/564x/05/01/ba/0501ba3acc682a75faf09795a0ecde1e.jpg" alt="" />
			</figure>
			<article>
				<h3>Name</h3>
				<p>Details</p>
				<p>Story</p>
				<p>Phrase</p>
			</article>
		</div>
	);
}

export { CharacterCard };
