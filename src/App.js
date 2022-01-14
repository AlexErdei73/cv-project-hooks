import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import GeneralInformation from "./components/generalInformation";
import Education from "./components/education";
import Job from "./components/job";
import { initialState } from "./initialData";

const App = () => {

  const emptyEducation = {
    school: "",
    dateFrom: "",
    dateTo: "",
    title: "",
    description: "",
    isEditing: true,
  };

  const emptyJob = {
    company: "",
    dateFrom: "",
    dateTo: "",
    title: "",
    description: "",
    isEditing: true,
  };

  const load = () => {
    if (localStorage.getItem("state")) {
      console.log("load");
      const state = JSON.parse(localStorage.getItem("state"));
      return state;
    }
  };

  const [state, setState] = useState(load() || initialState);

  const deepCopy = (inputObj) => {
    return JSON.parse(JSON.stringify(inputObj));
  };

  const deleteSectionItem = () => {
    const newState = deepCopy(state);
    newState[newState.sectionType].splice(newState.select, 1);
    newState.isModalShown = false;
    setState(newState);
  };

  const changeSectionItem = (id, sectionType, event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const newState = deepCopy(state);
    newState[sectionType][id][name] = value;
    setState(newState);
  };

  const addSectionItem = (item, sectionType) => {
    const newState = deepCopy(state);
    newState[sectionType].push(item);
    setState(newState);
  };

  const editSectionItem = (id, sectionType) => {
    const newState = deepCopy(state);
    newState[sectionType][id].isEditing = true;
    setState(newState);
  };

  const submitSectionItem = (event, id, sectionType) => {
    event.preventDefault();
    const newState = deepCopy(state);
    newState[sectionType][id].isEditing = false;
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

  const showModal = (id, sectionType) => {
    const newState = deepCopy(state);
    newState.select = id;
    newState.sectionType = sectionType;
    newState.isModalShown = true;
    setState(newState);
  };

  const hideModal = () => {
    const newState = deepCopy(state);
    newState.isModalShown = false;
    setState(newState);
  };

  const save = (newState) => {
    localStorage.setItem("state", JSON.stringify(newState));
  };

  useEffect(() => {
    save(state);
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
                    onDelete={(id, sectionType) => {
                      showModal(id, sectionType);
                    }}
                    onChange={changeSectionItem}
                    onEdit={editSectionItem}
                    onSubmit={(event, id, sectionType) =>
                      submitSectionItem(event, id, sectionType)
                    }
                    isDeleteButton={state.education.length > 1}
                  />
                );
              })}
            </div>
            <button
              type="submit"
              className="btn btn-secondary btn-sm m-2"
              onClick={() => addSectionItem(emptyEducation, "education")}
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
                    onDelete={(id, sectionType) => {
                      showModal(id, sectionType);
                    }}
                    onChange={changeSectionItem}
                    onEdit={editSectionItem}
                    onSubmit={(event, id, sectionType) =>
                      submitSectionItem(event, id, sectionType)
                    }
                    isDeleteButton={state.job.length > 1}
                  />
                );
              })}
            </div>
            <button
              type="submit"
              className="btn btn-secondary btn-sm m-2"
              onClick={() => addSectionItem(emptyJob, "job")}
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
                      onClick={() => deleteSectionItem(state.select)}
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
