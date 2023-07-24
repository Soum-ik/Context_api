import ClickCounter from "./component/ClickCounter";
import Counter from "./component/counter";
import Section from "./component/context_api/Sesction";
import React from "react";
import ThemeContext from "./contexts/themeContext";

export default class App extends React.Component {
  state = {
    theme: "dark",
  };

  render() {
    const { theme } = this.state;
    return (
      <div>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={{ theme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
