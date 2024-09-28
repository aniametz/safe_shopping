import { Container, Typography } from '@mui/material';

import { theme } from './theme';

export interface ResultContainerProps {
    readonly isSafe: boolean
}

export default function ResultContainer(props: ResultContainerProps): JSX.Element {
    const {isSafe} = props

    const websiteName = 'mock-name.com'

    const message = isSafe ? `We have scanned ${websiteName} and it's safe!` : `We suspect ${websiteName} is dangerous, be careful!`
    return <Container style={{paddingBottom: '3em'}}>
        <Typography variant="h6" style={{color: isSafe ? theme.palette.success.main : theme.palette.error.main}}>{message}</Typography>
        </Container>
}