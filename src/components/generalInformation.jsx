import React, { Component } from "react";
import { PencilSquare } from "react-bootstrap-icons";

class GeneralInformation extends Component {
  state = {
    isEditing: this.props.isEditing,
  };

  handleClick = (event) => {
    const isEditing = true;
    this.setState({ isEditing });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isEditing = false;
    this.setState({ isEditing });
  };

  render() {
    const form = (
      <div className="container">
        <div className="row border border-dark">
          <div className="col-md-12 m-4">
            <form>
              <div className="row w-100">
                <div className="form-group col-md-4">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Alex Erdei"
                    value={this.props.person.name}
                    onChange={this.props.onChange}
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
                    value={this.props.person.email}
                    onChange={this.props.onChange}
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
                    value={this.props.person.phone}
                    onChange={this.props.onChange}
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
                    value={this.props.person.personalInformation}
                    onChange={this.props.onChange}
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
          </div>
        </div>
      </div>
    );

    const page = (
      <div className="container">
        <h1 className="text-center">{this.props.person.name}</h1>
        <div className="text-center">{this.props.person.email}</div>
        <div className="text-center">{this.props.person.phone}</div>
        <br />
        <div className="row border border-dark">
          <h4 className="text-left bg-dark text-light w-100">
            Personal Information
          </h4>
          <p>{this.props.person.personalInformation}</p>
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
