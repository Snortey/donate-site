import React, { useState } from "react";
import "./CreateReview.css";
import { Link } from "react-router-dom";
import Avatar from "../../../Assets/photo_2023-07-07_22-47-18.jpg";
import IMG from "../../../Assets/1670487957332.jpg";

const CreateReview = () => {
  return (
    <section className="reviews">
      <div className="reviews-left">
        <h5>Preview</h5>
        <h2>Review your fundraiser post and make neccesary corrections</h2>
      </div>

      <div className="reviews-right">
        <div className="reviews_right-header">
          <h2>Christmas for children</h2>
          <div className="reviews_profile">
            <img src={Avatar} alt="" />
            <div className="reviews_name_time">
              <h4>Ashakale Foundation</h4>
              <h5>31st August, 2023</h5>
            </div>
          </div>
          <div className="reviews_Image">
            <img src={IMG} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue cras ullamcorper
            aliquet egestas mollis facilisi aliquam. Mattis nunc at in ut
            integer ornare urna in. Amet egestas diam eget eget feugiat
            pellentesque duis velit. Massa adipiscing eu sapien sollicitudin at
            facilisi ullamcorper massa. Morbi pulvinar convallis gravida
            dictumst amet ut. Adipiscing donec mi dolor sit. Laoreet sed libero
            bibendum commodo urna sociis et. Ut arcu aliquet adipiscing
            sollicitudin magnis egestas scelerisque vitae risus. Donec eget nunc
            imperdiet pretium ut dictumst. Auctor felis feugiat malesuada nisl
            sed. Cursus viverra viverra urna sit. Eu feugiat vitae id
            scelerisque neque. Et semper aenean semper diam netus eget massa
            urna purus. Ut adipiscing auctor donec vel nibh at. Sollicitudin
            ullamcorper donec nibh turpis dictum sodales pharetra. Pulvinar elit
            sed lacus facilisis sem nulla. Viverra eu ullamcorper adipiscing
            scelerisque etiam quam auctor vel. Amet nibh fringilla tristique
            diam aliquam a ut. Dictum elementum ultricies nec mattis sit eu.
          </p>
          <div className="reviews_buttons">
            <button className="btn btn-primary">Donate</button>
            <button className="btn"> Share</button>
          </div>
        </div>
        <div className="upload_reviews-button">
          <Link to={"/"} className="btn btn-primary">
            Review
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CreateReview;
