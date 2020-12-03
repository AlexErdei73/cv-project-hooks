import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import GeneralInformation from "./components/generalInformation";
import Education from "./components/education";
import Job from "./components/job";

const App = () => {
  const deepCopy = (inputObj) => {
    return JSON.parse(JSON.stringify(inputObj));
  };

  const deleteEducation = (id) => {
    const newState = deepCopy(state);
    console.log("delete edu", id);
    newState.education.splice(id, 1);
    newState.isModalShown = false;
    newState.select = id;
    setState(newState);
  };

  const deleteJob = () => {
    console.log(state.onDelete);
    console.log(state.select);
    const newState = deepCopy(state);
    newState.job.splice(state.select, 1);
    //newState.isModalShown = false;
    setState(newState);
  };

  const initialState = {
    person: {
      name: "Alex Erdei",
      email: "mralexerdei@yahoo.co.uk",
      phone: "07496034244",
      personalInformation: `Currently I am working on a project, 
which can automate the administration and the quality control procedures 
for a cleaning company in the hotel industry.The ideas come partially from me, 
the execution is my work guided by the feedback from my manager. 
Recently I have got the idea for a late career change to achieve my full potential
and use my stronger mathematics and problem solving skills.I have realized that 
I should go back to the field,which I had formally studied and used to work in,but
unfortunately I have never completed my formal education fully.In the current situation
I have to wait to sell the project to the company,but I do not mind it,because solving 
problems by computers is good fun.I realized that I should learn webdevelopment, because 
currently most of the software developer jobs are in it.I am looking for a company, which is
happy to use my web developer skills and in favour can provide intersting, function rich
projects, so I can get payed for doing something, which I love.My skills in web development
are reaching from Linux, git, gitHub, HTML, CSS, Bootstrap, JavaScript ES5, ES6, TypeScript,
npm, webpack, Angular, React. My toolset is growing.`,
      isEditing: false,
    },
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
        company: "Freelancer",
        dateFrom: "2009-03-16",
        dateTo: "2020-11-22",
        title: "Web Developer",
        description: `After I arrived to the UK, the focus was on learning English and settling down.
It wasn't easy, but I've managed to do it nicely. The only problem, that I needed to do jobs, which I
was over qualified for.I couldn't get a developer position without speaking English very well.I picked
up some freelance work from time to time just to keep my skills alive and tried to learn new technologies.
During all these years the technology has improved a lot, so I decided to actualize my knowledge with a
free online course, which is the best available on the web.I've found The Odin Project, which I've
been doing actively since January 2020 before the first COVID-19 lockdown happened.`,
        isEditing: false,
      },
      {
        company: "Citibank Zrt.",
        dateFrom: "2006-02-01",
        dateTo: "2009-01-31",
        title: "Software Developer",
        description: `My duties were very specific. I contributed to the coding of certain Delphi programs,
which mostly dealt with data analysis of risk assessment in the corporate and retail sector too. Because of
the nature of the business security and confidentiality was the first priority.`,
        isEditing: false,
      },
    ],
    select: -5,
    onDelete: deleteEducation,
    isModalShown: false,
  };

  const load = () => {
    if (localStorage.getItem("state")) {
      console.log("load");
      const state = JSON.parse(localStorage.getItem("state"));
      return state;
    }
  };

  console.log("it starts the App function again!");
  const [state, setState] = useState(initialState);
  console.log("id:", state.select);

  const changeEducation = (id, event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const newState = deepCopy(state);
    newState.education[id][name] = value;
    setState(newState);
  };

  const addEducation = () => {
    const newState = deepCopy(state);
    newState.education.push({
      school: "",
      dateFrom: "",
      dateTo: "",
      title: "",
      description: "",
      isEditing: true,
    });
    setState(newState);
  };

  const changeJob = (id, event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const newState = deepCopy(state);
    newState.job[id][name] = value;
    setState(newState);
  };

  const addJob = () => {
    const newState = deepCopy(state);
    newState.job.push({
      company: "",
      dateFrom: "",
      dateTo: "",
      title: "",
      description: "",
      isEditing: true,
    });
    setState(newState);
  };

  const editJob = (id) => {
    const newState = deepCopy(state);
    newState.job[id].isEditing = true;
    setState(newState);
  };

  const submitJob = (event, id) => {
    event.preventDefault();
    const newState = deepCopy(state);
    newState.job[id].isEditing = false;
    setState(newState);
  };

  const changePerson = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const newState = deepCopy(state);
    newState.person[name] = value;
    setState(newState);
  };

  const showModal = (id, inputOnDelete) => {
    const newState = deepCopy(state);
    newState.select = id;
    console.log("showModal", newState.select);
    newState.onDelete = inputOnDelete;
    newState.isModalShown = true;
    setState(newState);
    console.log("it gets here after updating the state!");
    console.log("the state.select after this:", state.select);
  };

  const hideModal = () => {
    const newState = deepCopy(state);
    newState.isModalShown = false;
    setState(newState);
  };

  const save = (newState) => {
    console.log("save, id:", newState.select);
    localStorage.setItem("state", JSON.stringify(newState));
  };

  useEffect(() => {
    save(state);
    console.log("id:", state.select);
  }, [state]);

  return (
    <div>
      <h1 className="bg-info text-center text-light p-2">CV Project</h1>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 border-secondary shadow">
          <GeneralInformation person={state.person} onChange={changePerson} />
          <div className="container">
            <div className="row border border-dark">
              <h4 className="text-left bg-dark text-light w-100">Education</h4>
              {state.education.map((item, index) => {
                return (
                  <Education
                    key={index}
                    id={index}
                    education={item}
                    onDelete={(id) => {
                      showModal(id, deleteEducation);
                    }}
                    onChange={changeEducation}
                    isDeleteButton={state.education.length > 1}
                  />
                );
              })}
            </div>
            <button
              type="submit"
              className="btn btn-secondary btn-sm m-2"
              onClick={addEducation}
            >
              +
            </button>
            <div className="row border border-dark">
              <h4 className="text-left bg-dark text-light w-100">
                Work History
              </h4>
              {state.job.map((item, index) => {
                return (
                  <Job
                    key={index}
                    id={index}
                    job={item}
                    onDelete={(id) => {
                      showModal(id, deleteJob);
                    }}
                    onChange={changeJob}
                    onEdit={editJob}
                    onSubmit={(event, id) => submitJob(event, id)}
                    isDeleteButton={state.job.length > 1}
                  />
                );
              })}
            </div>
            <button
              type="submit"
              className="btn btn-secondary btn-sm m-2"
              onClick={addJob}
            >
              +
            </button>
            <Modal show={state.isModalShown} dialogClassName="primaryModal">
              <Modal.Header className="bg-dark">
                <h2 className="text-warning text-center p-2">
                  Proceeding with Delete
                </h2>
              </Modal.Header>
              <Modal.Body>
                <p>Are you sure, you want to delete the section permanently?</p>
                <div className="row">
                  <div className="col-md-3">
                    <button
                      className="btn btn-primary btn-sm m-2"
                      onClick={hideModal}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-warning btn-sm m-2"
                      onClick={() => state.onDelete(state.select)}
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
};

export default App;
