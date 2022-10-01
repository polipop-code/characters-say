import React from "react";
import "./characterCard.css";

function CharacterCard() {
	return (
		<div className="card-container">
			<figure>
				<img src="" alt="" />
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
