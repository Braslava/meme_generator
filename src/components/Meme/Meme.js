import './Meme.css';
import memesData from '../../memesData';
import React from 'react';

function Meme() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});

	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	function handleSubmit(e) {
		e.preventDefault();
		const randomIndex = Math.floor(Math.random() * 100);
		const newMemeImg = allMemeImages.data.memes[randomIndex].url;
		setMeme((prevState) => ({
			...prevState,
			randomImage: newMemeImg,
		}));
		console.log(randomIndex);
	}

	return (
		<main className="meme">
			<form className="meme__form">
				<input
					aria-label="First line of the meme"
					id="firstLine"
					type="text"
					name="firstLine"
					placeholder="Enter the first line"
				></input>

				<input
					aria-label="Second line of the meme"
					id="secondLine"
					type="text"
					name="secondLine"
					placeholder="Enter the second line"
				></input>

				<button onClick={handleSubmit} className="button">
					Get a new meme image &#128064;
				</button>
			</form>
			<img src={meme.randomImage} className="meme__img" />
		</main>
	);
}

export default Meme;
