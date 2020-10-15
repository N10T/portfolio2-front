import "../styles/global.css";
import { I18nextProvider } from "react-i18next";
import resources from "../config/catalog-en.JSON";
import React, { Component } from "react";
import Context from "../components/Context.js";


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

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
