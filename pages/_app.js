import "../styles/global.css";
// import { I18nextProvider } from "react-i18next";
// import resources from "../config/catalog-en.JSON";
import React, { Component } from "react";
import Context from "../components/Context.js";
// import { faNodeJs, faCss3Alt, faJsSquare, faReact, faHtml5, } from '@fortawesome/free-brands-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'
import Head from "next/head";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 
import {theme, changeTheme} from "../styles/palette"
// const themeOriginal = {}

// themeOriginal.normal = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#8cdcff',
//       main: '#55aadd',
//       dark: '#057bab',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ffff8a',
//       main: '#ffd359',
//       dark: '#c9a226',
//       contrastText: '#000',
//     },
//   },
// });
// themeOriginal.fire = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#ff5131',
//       main: '#d50000',
//       dark: '#9b0000',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#efefef',
//       main: '#bdbdbd',
//       dark: '#8d8d8d',
//       contrastText: '#000000',
//     },
//   },
// });

class ContextProvider extends Component {
  componentDidMount(){
    const {geolocation, languages} = window.navigator
    this.setState({languages,geolocation}) 
  }
  chooseLng = (lng) => {
    // if(lng !== this.state.lng) this.setState({ lng: lng });
  };

  render() {
    return (
      <Context.Provider value={""}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
// var title = "Andy Tisba "

export default function App({ Component, pageProps }) {
  const title = "Andy Tisba"

  return (
    <React.Fragment>
      <Head>
        <link rel="icon" type="image/x-ico" href={`./images/dev-icon/dev-icon-0.ico`} />
    <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" data-auto-replace-svg></script>
       
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContextProvider>
      <MuiThemeProvider theme={theme}>
      {/* <select onChange={event=>{
        // console.log(themes[event.target.value])
        changeTheme(event.target.value)
        }}>
    <option value={1}>Fire</option>
    <option value={0}>Normal</option>
    </select> */}
        <Component {...pageProps} theme={theme}/>
      </MuiThemeProvider>
      </ContextProvider>
    </React.Fragment>
  );
}