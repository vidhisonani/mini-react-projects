import { useState } from "react";
import { languages } from "../data/languages";
import { clsx } from "clsx";
import Confetti from "react-confetti";
import { getFarewellText, getRandomWord, getSuccessText } from "../utils/utils";

function AssemblyEndgame() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const numGuessesLeft = languages.length - 1;

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= numGuessesLeft;
  const isGameOver = isGameWon || isGameLost;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessInCorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);
  const isLastGuessCorrect =
    lastGuessedLetter && currentWord.includes(lastGuessedLetter);

  const languageElements = languages.map((language, index) => {
    const isLanguageLost = index < wrongGuessCount;
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };

    const className = clsx("chip", isLanguageLost && "lost");
    return (
      <span className={className} style={styles} key={language.name}>
        {language.name}
      </span>
    );
  });

  const letterElements = currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = guessedLetters.includes(letter) || isGameLost;
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    );
    return (
      <span key={index} className={letterClassName}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  const keyboardelements = alphabets.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        disabled={isGameOver}
        className={className}
        key={letter}
        onClick={() => addGuessLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  function addGuessLetter(letter) {
    setGuessedLetters((prevletters) =>
      prevletters.includes(letter) ? prevletters : [...prevletters, letter]
    );
  }
  const gameStatusClass = clsx("game-status", {
    "game-won": isGameWon,
    "game-lost": isGameLost,
    farewell: isLastGuessInCorrect && !isGameOver,
    success: isLastGuessCorrect && !isGameOver,
  });

  function handleNewGame() {
    setCurrentWord(() => getRandomWord());
    setGuessedLetters([]);
  }
  return (
    <>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className={gameStatusClass}>
        {isLastGuessCorrect && !isGameOver && (
          <p className="success-message">{getSuccessText()}</p>
        )}
        {isLastGuessInCorrect && !isGameOver && (
          <p className="farewell-message">
            {getFarewellText(languages[wrongGuessCount - 1].name)}
          </p>
        )}
        {isGameOver ? (
          isGameWon ? (
            <>
              <h2>You Win!</h2>
              <p>Well done!🎉</p>
            </>
          ) : (
            <>
              <h2>Game Over!</h2>
              <p>You Lose! You better start learning Assembly.</p>
            </>
          )
        ) : null}
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>

      <section className="keyboard">{keyboardelements}</section>
      {isGameOver && (
        <button className="new-game" onClick={handleNewGame}>
          New Game
        </button>
      )}
    </>
  );
}
export default AssemblyEndgame;
