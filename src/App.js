import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import GeneralInformation from "./components/generalInformation";
import Education from "./components/education";
import Job from "./components/job";

class App extends Component {
  state = {
    education: [
      {
        school: "Obuda University John von Neumann Faculty of Informatics",
        dateFrom: "2003-09-01",
        dateTo: "2006-06-30",
        title: "IT Engineer",
        description: `It was a 4 years long IT engineering course with the apropriate exam levels.
We learned about hardware and software as well from the basics.The software started from the algorithms 
and data structures and went up towards OOP.The language of the training was Pascal that time. We also
learnt some Delphi, C, C++, Java and even some assembly programming of micro controllers.We had an excessive
subject about hardware architecture and we also learned about networking.Unfortunately I have only completed
3 years out of the 4 and never graduated with them.I've managed to find a junior developer position in Hungary
and I thought that I didn't need that lot's of theory to build up a career. I might have been right if the
recession had not happened in 2008, when I became redundant and I decided to come to the UK.`,
        isEditing: false,
      },
      {
        school: "Eötvös Lóránt University, Science Faculty",
        dateFrom: "1992-09-01",
        dateTo: "1997-06-30",
        title: "Degree in chemistry and physics",
        description: `I finished my studies with a very good qualification. It enables me to 
teach physics and chemistry.`,
        isEditing: false,
      },
    ],
    job: [
      {
        company: "freelancer",
        dateFrom: "2009-03-16",
        dateTo: "2020-11-22",
        title: "Web Developer",
        description: `After I arrived to the UK, the focus was on learning English and settling down.
It wasn't easy, but I've managed to do it nicely. The only problem, that I needed to do jobs, which I
was over qualified for.I couldn't get a developer position without speaking English very well.I picked
up some freelance work from time to time just to keep my skills alive and tried to learn new technologies.
During all these years the technology has improved a lot, so I decided to actualize my knowledge with a
free online course, which is the best available on the web.I've found The Odin Project this way, which I've
been doing actively since January 2020 before the first COVID-19 lockdown happened.`,
        isEditing: false,
      },
    ],
    isModalShown: false,
  };

  select = 1;

  deleteEducation = () => {
    const education = [...this.state.education];
    education.splice(this.select, 1);
    this.setState({
      education,
      isModalShown: false,
    });
  };

  onDelete = this.deleteEducation;

  changeEducation = (id, event) => {
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
      isEditing: true,
    });
    this.setState({ education });
  };

  deleteJob = () => {
    const job = [...this.state.job];
    job.splice(this.select, 1);
    this.setState({
      job,
      isModalShown: false,
    });
  };

  changeJob = (id, event) => {
    const target = event.target;
    const name = target.name;
    const job = [...this.state.job];
    const value = target.value;
    const newState = { ...job[id] };
    newState[name] = value;
    job[id] = newState;
    this.setState({ job });
  };

  addJob = () => {
    const job = [...this.state.job];
    job.push({
      company: "",
      dateFrom: "",
      dateTo: "",
      title: "",
      description: "",
      isEditing: true,
    });
    this.setState({ job });
  };

  showModal = (id, onDelete) => {
    this.select = id;
    this.onDelete = onDelete;
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
                        this.showModal(id, this.deleteEducation);
                      }}
                      onChange={this.changeEducation}
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
              <div className="row border border-dark">
                <h4 className="text-left bg-dark text-light w-100">
                  Work History
                </h4>
                {this.state.job.map((item, index) => {
                  return (
                    <Job
                      key={index}
                      id={index}
                      job={item}
                      onDelete={(id) => {
                        this.showModal(id, this.deleteJob);
                      }}
                      onChange={this.changeJob}
                      isDeleteButton={this.state.job.length > 1}
                    />
                  );
                })}
              </div>
              <button
                type="submit"
                className="btn btn-secondary btn-sm m-2"
                onClick={this.addJob}
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
                  <p>
                    Are you sure, you want to delete the section permanently?
                  </p>
                  <div className="row">
                    <div className="col-md-3">
                      <button
                        className="btn btn-primary btn-sm m-2"
                        onClick={this.hideModal}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                      <button
                        className="btn btn-warning btn-sm m-2"
                        onClick={this.onDelete}
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
