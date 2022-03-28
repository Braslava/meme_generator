import './Meme.css';
import memesData from '../../memesData';
import React from 'react';

function Meme() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
		altText: '',
	});

	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	function handleSubmit(e) {
		e.preventDefault();
		const randomIndex = Math.floor(Math.random() * 100);
		const memesArray = allMemeImages.data.memes;

		setMeme((prevState) => ({
			...prevState,
			randomImage: memesArray[randomIndex].url,
			altText: memesArray[randomIndex].name,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;
		console.log(name, value);
		setMeme((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	return (
		<main className="meme">
			<form className="meme__form">
				<input
					aria-label="Top line of the meme"
					id="topText"
					type="text"
					name="topText"
					placeholder="Enter the first line"
					onChange={handleChange}
					value={meme.topText}
				></input>

				<input
					aria-label="Bottom line of the meme"
					id="bottomText"
					type="text"
					name="bottomText"
					placeholder="Enter the second line"
					onChange={handleChange}
					value={meme.bottomText}
				></input>

				<button onClick={handleSubmit} className="button">
					Get a new meme image &#128064;
				</button>
			</form>
			<div className="meme-img-wrapper">
				<img
					src={meme.randomImage}
					className="meme__img"
					alt={meme.altText}
				/>
				<h1 className="meme__text top">{meme.topText}</h1>
				<h1 className="meme__text bottom">{meme.bottomText}</h1>
			</div>
		</main>
	);
}

export default Meme;
