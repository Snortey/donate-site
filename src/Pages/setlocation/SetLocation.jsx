import React, { useState } from "react";
import "./SetLocation.css";
import { Link } from "react-router-dom";
import { GrMapLocation } from "react-icons/gr";

const SetLocation = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategorySelection = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <section className="location">
      <div className="location-left">
        <Link to={"/"} className="loca_home">
          Dona.te
        </Link>
        <h2>Let’s get your organization onboard</h2>
      </div>

      <div className="location-right">
        <form
          action=""
          className="location_form"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="location_form-header">
            <h2>Where is the organization located?</h2>
            <div className="location_form-header-feild">
              <input
                type="text"
                placeholder="Location"
                className="location-title"
                // value={title}
                // onChange={handleTitleChange}
              />
              <GrMapLocation className="set_location-icon" />
            </div>
          </div>
          <div className="location_form-footer">
            <h2>What best describes your organization?</h2>
            <div className="location_form-footer-feild">
              <div className="location_category-filter-items">
                <li
                  onClick={() => toggleCategorySelection("Business")}
                  className={
                    selectedCategories.includes("Business") ? "active" : ""
                  }
                >
                  Business
                </li>
                <li
                  onClick={() => toggleCategorySelection("Charity")}
                  className={
                    selectedCategories.includes("Charity") ? "active" : ""
                  }
                >
                  Charity
                </li>
                <li
                  onClick={() => toggleCategorySelection("Community")}
                  className={
                    selectedCategories.includes("Community") ? "active" : ""
                  }
                >
                  Community
                </li>
                <li
                  onClick={() => toggleCategorySelection("Education")}
                  className={
                    selectedCategories.includes("Education") ? "active" : ""
                  }
                >
                  Education
                </li>
                <li
                  onClick={() => toggleCategorySelection("Faith")}
                  className={
                    selectedCategories.includes("Faith") ? "active" : ""
                  }
                >
                  Faith
                </li>
                <li
                  onClick={() => toggleCategorySelection("Non-profit")}
                  className={
                    selectedCategories.includes("Non-profit") ? "active" : ""
                  }
                >
                  Non-profit
                </li>
                <li
                  onClick={() => toggleCategorySelection("Agency")}
                  className={
                    selectedCategories.includes("Agency") ? "active" : ""
                  }
                >
                  Agency
                </li>
                <li
                  onClick={() => toggleCategorySelection("Medical")}
                  className={
                    selectedCategories.includes("Medical") ? "active" : ""
                  }
                >
                  Medical
                </li>
                <li
                  onClick={() => toggleCategorySelection("Technology")}
                  className={
                    selectedCategories.includes("Technology") ? "active" : ""
                  }
                >
                  Technology
                </li>
                <li
                  onClick={() => toggleCategorySelection("Sports")}
                  className={
                    selectedCategories.includes("Sports") ? "active" : ""
                  }
                >
                  Sports
                </li>
                <li
                  onClick={() => toggleCategorySelection("Volunteer")}
                  className={
                    selectedCategories.includes("Volunteer") ? "active" : ""
                  }
                >
                  Volunteer
                </li>
                <li
                  onClick={() => toggleCategorySelection("other")}
                  className={
                    selectedCategories.includes("other") ? "active" : ""
                  }
                >
                  other
                </li>
              </div>
            </div>
          </div>
          <div className="upload_location-button">
            <Link to={"/"} className="btn btn-primary">
              Continue
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SetLocation;
