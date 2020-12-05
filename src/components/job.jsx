import React from "react";
import { Trash, PencilSquare } from "react-bootstrap-icons";

const Job = (props) => {
  const form = (
    <div className="col-md-12 m-4">
      <form onSubmit={(event) => props.onSubmit(event, props.id, "job")}>
        <div className="row w-100">
          <div className="form-group col-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={props.job.title}
              onChange={(event) => props.onChange(props.id, "job", event)}
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
              value={props.job.company}
              onChange={(event) => props.onChange(props.id, "job", event)}
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
              value={props.job.dateFrom}
              onChange={(event) => props.onChange(props.id, "job", event)}
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
              value={props.job.dateTo}
              onChange={(event) => props.onChange(props.id, "job", event)}
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
              value={props.job.description}
              onChange={(event) => props.onChange(props.id, "job", event)}
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
      <h4>{props.job.title}</h4>
      <div className="text-left">
        <strong>
          {`${props.job.company} (${props.job.dateFrom} - ${props.job.dateTo})`}
        </strong>
      </div>
      <p>{props.job.description}</p>
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={() => props.onEdit(props.id, "job")}
      >
        <PencilSquare />
      </button>
      {props.isDeleteButton && (
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => props.onDelete(props.id, "job")}
        >
          <Trash />
        </button>
      )}
    </div>
  );

  return (props.job.isEditing && form) || page;
};

export default Job;
