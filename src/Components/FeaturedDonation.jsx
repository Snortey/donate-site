import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../Assets/photo_2023-07-07_22-47-25.jpg";
import ContainerImage from "../Assets/1670487955908.jpg";

const FeaturedDonation = () => {
  return (
    <section className="container featured_container">
      <div className="featured_content">
        <h2>Featured Donation</h2>
        <p className="featuredParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          officia minus dignissimos, harum quaerat nulla repellendus animi
          excepturi.
        </p>
        <div className="featured_header">
          <h3>Help raise money for Ayeduase Children's Home.</h3>
          <div className="featured_profile">
            <img src={ProfileImage} alt="" className="profile_images" />
            <h4>Lorem ipsum</h4>
          </div>
          <div className="featured_details">
            <div className="featured_left">
              <p>
                Lorem ipsum dolor sit amet consectetur. Et viverra aliquet
                tristique enim quis. Mattis massa hac morbi est nunc pretium sit
                quis ac. Amet massa tempus id at mattis. Pellentesque ultricies
                id mi sollicitudin. Aliquet a odio fermentum neque habitant
                nulla elit vitae lacinia. Fermentum viverra ac nulla elementum
                diam auctor tristique sed. Amet in in blandit mi auctor nisi. Id
                velit dolor gravida platea. Elementum elit ut turpis condimentum
                blandit amet vel magnis. Nunc scelerisque nulla ornare duis erat
                urna imperdiet scelerisque. Lectus ridiculus enim cursus dolor
                amet sem massa mattis.
              </p>
              <Link to={"/donations"} className="btn btn-primary ">
                {" "}
                Donate
              </Link>
            </div>
            <div className="featured_right">
              <img src={ContainerImage} alt="" className="featured_image" />
            </div>
            <Link to={"/donations"} className="btn btn-primary ">
              {" "}
              Donate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDonation;
