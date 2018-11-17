import React from "react";
import ReactDOM from "react-dom";

import Confirm from "./Confirm";
import "@reach/dialog/styles.css";
import "./styles.css";

class App extends React.Component {
  state = {
    select: "open"
  };

  handleSubmit = () => console.log("opa");

  handleStatusChange = event => {
    this.setState({ select: event.target.value });
  };

  handleReset = event => alert("Resetted");

  render() {
    return (
      <div className="App">
        <Confirm title="Confirm" description="Are you sure?">
          {confirm => (
            <div>
              <button onClick={confirm(this.handleSubmit)}>Click</button>
            </div>
          )}
        </Confirm>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
