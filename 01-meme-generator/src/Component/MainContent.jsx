import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";

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

  const [uploadedFileName, setUploadedFileName] = useState("");

  function handleUploadImage(event) {
    const file = event.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: imageUrl,
    }));
    setUploadedFileName(file.name);
  }

  function handleDownload() {
    const memeDiv = document.querySelector(".meme");
    if (!memeDiv) return;

    html2canvas(memeDiv, { useCORS: true, scale: 2 }).then((canvas) => {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "my_meme.png";
      link.click();
    });
  }
  return (
    <>
      <main>
        <div className="form">
          <label className="labels">
            Top Text
            <input
              type="text"
              placeholder="One does not simply"
              name="topText"
              onChange={(event) => handleChange(event)}
              value={meme.topText}
            />
          </label>
          <label className="labels">
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

          <label htmlFor="imageUpload" className="imageUploadLabel">
            {uploadedFileName ? uploadedFileName : "Upload your own image"}
          </label>
          <input
            id="imageUpload"
            className="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleUploadImage}
          />
        </div>
        <div className="meme">
          <img src={meme.imageUrl} alt="Image" />
          <span className="top">{meme.topText}</span>
          <span className="bottom">{meme.bottomText}</span>
        </div>
        <button className="download" onClick={handleDownload}>
          Download
        </button>
      </main>
    </>
  );
}

export default MainContent;
