import React, { Component } from "react";
import { Trash, PencilSquare } from "react-bootstrap-icons";

class Education extends Component {
  state = {
    school: "",
    dateFrom: new Date(0),
    dateTo: new Date(0),
    title: "",
    description: "",
    isEditing: false,
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
            <label htmlFor="school">School</label>
            <input
              type="text"
              className="form-control"
              name="school"
              id="school"
              placeholder=""
              value={this.state.school}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="dateFrom">Date From</label>
            <input
              type="date"
              className="form-control"
              name="dateFrom"
              id="dateFrom"
              placeholder=""
              value={this.state.dateFrom}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="dateTo">Date To</label>
            <input
              type="date"
              className="form-control"
              name="dateTo"
              id="dateTo"
              placeholder=""
              value={this.state.dateTo}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <label htmlFor="description">description</label>
            <textarea
              className="form-control"
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={this.state.description}
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
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.props.onDelete}
        >
          <Trash />
        </button>
      </div>
    );

    return (this.state.isEditing && form) || page;
  }
}

export default Education;
