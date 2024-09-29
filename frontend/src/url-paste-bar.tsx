import axios from 'axios';
import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { backend_port, MarkerType } from './constants';
import Dashboard from './dashboard';
import ExtensionProposal from './extension-proposal';
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
  const [markers, setMarkers] = useState<MarkerType[]>();
  const [score, setScore] = useState<number>();

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
        const result = response.data[0][0] === 0 ? true : false;
        setFirstScanResult(result);
        getMarkers(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getMarkers = (isSafe: boolean) => {
    if (!isSafe) setMarkers([{ label: "blacklisted", status: false }]);
    else
      axios
        .post(backend_port + "calculateSiteMarkers", {
          url: urlToCheck,
        })
        .then((response) => {
          console.log(response.data);
          const result = Object.entries(response.data).map(
            ([key, value]) => ({ label: key, status: value } as MarkerType)
          );
          console.log({ result });
          setMarkers(result);

          // calculate safety score
          const positiveMarkers = result.filter(
            (marker) => marker.status === true
          ).length;
          const allMarkers = result.length;
          setScore((positiveMarkers / allMarkers) * 100);
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
      setMarkers([]);
    }
  }, [urlToCheck]);

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
            onBlur={(e) => {
              setUrlToCheck(e.target.value);
            }}
            onChange={() => setUrlToCheck("")}
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
      {firstScanResult !== undefined &&
        urlToCheck !== undefined &&
        score !== undefined && (
          <div>
            <ResultContainer
              safetyScore={score}
              url={urlToCheck}
            />
            {markers && <Dashboard markers={markers} />}
          </div>
        )}
      {firstScanResult !== undefined && <ExtensionProposal />}
    </div>
  );
}
