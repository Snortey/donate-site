import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./FundraiserProfile.css";
// import IMG1 from "../../Assets/1670487957332.jpg";

// const data = [
//   {
//     id: 1,
//     title: "Life4Kids Charity Organization",
//     image: IMG1,
//     aboutText:
//       "Life4Kids is a dedicated and passionate non-profit organization committed to making a meaningful difference in the lives of children and their families. Our mission is to provide essential support, resources, and opportunities that empower children to lead healthier, happier, and more fulfilled lives. At Life4Kids, we envision a world where every child has the chance to thrive, regardless of their circumstances. We believe in the transformative power of collective kindness and compassion, and we work tirelessly to create a brighter future for the next generation.",
//     postText:
//       "Life4Kids is a dedicated yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy and passionate non-profit organization committed to making a meaningful difference in the lives of children and their families. Our mission is to provide essential support, resources, and opportunities that empower children to lead healthier, happier, and more fulfilled lives. At Life4Kids, we envision a world where every child has the chance to thrive, regardless of their circumstances. We believe in the transformative power of collective kindness and compassion, and we work tirelessly to create a brighter future for the next generation.",
//   },
// ];

const FundraiserProfile = () => {
  const [activeTab, setActiveTab] = useState("About"); // Default to "About" on page load
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const about = searchParams.get("about");
  const post = searchParams.get("post");

  return (
    <section className="FundraiserProfile">
      <div className="FundraiserProfile_item">
        <div className="FundraiserProfile_top">
          <div className="FundraiserProfile_image">
            <img src={image} alt={name} />
          </div>
          <div className="FundraiserProfile_title">
            <h2>{name}</h2>
          </div>
          <div className="FundraiserProfile_buttons">
            <button className="btn">Contact</button>
            <div className="FundraiserProfile_buttons-down">
              <h4
                className={`about-btn ${activeTab === "About" ? "active" : ""}`}
                onClick={() => setActiveTab("About")}
              >
                About
              </h4>
              <h4
                className={`posts-btn ${activeTab === "Posts" ? "active" : ""}`}
                onClick={() => setActiveTab("Posts")}
              >
                Posts
              </h4>
            </div>
          </div>
        </div>
        <div className="FundraiserProfile_bottom">
          {activeTab === "About" && <p>{about}</p>}
          {activeTab === "Posts" && <p>{post}</p>}
        </div>
      </div>
    </section>
  );
};

export default FundraiserProfile;