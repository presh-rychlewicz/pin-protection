import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    info: {
      main: '#000',
      light: '#D3D3D3',
    },
    error: {
      light: '#FFDCDB',
      main: '#FF0',
      dark: '#B50506',
    },
  },
})

export default theme
