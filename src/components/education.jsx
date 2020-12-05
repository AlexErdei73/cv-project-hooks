import React from "react";
import { Trash, PencilSquare } from "react-bootstrap-icons";

const Education = (props) => {
  const form = (
    <div className="col-md-12 m-4">
      <form onSubmit={(event) => props.onSubmit(event, props.id, "education")}>
        <div className="row w-100">
          <div className="form-group col-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={props.education.title}
              onChange={(event) => props.onChange(props.id, "education", event)}
              required
            />
          </div>
          <div className="form-group col-3">
            <label htmlFor="school">School</label>
            <input
              type="text"
              className="form-control"
              name="school"
              id="school"
              value={props.education.school}
              onChange={(event) => props.onChange(props.id, "education", event)}
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
              value={props.education.dateFrom}
              onChange={(event) => props.onChange(props.id, "education", event)}
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
              value={props.education.dateTo}
              onChange={(event) => props.onChange(props.id, "education", event)}
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
              value={props.education.description}
              onChange={(event) => props.onChange(props.id, "education", event)}
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
  );

  const page = (
    <div className="col-md-12">
      <h4>{props.education.title}</h4>
      <div className="text-left">
        <strong>
          {`${props.education.school} (${props.education.dateFrom} - ${props.education.dateTo})`}
        </strong>
      </div>
      <p>{props.education.description}</p>
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={() => props.onEdit(props.id, "education")}
      >
        <PencilSquare />
      </button>
      {props.isDeleteButton && (
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => {
            props.onDelete(props.id, "education");
          }}
        >
          <Trash />
        </button>
      )}
    </div>
  );

  return (props.education.isEditing && form) || page;
};

export default Education;
