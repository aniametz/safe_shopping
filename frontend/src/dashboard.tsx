import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import WarningIcon from "@mui/icons-material/Warning";
import { Chip, Container, Typography } from "@mui/material";
import { MarkerType } from "./constants";

export interface DashboardProps {
  readonly markers: MarkerType[];
}

export default function Dashboard(props: DashboardProps): JSX.Element {
  const { markers } = props;

  const chipMapping = [
    { status: true, icon: <DoneIcon />, color: "success" },
    { status: "warning", icon: <WarningIcon />, color: "warning" },
    { status: false, icon: <CloseIcon />, color: "error" },
  ];

  return (
    <Container style={{ paddingBottom: "5em" }}>
      <Typography variant="h6" style={{ paddingBottom: "1em" }}>
        How we know this:
      </Typography>
      <div style={{ display: "flex", flexFlow: "column" }}>
        {markers &&
          markers.map((marker) => {
            const chipAttributes = chipMapping.find(
              (chipMap) => chipMap.status === marker.status
            );
            // I was forced by TypeScript to do this, I'm sorry
            const chipColor =
              chipAttributes?.color === "success"
                ? "success"
                : chipAttributes?.color === "warning"
                ? "warning"
                : "error";

            return (
              <div style={{ paddingBottom: "1em" }} key={marker.label}>
                <Chip
                  label={marker.label}
                  icon={chipAttributes?.icon}
                  color={chipColor}
                  style={{ maxWidth: "40em" }}
                  variant="outlined"
                />
              </div>
            );
          })}
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
