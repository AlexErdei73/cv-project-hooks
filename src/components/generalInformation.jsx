import React, { Component } from "react";
import { PencilSquare } from "react-bootstrap-icons";

class GeneralInformation extends Component {
  state = {
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
problems by computers is good fun.I am looking for a company, which can lift my skills
and experience to professional level and in exchange can use my ideas and problem solving 
skills.My skills in web development are reaching from Linux, HTML, CSS, Bootstrap, 
JavaScript ES5, ES6, TypeScript, Angular, React and my toolset is growing as I keep on
going with my training.`,
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
          </div>
        </div>
      </div>
    );

    const page = (
      <div className="container">
        <h1 className="text-center">{this.state.name}</h1>
        <div className="text-center">{this.state.email}</div>
        <div className="text-center">{this.state.phone}</div>
        <br />
        <div className="row border border-dark">
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
