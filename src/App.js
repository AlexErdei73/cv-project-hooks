import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import GeneralInformation from "./components/generalInformation";
import Education from "./components/education";

class App extends Component {
  state = {
    education: [
      {
        school: "Obuda University John von Neumann Faculty of Informatics",
        dateFrom: "2003-09-01",
        dateTo: "2006-06-30",
        title: "IT Engineer",
        description: `It was a 4 years long IT engineering course with very difficult exams.
      We learned about hardware and software as well from the basics. The software started
      from the algorythms and data structures and went up towards OOP. The trainy language
      was Pascal that time. We also learnt some Delphi, C, C++, Java and even some assembly
      programming of micro controllers. We had an excessive subject about hardware architecture.
      We also learned about networking.`,
      },
      {
        school: "Eötvös Lóránt University, Science Faculty",
        dateFrom: "1992-09-01",
        dateTo: "1997-06-30",
        title: "Degree in chemistry and physics",
        description: `I finished my studies with a very good qualification. It enables me to 
        teach physics and chemistry. `,
      },
    ],
    isModalShown: false,
  };

  select = 1;

  handleDelete = () => {
    const education = [...this.state.education];
    education.splice(this.select, 1);
    this.setState({
      education,
      isModalShown: false,
    });
  };

  handleChange = (id, event) => {
    const target = event.target;
    const name = target.name;
    const education = [...this.state.education];
    const value = target.value;
    const newState = { ...education[id] };
    newState[name] = value;
    education[id] = newState;
    this.setState({ education });
  };

  addEducation = () => {
    const education = [...this.state.education];
    education.push({
      school: "",
      dateFrom: "",
      dateTo: "",
      title: "",
      description: "",
    });
    this.setState({ education });
  };

  showModal = (id) => {
    this.select = id;
    this.setState({ isModalShown: true });
  };

  hideModal = () => {
    this.setState({ isModalShown: false });
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
                {this.state.education.map((item, index) => {
                  return (
                    <Education
                      key={index}
                      id={index}
                      education={item}
                      onDelete={(id) => {
                        this.showModal(id);
                      }}
                      onChange={this.handleChange}
                      isDeleteButton={this.state.education.length > 1}
                    />
                  );
                })}
              </div>
              <button
                type="submit"
                className="btn btn-secondary btn-sm m-2"
                onClick={this.addEducation}
              >
                +
              </button>
              <Modal
                show={this.state.isModalShown}
                dialogClassName="primaryModal"
              >
                <Modal.Header className="bg-dark">
                  <h2 className="text-warning text-center p-2">
                    Proceeding with Delete
                  </h2>
                </Modal.Header>
                <Modal.Body>
                  Are you sure, you want to delete the section permanently?
                </Modal.Body>
                <Modal.Footer>
                  <button onClick={this.hideModal}>Cancel</button>
                  <button onClick={this.handleDelete}>Proceed</button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
