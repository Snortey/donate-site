import React, { useState } from "react";
import "./CreateDescription.css";
import { Link } from "react-router-dom";

const CreateDescription = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <section className="upload_description">
      <div className="upload_description-left">
        <h5>Define your Fundraiser</h5>
        <h2>Describe to why you’re raising funds.</h2>
      </div>

      <div className="upload_description-right">
        <form
          action=""
          className="upload_description_form"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="upload_description-header-title">
            <h3>Title</h3>
            <div className="upload_description-title">
              <input
                type="text"
                placeholder="Title"
                className="description-title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
          </div>
          <div className="upload_description-header-description">
            <h3>Description</h3>
            <div className="upload_description-description">
              <textarea
                type="text"
                placeholder="Describe what your fundraising is about"
                className="description-description"
                value={description}
                onChange={handleDescriptionChange}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>

          <div className="upload_description-button">
            <Link to={"/reviews"} className="btn btn-primary">
              Review
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateDescription;
