import MenuIcon from '@mui/icons-material/Menu';
import ShieldIcon from '@mui/icons-material/Shield';
import { IconButton, Tooltip, Typography } from '@mui/material';

export default function Navbar(): JSX.Element {
    return <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '1em', paddingRight: '1em'}}>
        
        <div style={{paddingLeft: '1em', display: 'flex', flexFlow: 'row'}}>
            <div style={{paddingRight: '0.5em'}}><ShieldIcon color='primary'/></div>
            <Typography variant='body1'>Safe Shopping</Typography></div>
        <Tooltip title='Menu'>
        <IconButton ><MenuIcon/></IconButton>
        </Tooltip>
    </div>
}