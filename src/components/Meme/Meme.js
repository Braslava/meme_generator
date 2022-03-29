import './Meme.css';
import React from 'react';

function Meme() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: 'https://i.imgflip.com/2hgfw.jpg',
		altText: 'Scared cat',
	});

	const [allMemes, setAllMemes] = React.useState({});

	React.useEffect(() => {
		console.log('effect ran');
		fetch(`https://api.imgflip.com/get_memes`)
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes));
		//.catch(err => alert(err));
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		const randomIndex = Math.floor(Math.random() * 100);

		setMeme((prevState) => ({
			...prevState,
			randomImage: allMemes[randomIndex].url,
			altText: allMemes[randomIndex].name,
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
					placeholder="Top line"
					onChange={handleChange}
					value={meme.topText}
				></input>

				<input
					aria-label="Bottom line of the meme"
					id="bottomText"
					type="text"
					name="bottomText"
					placeholder="Bottom line"
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
