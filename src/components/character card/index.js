import React from "react";
import "./characterCard.css";

function CharacterCard(props) {
	return (
		<div className="card-container">
			<figure>
				<img src={props.imgURL} alt="" />
			</figure>
			<article>
				<h3>{props.name}</h3>
				<p>{props.details}</p>
				<p>{props.story}</p>
				<p>
					<strong>{props.phrase}</strong>
				</p>
			</article>
		</div>
	);
}

export { CharacterCard };
