import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";
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

// edit this section to insert the data for both fundraiser and FundraiserProfile page dont touch the main code
const data = [
  {
    id: 1,
    organizationName: "Life4Kids Charity Organization",
    image: IMG1,
    organizationType: "Non-profit",
    aboutText:
      "Life4Kids is a dedicated and passionate non-profit organization committed to making a meaningful difference in the lives of children and their families. Our mission is to provide essential support, resources, and opportunities that empower children to lead healthier, happier, and more fulfilled lives. At Life4Kids, we envision a world where every child has the chance to thrive, regardless of their circumstances. We believe in the transformative power of collective kindness and compassion, and we work tirelessly to create a brighter future for the next generation.",
    postText:
      "Join us in our mission to create a positive change in the lives of people in our community. Together, we can make a difference.",
  },
  {
    id: 2,
    organizationName: "Life4Kids Charity Organization",
    image: IMG2,
    organizationType: "Agency",
    aboutText:
      "We are a passionate group of individuals working together to make a positive impact on our community. Our mission is to support those in need and create a brighter future for everyone.",
    postText:
      "Join us in our mission to create a positive change in the lives of people in our community. Together, we can make a difference.",
  },
  {
    id: 3,
    organizationName: "UNICEF",
    image: IMG3,
    organizationType: "Organization",
    aboutText:
      "Our organization is dedicated to promoting education and empowering the youth. We believe that knowledge is the key to a better future.",
    postText:
      "Education is a powerful tool for change. Let's work together to provide young minds with the opportunity to learn and grow.",
  },
  {
    id: 4,
    organizationName: "UNICEF",
    image: IMG4,
    organizationType: "Agency",
    aboutText:
      "We are committed to environmental conservation and sustainability. Our goal is to protect the planet for future generations.",
    postText:
      "Every small step towards sustainability matters. Join us in our efforts to preserve the beauty of our planet.",
  },
  {
    id: 5,
    organizationName: "UNICEF",
    image: IMG5,
    organizationType: "Agency",
    aboutText:
      "Health and wellness are our top priorities. We provide essential healthcare services to those in need.",
    postText:
      "Your health is your wealth. Let's ensure that everyone has access to the care they deserve.",
  },
  {
    id: 6,
    organizationName: "UNICEF",
    image: IMG6,
    organizationType: "Agency",
    aboutText:
      "We are advocates for animal rights and welfare. Our organization works to ensure that animals are treated with compassion and respect.",
    postText:
      "Animals deserve our care and protection. Join us in our mission to make the world a better place for all creatures.",
  },
  {
    id: 7,
    organizationName: "UNICEF",
    image: IMG7,
    organizationType: "Organization",
    aboutText:
      "We support artists and creatives in their pursuit of self-expression. Art has the power to inspire and transform lives.",
    postText:
      "Art has the ability to touch hearts and change perspectives. Let's support the arts and nurture creativity.",
  },
  {
    id: 8,
    organizationName: "UNICEF",
    image: IMG8,
    organizationType: "Non-profit",
    aboutText:
      "Our organization focuses on community development and empowerment. We believe in the strength of unity and collaboration.",
    postText:
      "Together, we can build stronger and more vibrant communities. Join us in our journey towards positive change.",
  },
  {
    id: 9,
    organizationName: "UNICEF",
    image: IMG9,
    organizationType: "Non-profit",
    aboutText:
      "We are champions of social justice and equality. Our goal is to create a more inclusive and fair society for all.",
    postText:
      "Injustice anywhere is a threat to justice everywhere. Let's stand up for what is right and work towards equality.",
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
            <IoFilter
              className="fundraiser_input_icon-filter"
              onClick={toggleFilter}
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
                      <Link
                        to={`/fundraiserprofile/${
                          item.id
                        }?name=${encodeURIComponent(
                          item.organizationName
                        )}&image=${encodeURIComponent(
                          item.image
                        )}&about=${encodeURIComponent(
                          item.aboutText
                        )}&post=${encodeURIComponent(item.postText)}`}
                      >
                        <div className={`filter_item-list ${typeClass}`}>
                          <img src={item.image} alt="" />
                          <small>{item.organizationType}</small>
                          <h3>{item.organizationName}</h3>
                        </div>
                      </Link>
                    );
                  })
                : // When no search or filter is active, display 4 items in a row
                  data.slice(0, 4).map((item, index) => {
                    const typeClass = item.organizationType.toLowerCase();
                    return (
                      <Link
                        to={`/fundraiserprofile/${
                          item.id
                        }?name=${encodeURIComponent(
                          item.organizationName
                        )}&image=${encodeURIComponent(
                          item.image
                        )}&about=${encodeURIComponent(
                          item.aboutText
                        )}&post=${encodeURIComponent(item.postText)}`}
                      >
                        <div className={`filter_item-list ${typeClass}`}>
                          <img src={item.image} alt="" />
                          <small>{item.organizationType}</small>
                          <h3>{item.organizationName}</h3>
                        </div>
                      </Link>
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
