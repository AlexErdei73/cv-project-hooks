import React, { Component } from "react";
import GeneralInformation from "./components/generalInformation";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="bg-info text-center text-light p-2">CV Project</h1>
        <div className="row ">
          <div className="col-1"></div>
          <div className="col-10">
            <GeneralInformation />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
