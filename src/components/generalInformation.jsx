import React, { useState } from "react";
import { PencilSquare } from "react-bootstrap-icons";

const GeneralInformation = (props) => {
  const [isEditing, setIsEditing] = useState(props.isEditing);

  const handleClick = (event) => {
    setIsEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  const form = (
    <div className="container">
      <div className="row border border-dark">
        <div className="col-md-12 m-4">
          <form onSubmit={handleSubmit}>
            <div className="row w-100">
              <div className="form-group col-md-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  value={props.person.name}
                  onChange={props.onChange}
                  required
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={props.person.email}
                  onChange={props.onChange}
                  required
                  pattern
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  value={props.person.phone}
                  onChange={props.onChange}
                />
              </div>
            </div>
            <div className="row w-100">
              <div className="form-group col-md-12">
                <label htmlFor="webpage">Webpage</label>
                <input
                  type="text"
                  className="form-control"
                  name="webpage"
                  id="webpage"
                  value={props.person.webpage}
                  onChange={props.onChange}
                />
              </div>
            </div>
            <div className="row w-100">
              <div className="form-group col-md-12">
                <label htmlFor="personalInformation">
                  Personal Information
                </label>
                <textarea
                  className="form-control"
                  name="personalInformation"
                  id="personalInformation"
                  cols="30"
                  rows="10"
                  value={props.person.personalInformation}
                  onChange={props.onChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="row">
              <button type="submit" className="btn btn-primary btn-sm m-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const page = (
    <div className="container">
      <h1 className="text-center">{props.person.name}</h1>
      <div className="text-center">{props.person.email}</div>
      <div className="text-center">{props.person.phone}</div>
      <a className="d-block text-center link" href={props.person.webpage}>
        webpage
      </a>
      <br />
      <div className="row border border-dark">
        <h4 className="text-left bg-dark text-light w-100">
          Personal Information
        </h4>
        <p>{props.person.personalInformation}</p>
      </div>
      <button className="btn btn-secondary btn-sm m-2" onClick={handleClick}>
        <PencilSquare />
      </button>
    </div>
  );

  return (isEditing && form) || page;
};

export default GeneralInformation;
