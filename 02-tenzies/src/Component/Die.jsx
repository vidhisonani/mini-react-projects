export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <>
      <button
        style={styles}
        className="die-button"
        onClick={props.hold}
        aria-pressed={props.isHeld}
        aria-label={`Die with a value ${props.value}, 
        ${props.isHeld ? "held" : "not held"}`}
      >
        <img
          src={`dice/dice-${props.value}.svg`}
          alt=""
          className="die-image"
        />
      </button>
    </>
  );
}
