import Check from "./checker";

function HoverCounter({ count, incrementCount, theme, switchTheme }) {
  console.log("hover rendered");

  // console.log(changer);
  const style =
    theme === "dark"
      ? {
          backgroundColor: "#2811d7",
          color: "#c911c6",
          fontSize: "60px",
        }
      : null;
  return (
    <div>
      <h1 style={style} onMouseOver={incrementCount}>
        Mouse {count} over.
      </h1>
      <button type="button" onClick={switchTheme}>
        Switch
      </button>
      <Check />
    </div>
  );
}
export default HoverCounter;
