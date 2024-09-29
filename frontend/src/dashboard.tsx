import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CallIcon from '@mui/icons-material/Call';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CloseIcon from '@mui/icons-material/Close';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DoneIcon from '@mui/icons-material/Done';
import FacebookIcon from '@mui/icons-material/Facebook';
import GavelIcon from '@mui/icons-material/Gavel';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import HtmlIcon from '@mui/icons-material/Html';
import LockIcon from '@mui/icons-material/Lock';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import MoneyIcon from '@mui/icons-material/Money';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SavingsIcon from '@mui/icons-material/Savings';
import SearchIcon from '@mui/icons-material/Search';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import WarningIcon from '@mui/icons-material/Warning';
import { Chip, Container, Typography } from '@mui/material';

import { MarkerType } from './constants';

export interface DashboardProps {
  readonly markers: MarkerType[];
}

export default function Dashboard(props: DashboardProps): JSX.Element {
  const { markers } = props;
  
  const markersGrouped = []
  const chunkSize = 3;
  for (let i = 0; i < markers.length; i += chunkSize) {
    const chunk = markers.slice(i, i + chunkSize);
    markersGrouped.push(chunk)
}

  const chipColorMapping = [
    { status: true, icon: <DoneIcon />, color: "success" },
    { status: "warning", icon: <WarningIcon />, color: "warning" },
    { status: false, icon: <CloseIcon />, color: "error" },
  ];

  const chipIconMapping = [
    {label: 'Domain registration date is too recent', icon: <DateRangeIcon/>},
    {label: 'SSL certificate is valid', icon: <LockIcon/>},
    {label: 'Prices are reasonable', icon: <MoneyIcon/>},
    {label: 'Prices currency is region-appropriate ', icon: <AttachMoneyIcon/>},
    {label: 'Store contact details available', icon: <CallIcon/>},
    {label: 'Suspicious payment page', icon: <SavingsIcon/>},
    {label: 'HTML tags are not deprecated', icon: <HtmlIcon/>},
    {label: 'No redirections through several domains', icon: <ChangeCircleIcon/>},
    {label: 'Company registration number or VAT number available', icon: <ReceiptIcon/>},
    {label: 'Site is optimized for mobile devices', icon: <MobileFriendlyIcon/>},
    {label: 'Store design is modern', icon: <VerticalSplitIcon/>},
    {label: 'Store social media available', icon: <FacebookIcon/>},
    {label: 'Terms & conditions available on website', icon: <GavelIcon/>},
    {label: 'Text does not appear awkward or machine-learning translated', icon: <GTranslateIcon/>},
    {label: 'Site appears in search engine results', icon: <SearchIcon/>}
  ]

  return (
    <Container style={{ paddingBottom: "5em" }}>
      <Typography variant="h6" style={{ paddingBottom: "1em" }}>
        How we know this:
      </Typography>
      <div style={{ display: "flex", flexFlow: "column" }}>
        {markersGrouped.map((group, index) => {
          console.log({group}) 
          return <div key={index} style={{display: 'flex', flexFlow: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {group.map(((marker) => {
            const chipColorAttributes = chipColorMapping.find(
              (chipMap) => chipMap.status === marker.status
            );
            // I was forced by TypeScript to do this, I'm sorry
            const chipColor =
            chipColorAttributes?.color === "success"
                ? "success"
                : chipColorAttributes?.color === "warning"
                ? "warning"
                : "error";

            const chipIcon = chipIconMapping.find((iconMap) => iconMap.label === marker.label)?.icon

            return (
              <div style={{ paddingBottom: "1em", paddingLeft: '0.5em' }} key={marker.label}>
                <Chip
                  label={marker.label}
                  icon={chipIcon}
                  color={chipColor}
                  style={{ maxWidth: "40em" }}
                  variant="outlined"
                />
              </div>
            );
          }))}</div>})}
      </div>
    </Container>
  );
}

// Alternative design of chips (colored icons)
// const chipColor = chipAttributes?.color === 'success' ? "#a8c256"
//             : chipAttributes?.color === 'warning'
//             ? "#ff9505" : "#ff5a5f"

//             return (
//             <div style={{paddingBottom: '1em'}}>
//                 <Tooltip title={marker.moreInfo}>
//                     <Chip
//                     label={marker.label}
//                     icon={chipAttributes?.icon}
//                     // color={chipColor}
//                     sx={{
//                         [`& .${chipClasses.icon}`]: {
//                         color: chipColor
//                         //   '#21a0a0' // this works
//                         }
//                       }}
//                     style={{maxWidth: '40em'}}
//                     />
//                 </Tooltip>
//             </div>)
