import axios from 'axios';
import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { backend_port } from './constants';
import Dashboard from './dashboard';
import ResultContainer from './result-container';
import { OurColors } from './theme';

export function isValidUrl(url: string): boolean {
  const urlPattern = new RegExp(
    "^(https?://)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}(:\\d+)?(/.*)?$"
  );
  return urlPattern.test(url);
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
        // zero from backend indicates that the site is not blacklisted
        const result = Number(response.data) === 0 ? true : false;
        setFirstScanResult(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log({ urlToCheck });

  useEffect(() => {
    // hook to refresh state
    if (urlToCheck === "") {
      setFirstScanResult(undefined);
    }
  }, [urlToCheck]);

  const isUrlFilled = urlToCheck && urlToCheck.length > 0

  return (
    <div>
      <Container style={{ paddingBottom: "3em" }}>
        <Typography variant="h4" style={{ padding: "1em" }}>
          Question?
        </Typography>
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Paste link here..."
            variant="outlined"
            style={{ width: "40em" }}
            size="small"
            inputProps={{ spellCheck: "false" }}
            onChange={(e) => {
              setUrlToCheck(e.target.value);
            }}
          />
          <div style={{ paddingLeft: "0.5em" }}>
            <Tooltip title="We will search for risks on your website">
              <Button
                variant="contained"
                color="primary"
                onClick={validateInputUrl}
              >
                Scan for risks
              </Button>
            </Tooltip>
          </div>
        </div>
        <p style={{ color: OurColors.red }}>{inputError}</p>
      </Container>
      {firstScanResult !== undefined && urlToCheck !== undefined && (
        <div>
          <ResultContainer isSafe={firstScanResult} url={urlToCheck} />
          <Dashboard />
        </div>
      )}
    </div>
  );
}
