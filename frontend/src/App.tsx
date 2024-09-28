import './App.css';

import axios from 'axios';

import Button from '@mui/material/Button';

import { backend_port } from './constants';
import { theme } from './theme';
import UrlPasteBar from './url-paste-bar';

export default function App() {
  const handleGreet = () => {
    axios
      .post(backend_port + "hello", {
        greet: true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="App" style={{backgroundColor: theme.palette.background.default, height: '100%'}}>
      <UrlPasteBar/>
      <Button onClick={handleGreet} variant='contained' color='secondary'>Click</Button>
    </div>
  );
}
