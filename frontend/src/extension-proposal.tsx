import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ExtensionProposal(): JSX.Element {
    return <div style={{
        display: 'flex', justifyContent: 'center', paddingBottom: '2em', alignItems: 'center'
        }}>
        <Typography variant='body1'>Like it? Get our browser plug-in and stay safe!</Typography>
        <div style={{paddingLeft: '0.5em'}}>
        <Button variant='outlined' size='small'>Get plug-in</Button></div>
        </div>
}