import { createMuiTheme } from '@material-ui/core/styles'

const theme1 = createMuiTheme({
  palette: {
    primary: {
      light: '#8cdcff',
      main: '#55aadd',
      dark: '#057bab',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffff8a',
      main: '#ffd359',
      dark: '#c9a226',
      contrastText: '#000',
    },
  },
});
const theme2 = createMuiTheme({
  palette: {
    primary: {
      light: '#ff5131',
      main: '#d50000',
      dark: '#9b0000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#efefef',
      main: '#bdbdbd',
      dark: '#8d8d8d',
      contrastText: '#000000',
    },
  },
});

const themes = [theme1, theme2]
let theme = themes[0]
/**
 * @param  {number} "the index of the array"
 */
function changeTheme(number) {
  theme = themes[number]
  console.log(console.log('%c Theme change ! ', 'background: #222; color: #bada55'))
}
export {theme, changeTheme}