import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";

export default function Check() {
  const context = useContext(ThemeContext);
  const { theme } = context;
  const result =
    theme === "light" ? <p>Hi this is a context api checker</p> : null;
  return result;
}
