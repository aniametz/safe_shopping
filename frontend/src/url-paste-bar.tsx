import React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function UrlPasteBar(): JSX.Element {
    return <Container>
        <Typography variant='h4' style={{ padding: '1em'}}>
         Question?
       </Typography>
        <TextField id="outlined-basic" label="Paste link here..." variant="outlined" />
        <Button variant='contained' color='primary'>Scan</Button>
    </Container>
}

//       <Container style={{display: 'flex', flexDirection: 'row'}} color='primary'>
//         <Button variant='contained'>Primary Contained</Button>
//         <Button variant='outlined'>Primary Outlined</Button>
//         <Button>Primary Text</Button>
//         </Container>
//         <Container>
//         <div style={{display: 'flex', flexDirection: 'row'}}>
//         <Button variant='contained' color='secondary'>Secondary Contained</Button>
//         <Button variant='outlined' color='secondary'>Secondary Outlined</Button>
//         <Button color='secondary'>Secondary Text</Button>
//         </div></Container>
//         <Container>
//         <div style={{display: 'flex', flexDirection: 'row'}}>
//         <Button variant='contained' color='success'>This is safe!</Button>
//         <Button variant='contained' color='error'>This is fake!</Button>
//         <Button variant='contained' color='warning'>This is warning!</Button>
//         </div></Container>