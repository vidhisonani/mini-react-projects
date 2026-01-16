import React, { useState, useEffect } from "react";

function MainContent() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newImageUrl = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: newImageUrl,
    }));
  }
  return (
    <>
      <main>
        <div className="form">
          <label>
            Top Text
            <input
              type="text"
              placeholder="One does not simply"
              name="topText"
              onChange={(event) => handleChange(event)}
              value={meme.topText}
            />
          </label>
          <label>
            Bottom Text
            <input
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              onChange={(event) => handleChange(event)}
              value={meme.bottomText}
            />
          </label>
          <button onClick={getMemeImage}>Get a new meme image</button>
        </div>
        <div className="meme">
          <img src={meme.imageUrl} alt="Image" />
          <span className="top">{meme.topText}</span>
          <span className="bottom">{meme.bottomText}</span>
        </div>
      </main>
    </>
  );
}

export default MainContent;
