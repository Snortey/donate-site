import React, { useState } from "react";
import "./UploadPic.css";
import { Link } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";

const UploadPic = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image")) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedMedia({ type: "image", data: reader.result });
        };
        reader.readAsDataURL(file);
      } else if (file.type.startsWith("video")) {
        setSelectedMedia({ type: "video", data: URL.createObjectURL(file) });
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.type.startsWith("image")) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedMedia({ type: "image", data: reader.result });
        };
        reader.readAsDataURL(file);
      } else if (file.type.startsWith("video")) {
        setSelectedMedia({ type: "video", data: URL.createObjectURL(file) });
      }
    }
  };

  return (
    <section className="upload_pic">
      <div className="upload_pic-left">
        <h5>Cover photo or video</h5>
        <h2>Add a cover photo or video</h2>
      </div>

      <div className="upload_pic-right">
        <form
          action=""
          className="upload_pic_form"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="upload_pic-header">
            <h3>Add Photo or Video</h3>
            <form className="upload_pic-main-space">
              <div
                className="upload-area"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {selectedMedia ? (
                  selectedMedia.type === "image" ? (
                    <img
                      src={selectedMedia.data}
                      alt="Uploaded"
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <video controls style={{ width: "100%", height: "100%" }}>
                      <source src={selectedMedia.data} />
                    </video>
                  )
                ) : (
                  <>
                    <label htmlFor="fileInput" className="upload-button">
                      <BiImageAdd className="upload_icon" />
                    </label>
                    <p className="upload_info">
                      Drag or click on the icon to upload your photo or video
                    </p>
                  </>
                )}
              </div>
              <input
                type="file"
                id="fileInput"
                accept="image/*, video/*"
                style={{ display: "none" }}
                onChange={handleMediaUpload}
              />
            </form>
          </div>

          <div className="upload_pic-button">
            <Link to={"/createdescriptions"} className="btn btn-primary">
              Continue
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UploadPic;
