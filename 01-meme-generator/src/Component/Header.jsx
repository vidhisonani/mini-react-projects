import trollFace from '../assets/troll-image-face.png'

function Header() {
  return (
    <>
    <header className='header'>
      <img src={trollFace} alt="Troll Face" />
      <h1>Meme Generator</h1>
    </header>
    </>
  );
}

export default Header;
