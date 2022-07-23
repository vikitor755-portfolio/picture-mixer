import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let defaultTheme = createTheme();
const theme = responsiveFontSizes(defaultTheme);

export default theme;