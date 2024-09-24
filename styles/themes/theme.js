import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import colorPrimary from '../colors/colorPrimary';

// Create a theme instance.
const theme = createTheme({

	palette: {
		mode: 'light',
		divider : colorPrimary[100],
		primary: {
			main: colorPrimary[900],
			contrastText: "#fff"
		},
		secondary: {
			main: colorPrimary['A900'],
			contrastText: "#fff"
		},
		error: {
			main: red.A400,
			contrastText: "#000"
		},
		text : {
			primary: "#000",
			secondary: "#aaa",
			disabled: "#aaa"
		},
		background : {
			paper: "white",
			default: "white"
		},
		action : {
			selected: colorPrimary['A500'],
			// active: deepOrange[900],
			hover: colorPrimary[100],
			focus : colorPrimary[50],
			disabled : "#eee"
		}
	},

	typography: {
		h1:{
			fontSize : "3rem",
			fontWeight : 600
		},
		h2:{
			fontSize : "2rem",
			fontWeight : 600
		},
		h3:{
			fontSize : "1rem",
			fontWeight : 600
		},
		h4:{
			fontSize : "1rem",
		}
	}

});

export default theme;
