import './Meme.css';
import memesData from '../../memesData';

function Meme() {
	function handleSubmit(e) {
		e.preventDefault();
		const randomIndex = Math.floor(Math.random() * 100);
		const memesImgUrl = memesData.data.memes[randomIndex].url;
		console.log(randomIndex);
		console.log(memesImgUrl);
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
		</main>
	);
}

export default Meme;
