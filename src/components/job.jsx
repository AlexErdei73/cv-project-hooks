import React, { Component } from "react";
import { Trash, PencilSquare } from "react-bootstrap-icons";

class Job extends Component {
  render() {
    const form = (
      <div className="col-md-12 m-4">
        <form onSubmit={(event) => this.props.onSubmit(event, this.props.id)}>
          <div className="row w-100">
            <div className="form-group col-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                value={this.props.job.title}
                onChange={(event) => this.props.onChange(this.props.id, event)}
                required
              />
            </div>
            <div className="form-group col-3">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                className="form-control"
                name="company"
                id="company"
                value={this.props.job.company}
                onChange={(event) => this.props.onChange(this.props.id, event)}
                required
              />
            </div>
            <div className="form-group col-3">
              <label htmlFor="dateFrom">Date From</label>
              <input
                type="date"
                className="form-control"
                name="dateFrom"
                id="dateFrom"
                value={this.props.job.dateFrom}
                onChange={(event) => this.props.onChange(this.props.id, event)}
                required
              />
            </div>
            <div className="form-group col-3">
              <label htmlFor="dateTo">Date To</label>
              <input
                type="date"
                className="form-control"
                name="dateTo"
                id="dateTo"
                value={this.props.job.dateTo}
                onChange={(event) => this.props.onChange(this.props.id, event)}
                required
              />
            </div>
          </div>
          <div className="row w-100">
            <div className="form-group col-12">
              <label htmlFor="description">description</label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                cols="30"
                rows="10"
                value={this.props.job.description}
                onChange={(event) => this.props.onChange(this.props.id, event)}
              ></textarea>
            </div>
          </div>
          <div className="row w-100">
            <button type="submit" className="btn btn-primary btn-sm m-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    );

    const page = (
      <div className="col-md-12">
        <h4>{this.props.job.title}</h4>
        <div className="text-left">
          <strong>
            {`${this.props.job.company} (${this.props.job.dateFrom} - ${this.props.job.dateTo})`}
          </strong>
        </div>
        <p>{this.props.job.description}</p>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onEdit(this.props.id)}
        >
          <PencilSquare />
        </button>
        {this.props.isDeleteButton && (
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            <Trash />
          </button>
        )}
      </div>
    );

    return (this.props.job.isEditing && form) || page;
  }
}

export default Job;
