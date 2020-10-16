import "../styles/global.css";
import { I18nextProvider } from "react-i18next";
import resources from "../config/catalog-en.JSON";
import React, { Component } from "react";
import Context from "../components/Context.js";
import Head from "next/head";

class ContextProvider extends Component {
  state = {
    lng: "fr",
    resources: resources,
  };

  chooseLng = (lng) => {
    // if(lng !== this.state.lng) this.setState({ lng: lng });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, chooseLng: this.chooseLng }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
// var title = "Andy Tisba "
export default function App({ Component, pageProps }) {
  const [ico, setIco] = React.useState(1);
  const [title, setTitle] = React.useState("> > > Andy Tisba > > > ");
  // const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    const intervalTitle = setInterval(() => {
      setTitle(
        (oldTitle) => oldTitle[oldTitle.length - 1] + oldTitle.substring(0, oldTitle.length - 1)
      );
      setIco(oldNb=> (oldNb +1) %6)
    }, 300);
    // const intervalIco = setInterval(() => {
    //   setIco(oldIco => oldIco === "./images/dev.ico" ? "./images/dev-black.ico" : "./images/dev.ico")
    // }, 3000);
    return () => {
      console.log("Bye Bye");
      clearInterval(intervalTitle);
      // clearInterval(intervalIco);
    };
  }, []);
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" type="image/x-ico" href={`./images/dev-icon/dev-icon-${ico+1}.ico`} />
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </React.Fragment>
  );
}
