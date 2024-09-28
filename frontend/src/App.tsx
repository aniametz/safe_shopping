import Button from "@mui/material/Button";
import axios from "axios";
import { backend_port } from "./constants";

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
    <div className="App">
      <Button onClick={handleGreet}>Click</Button>
    </div>
  );
}
