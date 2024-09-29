import MenuIcon from '@mui/icons-material/Menu';
import ShieldIcon from '@mui/icons-material/Shield';
import { AppBar, IconButton, Tooltip, Typography } from '@mui/material';

import { theme } from './theme';

export default function Navbar(): JSX.Element {
    return <AppBar position='sticky' style={{background: theme.palette.background.default}}>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '1em', paddingRight: '1em'}}>
        <div style={{paddingLeft: '1em', display: 'flex', flexFlow: 'row'}}>
            <div style={{paddingRight: '0.5em'}}><ShieldIcon color='primary'/></div>
            <Typography variant='body1'>Safe Shopping</Typography></div>
        <Tooltip title='Menu'>
        <IconButton ><MenuIcon/></IconButton>
        </Tooltip>
    </div>
    </AppBar>
}