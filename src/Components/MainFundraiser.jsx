import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiSliderAlt } from "react-icons/bi";
import { BiDonateHeart } from "react-icons/bi";
import PATIMAGE from "../Assets/photo_2023-07-07_22-47-15.jpg";
import AVATAR2 from "../Assets/photo_2023-07-07_22-47-18.jpg";
import AVATAR3 from "../Assets/photo_2023-07-07_22-47-25.jpg";
import AVATAR4 from "../Assets/photo_2023-07-07_22-47-29.jpg";
import IMG1 from "../Assets/1670487955908.jpg";
import IMG2 from "../Assets/1670487955908.jpg";
import IMG3 from "../Assets/1670487955908.jpg";
import IMG4 from "../Assets/1670487955908.jpg";
import IMG5 from "../Assets/1670487955908.jpg";
import IMG6 from "../Assets/1670487955908.jpg";
import IMG7 from "../Assets/1670487955908.jpg";
import IMG8 from "../Assets/1670487955908.jpg";
import IMG9 from "../Assets/1670487955908.jpg";

const data = [
  {
    id: 1,
    organizationName: "Life4Kids Charity Organization",
    image: IMG1,
    organizationType: "Non-profit",
  },
  {
    id: 2,
    organizationName: "Life4Kids Charity Organization",
    image: IMG2,
    organizationType: "Agency",
  },
  {
    id: 3,
    organizationName: "UNICEF",
    image: IMG3,
    organizationType: "Organization",
  },
  {
    id: 4,
    organizationName: "UNICEF",
    image: IMG4,
    organizationType: "Agency",
  },
  {
    id: 5,
    organizationName: "UNICEF",
    image: IMG5,
    organizationType: "Agency",
  },
  {
    id: 6,
    organizationName: "UNICEF",
    image: IMG6,
    organizationType: "Agency",
  },
  {
    id: 7,
    organizationName: "UNICEF",
    image: IMG7,
    organizationType: "Organization",
  },
  {
    id: 8,
    organizationName: "UNICEF",
    image: IMG8,
    organizationType: "Non-profit",
  },
  {
    id: 9,
    organizationName: "UNICEF",
    image: IMG9,
    organizationType: "Non-profit",
  },
];

const MainFundraiser = () => {
  const [Search, setSearch] = useState(" ");
  console.log(Search);
  const [selectedItem, setSelectedItem] = useState(data[0]);

  function getBackgroundColor(organizationType) {
    switch (organizationType) {
      case "Non-profit":
        return "#c0392b";
      case "Agency":
        return "#f8ca80";
      case "Organization":
        return "#1abc9ccc";
      default:
        return "initial";
    }
  }

  return (
    <section className="fundraiser_container">
      <div className="fundraiser_header-section">
        <h2>Search for Fundraisers</h2>
        <p className="fundraiser_header-paragraph">
          Browse through our list of individual, corporate and non-governmental
          organizations championing a good cause
        </p>
        <form action="" className="fundraiser_search_bar">
          <div class="fundraiser_input_field">
            <BsSearch className="fundraiser_input_icon" />
            <input
              type="organizationType"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="fundraiser_filter-section">
        <div className="fundraiser_filter-section-top">
          <div className="filter_option">
            <small>filter</small>
            <BiSliderAlt className="filter_icon" />
          </div>
          <div className="filter_content">
            <div className="filter_content-left"></div>
            <div className="filter_content-right"></div>
          </div>
        </div>
        <div className="fundraiser_filter-section-down">
          <div
            className={`fundraiser_filter-section-left ${selectedItem.organizationType}`}
          >
            {selectedItem && (
              <div
                className={`filter_item-list ${selectedItem.organizationType}`}
                style={{
                  "--bg-color": getBackgroundColor(
                    selectedItem.organizationType
                  ),
                }}
              >
                <img src={selectedItem.image} alt="" />
                <small
                  className="smalltype"
                  style={{ backgroundColor: "var(--bg-color)" }}
                >
                  {selectedItem.organizationType}
                </small>
                <h3>{selectedItem.organizationName}</h3>
              </div>
            )}
          </div>
          <div className="fundraiser_filter-section-right">
            <article className="filter_item-container">
              {data
                .filter((item) => {
                  return (
                    Search.trim() === "" ||
                    item.organizationName
                      .toLowerCase()
                      .includes(Search.toLowerCase()) ||
                    item.organizationType
                      .toLowerCase()
                      .includes(Search.toLowerCase())
                  );
                })
                .map(({ organizationName, organizationType, image }, index) => {
                  const typeClass = organizationType.toLowerCase();
                  const itemClasses = `filter_item-list ${typeClass} ${
                    index >= 4 ? "hidden" : "" // Add a "hidden" class for items beyond the first 4
                  }`;
                  return (
                    <div
                      className={itemClasses}
                      key={index}
                      onClick={() => setSelectedItem(data[index])}
                    >
                      <img src={image} alt="" />
                      <small>{organizationType}</small>
                      <h3>{organizationName}</h3>
                    </div>
                  );
                })}
            </article>
          </div>
        </div>
      </div>
      <div className="fundraiser_partner-section">
        <div className="fundraiser_partner-section-left">
          <img src={PATIMAGE} alt="" />
        </div>
        <div className="fundraiser_partner-section-right">
          <h2>Become a Partner</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu
            pulvinar eu consequat quisque id at.
          </p>
          <Link to={"/usersignup"} className="btn ">
            {" "}
            Sign up
          </Link>
        </div>
      </div>
      <div className="fundraiser_contact-section">
        <h2>Contact us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu
          pulvinar eu consequat quisque id at.
        </p>
        <Link to={" "} className="btn btn-primary">
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default MainFundraiser;
