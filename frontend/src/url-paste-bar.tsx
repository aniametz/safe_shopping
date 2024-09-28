import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";
import { backend_port } from "./constants";
import Dashboard from "./dashboard";
import ResultContainer from "./result-container";
import { OurColors } from "./theme";

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export default function UrlPasteBar(): JSX.Element {
  const [urlToCheck, setUrlToCheck] = useState<string>();
  const [inputError, setInputError] = useState<string>();
  const [firstScanResult, setFirstScanResult] = useState<boolean>();

  const validateInputUrl = () => {
    if (!urlToCheck) setInputError("Provided link is empty");
    else if (!isValidUrl(urlToCheck))
      setInputError(
        "Provided link is not a valid url. Please check for typos."
      );
    else {
      setInputError("");
      handleFirstScan();
    }
  };

  setTimeout(() => setInputError(""), 10000);

  const handleFirstScan = () => {
    axios
      .post(backend_port + "validateAdressInDb", {
        url: urlToCheck,
      })
      .then((response) => {
        console.log(response.data);
        const result = response.data as boolean;
        setFirstScanResult(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log({ urlToCheck });

  return (
    <div>
      <Container style={{ paddingBottom: "3em" }}>
        <Typography variant="h4" style={{ padding: "1em" }}>
          Question?
        </Typography>
        <TextField
          id="outlined-basic"
          label="Paste link here..."
          variant="outlined"
          onChange={(e) => {
            setUrlToCheck(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => validateInputUrl()}
        >
          Scan
        </Button>
        <p style={{ color: OurColors.red }}>{inputError}</p>
      </Container>
      {firstScanResult && <ResultContainer isSafe={true} />}
      {firstScanResult && <Dashboard />}
    </div>
  );
}
