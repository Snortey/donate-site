import React from "react";
import "./PostFundraiser.css";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const PostFundraiser = () => {
  return (
    <section className="PostFundraiser">
      <div className="PostFundraiser_top">
        <Link className="PostFundraiser_back-button">
          <IoArrowBackOutline />
          <h5>Back</h5>
        </Link>
      </div>
      <div className="PostFundraiser_bottom">
        <div className="PostFundraiser_left">
          <img src="" alt="" />
          <h4>Life4Kids Charity Organization</h4>
          <button className="btn">Contact</button>
        </div>
        <div className="PostFundraiser_middle">
          <div className="PostFundraiser_middle-container">
            <h2>Christmas for children</h2>
            <div className="PostFundraiser_middle-profile">
              <img src="" alt="" />
              <div className="PostFundraiser_middle-profile-content">
                <h4>Ashakale Foundation</h4>
                <h5>31st August, 2023</h5>
              </div>
            </div>
            <div className="PostFundraiser_image">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="PostFundraiser_right">
          <div className="PostFundraiser_statistics">
            <div className="PostFundraiser_statistics-progressbar">
              <div className="statistics_progress"></div>
            </div>
            <div className="statistics_money">
              <div className="statistics_target">
                <h4>Target Amount:</h4>
                <h3>$200000</h3>
              </div>
              <div className="statistics_amount">
                <h4>Amount Gathered:</h4>
                <h3>$500</h3>
              </div>
            </div>
            <div className="number-of-people">
              <h4>No. of donor:</h4>
              <h3>10</h3>
            </div>
          </div>
          <div className="PostFundraiser_action">
            <h3>Actions</h3>
            <div className="actions_buttons">
              <button className="btn btn-primary">Edit post</button>
            </div>
            <button className="btn ">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostFundraiser;
