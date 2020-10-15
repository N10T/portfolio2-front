import React from "react";
import Context from "./Context.js"

const withContext = (ComponentToPassPropsTo) => {
  return (props) => {
    return (
      <Context.Consumer>
        {(context) => {
          return (
            <ComponentToPassPropsTo {...props} context={context} />
          );
        }}
      </Context.Consumer>
    );
  };
};

export default withContext;
