import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import WarningIcon from '@mui/icons-material/Warning';
import { Chip, Container, Tooltip, Typography } from '@mui/material';

export default function Dashboard(): JSX.Element {

    const mockMarkers = [
        {label: 'marker1', status: 'green', moreInfo: 'More information about this marker'},
        {label: 'marker2', status: 'yellow', moreInfo: 'More information about this marker'},
        {label: 'marker3', status: 'green', moreInfo: 'More information about this marker'},
        {label: 'marker4', status: 'red', moreInfo: 'More information about this marker'},
        {label: 'marker5', status: 'green', moreInfo: 'More information about this marker'},
        {label: 'marker6', status: 'green', moreInfo: 'More information about this marker'},
        {label: 'marker7', status: 'green', moreInfo: 'More information about this marker'}
    ]

    const chipMapping = [
        {status: 'green', icon: <DoneIcon/>, color: 'success'},
        {status: 'yellow', icon: <WarningIcon/>, color: 'warning'},
        {status: 'red', icon: <CloseIcon/>, color: 'error'}
    ]

    return <Container style={{paddingBottom: '5em'}}>
        <Typography variant='h6' style={{paddingBottom: '1em'}}>How we know this:</Typography>
        <div style={{display: 'flex', flexFlow: 'column'}}>
        {mockMarkers.map((marker) => {
            const chipAttributes = chipMapping.find((chipMap) => chipMap.status === marker.status)
            // I was forced by TypeScript to do this, I'm sorry
            const chipColor = chipAttributes?.color === 'success' ? 'success' 
            : chipAttributes?.color === 'warning' 
            ? 'warning' : 'error'

            return (
            <div style={{paddingBottom: '1em'}}>
                <Tooltip title={marker.moreInfo}>
            <Chip 
            label={marker.label}
            icon={chipAttributes?.icon}
            color={chipColor}
            style={{maxWidth: '40em'}}
            variant='outlined'
            />
                </Tooltip>
            </div>)
        })}</div>
        </Container>
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