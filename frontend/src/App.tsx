import './App.css';

import Navbar from './navbar';
import { theme } from './theme';
import UrlPasteBar from './url-paste-bar';

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.palette.background.default,
        height: "100%",
      }}
    >
      <Navbar/>
      <UrlPasteBar />
    </div>
  );
}
