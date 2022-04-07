import { blue } from '@mui/material/colors'
import { frFR as coreFrFR } from '@mui/material/locale'
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@mui/material/styles'

export const colors = {
  primary: '#0f5690',
  secondary: '#57cdf7',
  error: '#E5514b',
  success: '#008a5f',
  info: blue.A400,
  background: '#f5f5f5',
  divider: '#e3e9ed',
  disabled: '#6b6b6b',
  warning: '#f9f871',
}

// Create a theme instance.
const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
        contrastText: '#fff',
      },
      error: {
        main: colors.error,
      },
      success: {
        main: colors.success,
      },
      background: {
        default: colors.background,
        paper: colors.background,
      },
      divider: colors.background,
    },
    typography: {
      h1: { fontSize: '2rem', color: colors.primary, fontWeight: 'bold' },
      h2: { fontSize: '1.8rem', color: colors.primary },
      h3: { fontSize: '1.6rem' },
      h4: { fontSize: '1.4rem' },
      h5: { fontSize: '1.2rem' },
      h6: { fontSize: '1rem' },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiPaper: {
        defaultProps: {
          variant: 'outlined',
        },
      },
      MuiCard: {
        defaultProps: {
          variant: 'outlined',
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: { '&:last-child': { 'padding-bottom': '1rem' } },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: `border-color: ${colors.divider}`,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          contained: `background: ${colors.secondary};color: white`,
        },
      },
      MuiAppBar: {
        defaultProps: {
          color: 'secondary',
        },
      },
      MuiInput: {
        defaultProps: {
          disableUnderline: true,
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: `background: white`,
          notchedOutline: 'border: none',
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: `border-color: ${colors.divider}`,
        },
      },
    },
  },
  coreFrFR
)

export default theme
