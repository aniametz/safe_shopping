import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import WarningIcon from '@mui/icons-material/Warning';
import { Chip, Container, Typography } from '@mui/material';

export default function Dashboard(): JSX.Element {

    const mockMarkers = [
        {label: 'marker1', status: 'green'},
        {label: 'marker2', status: 'yellow'},
        {label: 'marker3', status: 'green'},
        {label: 'marker4', status: 'red'},
        {label: 'marker5', status: 'green'},
        {label: 'marker6', status: 'green'},
        {label: 'marker7', status: 'green'}
    ]

    const chipMapping = [
        {status: 'green', icon: <DoneIcon/>, color: 'success'},
        {status: 'yellow', icon: <WarningIcon/>, color: 'warning'},
        {status: 'red', icon: <CloseIcon/>, color: 'error'}
    ]

    return <Container style={{paddingBottom: '5em'}}>
        <Typography variant='h6' style={{paddingBottom: '1em'}}>How do we know this:</Typography>
        <div style={{display: 'flex', flexFlow: 'column'}}>
        {mockMarkers.map((marker) => {
            const chipAttributes = chipMapping.find((chipMap) => chipMap.status === marker.status)
            // I was forced by TypeScript to do this, I'm sorry
            const chipColor = chipAttributes?.color === 'success' ? 'success' 
            : chipAttributes?.color === 'warning' 
            ? 'warning' : 'error'

            return (
            <div style={{paddingBottom: '1em'}}>
            <Chip 
            label={marker.label}
            icon={chipAttributes?.icon}
            color={chipColor}
            style={{maxWidth: '40em'}}
            />
            </div>)
        })}</div>
        </Container>
}