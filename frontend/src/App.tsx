import "./App.css";

import { theme } from "./theme";
import UrlPasteBar from "./url-paste-bar";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.palette.background.default,
        height: "100%",
      }}
    >
      <UrlPasteBar />
    </div>
  );
}
