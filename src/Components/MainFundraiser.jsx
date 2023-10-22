import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiSliderAlt } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import PATIMAGE from "../Assets/photo_2023-07-07_22-47-15.jpg";
import IMG1 from "../Assets/1670487955908.jpg";
import IMG2 from "../Assets/1670487957332.jpg";
import IMG3 from "../Assets/1670487959827 (1).jpg";
import IMG4 from "../Assets/1670735162569.jpg";
import IMG5 from "../Assets/photo_2023-07-07_22-47-15.jpg";
import IMG6 from "../Assets/photo_2023-07-07_22-47-25.jpg";
import IMG7 from "../Assets/photo_2023-07-07_22-47-29.jpg";
import IMG8 from "../Assets/photo_2023-07-07_22-47-18.jpg";
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
  const [Search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(data[0]);
  const [showFilter, setShowFilter] = useState(false);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showLeftSection, setShowLeftSection] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLeftSection(false); // Hide the left section
      setTimeout(() => {
        const currentIndex = data.findIndex(
          (item) => item.id === selectedItem.id
        );
        const nextIndex = (currentIndex + 1) % data.length;
        setSelectedItem(data[nextIndex]);
        setShowLeftSection(true); // Show the left section
      }, 1000); // Delay showing the left section by 1 second
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [selectedItem]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
    setShowCategoryFilter(false);
  };

  const toggleCategoryFilter = () => {
    setShowCategoryFilter(!showCategoryFilter);
  };

  const toggleCategorySelection = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

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

  // Check if there's a search term or selected categories
  const isFiltering = Search.trim() !== "" || selectedCategories.length > 0;

  const filteredItems = data.filter((item) => {
    const matchesSearch =
      Search.trim() === "" ||
      item.organizationName.toLowerCase().includes(Search.toLowerCase()) ||
      item.organizationType.toLowerCase().includes(Search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.organizationType);

    return matchesSearch && matchesCategory;
  });

  // // Display 4 items when no search or filter is active
  // const filteredItems = isFiltering ? data : data.slice(0, 4);

  return (
    <section className="fundraiser_container">
      <div className="fundraiser_header-section">
        <h2>Search for Fundraisers</h2>
        <p className="fundraiser_header-paragraph">
          Browse through our list of individual, corporate and non-governmental
          organizations championing a good cause
        </p>
        <form action="" className="fundraiser_search_bar">
          <div className="fundraiser_input_field">
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
          <div className="main_filter-option">
            <div className="Main_main-filter_menu">
              <div className="filter_option" onClick={toggleFilter}>
                <small>filter</small>
                <BiSliderAlt className="filter_icon" />
              </div>
              {showFilter && (
                <div
                  className="main_category-filter"
                  onClick={toggleCategoryFilter}
                >
                  {selectedCategories.length > 0 && (
                    <div className="filter-number">
                      {selectedCategories.length}
                    </div>
                  )}
                  <small>Category</small>
                  {showCategoryFilter ? (
                    <MdKeyboardArrowUp className="filter_icon-up" />
                  ) : (
                    <MdKeyboardArrowDown className="filter_icon-down" />
                  )}
                </div>
              )}
            </div>
            {showCategoryFilter && (
              <article className="category-filter">
                <h3>Choose one or more</h3>
                <div className="category-filter-items">
                  <li
                    onClick={() => toggleCategorySelection("Health")}
                    className={
                      selectedCategories.includes("Health") ? "active" : ""
                    }
                  >
                    Health
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
                    onClick={() => toggleCategorySelection("Organization")}
                    className={
                      selectedCategories.includes("Organization")
                        ? "active"
                        : ""
                    }
                  >
                    Organization
                  </li>
                </div>
              </article>
            )}
          </div>

          <div className="filter_content">
            <div className="filter_content-left"></div>
            <div className="filter_content-right"></div>
          </div>
        </div>
        <div className="fundraiser_filter-section-down">
          {/* Conditionally render the left section based on filtering */}
          {isFiltering && (
            <div className="fundraiser_filter-section-left hide"></div>
          )}
          {!isFiltering && (
            <div
              className={`fundraiser_filter-section-left ${
                showLeftSection ? "" : "hide"
              } ${selectedItem ? selectedItem.organizationType : ""}`}
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
          )}
          <div className="fundraiser_filter-section-right">
            <article
              className={`filter_item-container ${
                isFiltering ? "filtered" : ""
              }`}
            >
              {isFiltering
                ? filteredItems.map((item, index) => {
                    const typeClass = item.organizationType.toLowerCase();
                    return (
                      <div
                        className={`filter_item-list ${typeClass}`}
                        key={index}
                      >
                        <img src={item.image} alt="" />
                        <small>{item.organizationType}</small>
                        <h3>{item.organizationName}</h3>
                      </div>
                    );
                  })
                : // When no search or filter is active, display 4 items in a row
                  data.slice(0, 4).map((item, index) => {
                    const typeClass = item.organizationType.toLowerCase();
                    return (
                      <div
                        className={`filter_item-list ${typeClass}`}
                        key={index}
                      >
                        <img src={item.image} alt="" />
                        <small>{item.organizationType}</small>
                        <h3>{item.organizationName}</h3>
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
