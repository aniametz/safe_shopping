
import createTheme from '@mui/material/styles/createTheme';

export enum OurColors {
  green = "#a8c256",
  red = "#ff5a5f",
  black = "#172121",
  grey = "#444554",
  white = "#dae0f2",
  turquoise = "#21a0a0",
  blue = "#669bbc",
  orange = "#ff9505"
}

// https://coolors.co/ to generate palette by locking base colors
// https://bareynol.github.io/mui-theme-creator/ to set up theme colors

export const theme = createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          color: OurColors.white
        }
      }
    },
    palette: {
      mode: 'dark',
      background: {
        default: OurColors.black,
        paper: OurColors.black
      },
      text: {
        primary: OurColors.white,
        secondary: OurColors.turquoise,
      },
      primary: {
        // dark:,
        main: OurColors.white,
        // light:
        contrastText: OurColors.black
      },
      secondary: {
        // dark:
        main: OurColors.turquoise,
        // light:
        contrastText: OurColors.white
      },
      error: {
        main: OurColors.red
      },
      warning: {
        main: OurColors.orange
      },
      info: {
        main: OurColors.blue
      },
      success: {
        main: OurColors.green
      }
    }
  });
  