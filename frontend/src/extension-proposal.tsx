import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { theme } from './theme';

export default function ExtensionProposal(): JSX.Element {
    return (
        <AppBar position="fixed" elevation={0} sx={{ top: 'auto', bottom: 0, background: theme.palette.background.default }}>
        <div style={{
        display: 'flex', justifyContent: 'center', paddingBottom: '2em',
         alignItems: 'center'
        }}>
        <Typography variant='body1'>Like it? Get our browser plug-in and stay safe!</Typography>
        <div style={{paddingLeft: '0.5em'}}>
        <Button variant='outlined' size='small' href={`${process.env.PUBLIC_URL}/extension.zip`}>Get plug-in</Button></div>
        </div>
        </AppBar>)
}