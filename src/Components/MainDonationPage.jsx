import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DonateImage from "../Assets/1670487959827 (1).jpg";
import DonateProfile from "../Assets/photo_2023-07-07_22-47-15.jpg";
import IMG1 from "../Assets/1670487955908.jpg";
import IMG2 from "../Assets/1670487955908.jpg";
import IMG3 from "../Assets/1670487955908.jpg";
import IMG4 from "../Assets/1670487955908.jpg";
import IMG5 from "../Assets/1670487955908.jpg";
import IMG6 from "../Assets/1670487955908.jpg";
import { IoWalletOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import DonalModal from "./DonationModal/DonalModal";

const commentdata = [
  {
    id: 1,
    commentnameperson: "Solomon Nortey",
    commentprofileimg: IMG1,
    time: "2 days",
    commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "400.00",
  },
  {
    id: 2,
    commentnameperson: "Caleb Johnson",
    commentprofileimg: IMG2,
    time: "1 hour",
    commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "300.00",
  },
  {
    id: 3,
    commentnameperson: "Gilbert Amo",
    commentprofileimg: IMG3,
    time: "5 days",
    commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "800.00",
  },
  {
    id: 4,
    commentnameperson: "Sandra Ayivi",
    commentprofileimg: IMG4,
    time: "6 months",
    commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "1000.00",
  },
  {
    id: 5,
    commentnameperson: "Vivian Lumor",
    commentprofileimg: IMG5,
    time: "2 months",
    commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "2500.00",
  },
  {
    id: 6,
    commentnameperson: "Obed Sika",
    commentprofileimg: IMG6,
    time: "1 day",
    commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "230.00",
  },
];

const MainDonationPage = () => {
  const [targetAmount] = useState(400000); // Set the target amount here
  const [gatheredAmount] = useState(200000); // and the amount donated so far goes here
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    if (gatheredAmount > 0 && targetAmount > 0) {
      const percentage = (gatheredAmount / targetAmount) * 100;
      setFilled(percentage);
    }
  }, [gatheredAmount, targetAmount]);

  const handleShareClick = () => {
    if (navigator.share) {
      // Use Web Share API if supported
      navigator
        .share({
          title: "Share Example",
          text: "Check out this awesome website!",
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback: Open a custom sharing dialog
      const shareText =
        "Check out this awesome website: " + window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText);
        alert("Link copied to clipboard:\n" + shareText);
      } else {
        alert(
          "Your browser does not support clipboard access. You can manually copy the link."
        );
      }
    }
  };

  // New state variables
  const [numCommentsToShow, setNumCommentsToShow] = useState(4);
  const [showViewLess, setShowViewLess] = useState(false);

  // Function to handle "View more" click
  const handleViewMoreClick = () => {
    setNumCommentsToShow(numCommentsToShow + 4);
    if (numCommentsToShow + 4 >= commentdata.length) {
      setShowViewLess(true);
    }
  };

  // Function to handle "View less" click
  const handleViewLessClick = () => {
    setNumCommentsToShow(4);
    setShowViewLess(false);
  };
  return (
    <section className="MainDonationPage_container">
      <div className="MainDonationPage_left">
        <div className="MainDonationPage_left-header">
          <h2>Christmas for children</h2>
          <div className="MainDonation_profile">
            <img src={DonateProfile} alt="" />
            <h4>Ashakale Foundation</h4>
            <h5>3rd July, 2023</h5>
          </div>
          <div className="MainDonationPage_Image">
            <img src={DonateImage} alt="" />
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
          <div className="MainDonationPage_buttons">
            <Link to={"/"} className="btn btn-primary">
              Donate
            </Link>
            <button onClick={handleShareClick} className="btn">
              {" "}
              Share
            </button>
          </div>
        </div>
        <div className="MainDonationPage_left-footer">
          <div className="comment">
            <h3>Comment</h3>
            <div className="comment_section">
              {commentdata
                .slice(0, numCommentsToShow)
                .map(
                  (
                    {
                      commentnameperson,
                      commentprofileimg,
                      time,
                      commentmessage,
                      amount,
                    },
                    index
                  ) => {
                    return (
                      <div className="single_comment">
                        <div className="comment_profile">
                          <div className="comment_profile-left">
                            <img src={commentprofileimg} alt="" />
                            <div className="comment_content-details">
                              <h4>{commentnameperson}</h4>
                              <small>{time}</small>
                            </div>
                          </div>
                          <div className="dot">
                            <BsDot className="doticon" />
                          </div>
                          <div className="comment_profile-right">
                            <IoWalletOutline className="wallet_icon" />
                            <span>GHS{amount}</span>
                          </div>
                        </div>
                        <div className="comment_footer">
                          <p>{commentmessage}</p>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>
            <div className="comment_btn">
              {showViewLess ? (
                <button onClick={handleViewLessClick} className="btn">
                  View less
                </button>
              ) : (
                <button onClick={handleViewMoreClick} className="btn">
                  View more
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="MainDonationPage_right">
        <div className="MainDonationPage_summary">
          <h3>Summary</h3>
          <div className="summary_container">
            <div className="summary_progressbar" data-percent={`${filled}%`}>
              <div
                className="summary_progress"
                style={{ width: `${filled}%` }}
              ></div>
            </div>
            <div className="summary_target">
              <h4>Target Amount:</h4>
              <h3>${targetAmount}</h3>
            </div>
            <div className="summary_amount">
              <h4>Amount Gathered:</h4>
              <h3>${gatheredAmount}</h3>
            </div>
          </div>
          <div className="summary_button">
            <Link to={"/"} className="btn btn-primary">
              Donate
            </Link>
          </div>
        </div>
        <div className="MainDonationPage_contact-organizers">
          <h3>Contact organizers</h3>
          <div className="contact_organizer_buttons">
            <a href="tel:+233551992992" className="btn btn-primary">
              Call
            </a>{" "}
            {/*change the number */}
            <Link
              to={`mailto:kelviinnoorofyy@gmail.com`}
              alt=""
              className="btn"
            >
              Mail
            </Link>
          </div>
        </div>
      </div>
      <DonalModal />
    </section>
  );
};

export default MainDonationPage;
