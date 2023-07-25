import HoverCounter from "../hoverCounter";

import ThemeContext from "../../contexts/themeContext";
import Counter from "../counter";
import React from "react";

export default class Context extends React.Component {
  render() {
    const { theme, changer } = this.context;
    return (
      <div>
        <h1>This is a content section.</h1>

        <Counter>
          {(count, incrementCount) => (
            <HoverCounter
              count={count}
              incrementCount={incrementCount}
              theme={theme}
              changer={changer}
            ></HoverCounter>
          )}
        </Counter>
      </div>
    );
  }
}

Context.contextType = ThemeContext;
