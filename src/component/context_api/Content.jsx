import Counter from "../counter";
import ThemeContext from "../../contexts/themeContext";
import HoverCounter from "../hoverCounter";

function Content({ theme }) {
  return (
    <div>
      <h1>This is a content section.</h1>

      <Counter>
        {(count, incrementCount) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <HoverCounter
                count={count}
                incrementCount={incrementCount}
                theme={theme}
              ></HoverCounter>
            )}
          </ThemeContext.Consumer>
        )}
      </Counter>
    </div>
  );
}

export default Content;
