import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Box() {
  const awesomeTheme = useContext(ThemeContext)
  return <div style={{backgroundColor:awesomeTheme.basic.main, color: awesomeTheme.fancy.text}}>Theme Context</div>;
}
