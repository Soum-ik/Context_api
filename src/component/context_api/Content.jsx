import ThemeContext from "../../contexts/themeContext";
import Counter from "../counter";
import HoverCounter from "../hoverCounter";
import { useContext } from "react";

export default function Content() {
  console.log("content rendered");
  const content = useContext(ThemeContext);
  const { theme, switchTheme } = content;
  return (
    <div>
      <h1>This is a content section.</h1>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          ></HoverCounter>
        )}
      </Counter>
    </div>
  );
}
