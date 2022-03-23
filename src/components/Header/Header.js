import './Header.css';
import trollFace from '../../assets/troll-face.png';

function Header() {
	return (
		<header className="header">
			<div className="header__logo-container">
				<img className="header__logo-img" src={trollFace} alt="Troll-face"></img>
				<h1 className="header__logo-title">Meme Generator</h1>
			</div>
			<p className="header__p">React course - Project 3</p>
		</header>
	);
}

export default Header;
