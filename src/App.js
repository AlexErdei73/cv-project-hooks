import React, { Component } from "react";
import GeneralInformation from "./components/generalInformation";
import Education from "./components/education";

class App extends Component {
  state = {
    renderEducation: true,
  };

  handleDelete = () => {
    const renderEducation = false;
    this.setState({ renderEducation });
  };

  render() {
    return (
      <div>
        <h1 className="bg-info text-center text-light p-2">CV Project</h1>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 border-secondary shadow">
            <GeneralInformation />
            {this.state.renderEducation && (
              <Education onDelete={this.handleDelete} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
