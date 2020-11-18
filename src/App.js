import React, { Component } from "react";
import GeneralInformation from "./components/generalInformation";
import Education from "./components/education";

class App extends Component {
  state = {
    education: [
      {
        school: "Obuda University John von Neumann Faculty of Informatics",
        dateFrom: "01/09/2003",
        dateTo: "30/06/2006",
        title: "IT Engineer",
        description: `It was a 4 years long IT engineering course with very difficult exams.
      We learned about hardware and software as well from the basics. The software started
      from the algorythms and data structures and went up towards OOP. The trainy language
      was Pascal that time. We also learnt some Delphi, C, C++, Java and even some assembly
      programming of micro controllers. We had an excessive subject about hardware architecture.
      We also learned about networking.`,
      },
      {
        school: "",
        dateFrom: "",
        dateTo: "",
        title: "",
        description: "",
      },
    ],
    renderEducation: true,
  };

  handleDelete = () => {
    const renderEducation = false;
    this.setState({ renderEducation });
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const education = [...this.state.education];
    const value = target.value;
    const newState = education[0];
    newState[name] = value;
    education[0] = newState;
    this.setState({ education });
  };

  render() {
    return (
      <div>
        <h1 className="bg-info text-center text-light p-2">CV Project</h1>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 border-secondary shadow">
            <GeneralInformation />
            <div className="container">
              <div className="row border border-dark">
                <h4 className="text-left bg-dark text-light w-100">
                  Education
                </h4>
                {this.state.renderEducation && (
                  <Education
                    education={this.state.education[0]}
                    onDelete={this.handleDelete}
                    onChange={this.handleChange}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
