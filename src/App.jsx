import ClickCounter from "./component/ClickCounter";
import Counter from "./component/counter";
import React from "react";
import ThemeContext from "./contexts/themeContext";
import Section from "./component/context_api/Sesction";

export default class App extends React.Component {
  state = {
    theme: "light",
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === "dark") {
          return {
            theme: "light",
          };
        }
        return {
          theme: "dark",
        };
      });
    },
  };

  render() {
    return (
      <div>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
