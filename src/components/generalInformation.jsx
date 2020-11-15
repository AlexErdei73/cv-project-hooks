import React, { Component } from "react";

class GeneralInformation extends Component {
  state = {};
  render() {
    return (
      <form className="p-3 border border-dark shadow">
        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Alex Erdei"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="alex73@freemail.hu"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="07496034244"
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
            ></textarea>
          </div>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-primary btn-sm m-3">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default GeneralInformation;
