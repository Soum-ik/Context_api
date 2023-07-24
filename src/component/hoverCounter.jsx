function HoverCounter({ count, incrementCount, theme }) {
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
    </div>
  );
}
export default HoverCounter;
