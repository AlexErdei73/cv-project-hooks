import React, { Component } from "react";
import { Trash, PencilSquare } from "react-bootstrap-icons";

class GeneralInformation extends Component {
  state = {
    /*name: "",
    email: "",
    phone: "",
    personalInformation: "asda",
    isEditing: false,
    value: "asda",*/
  };

  handleClick = (event) => {
    const isEditing = true;
    this.setState({ isEditing });
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isEditing = false;
    this.setState({ isEditing });
  };

  render() {
    const form = (
      <form className="p-3 border border-dark shadow">
        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Alex Erdei"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="alex73@freemail.hu"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="07496034244"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <label htmlFor="personalInformation">Personal Information</label>
            <textarea
              className="form-control"
              name="personalInformation"
              id="personalInformation"
              cols="30"
              rows="10"
              value={this.state.personalInformation}
              onChange={this.handleChange}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <button
            type="submit"
            className="btn btn-primary btn-sm m-3"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    );

    const page = (
      <div className="container">
        <h1 className="text-center">{this.state.name}</h1>
        <div className="text-center">{this.state.email}</div>
        <div className="text-center">{this.state.phone}</div>
        <br />
        <div className="row border border-dark border-bottom-3">
          <h4 className="text-left bg-dark text-light w-100">
            Personal Information
          </h4>
          <p>{this.state.personalInformation}</p>
        </div>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleClick}
        >
          <PencilSquare />
        </button>
      </div>
    );

    return (this.state.isEditing && form) || page;
  }
}

export default GeneralInformation;
