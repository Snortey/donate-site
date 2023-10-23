import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const organizationname = searchParams.get("name");
  const heading = searchParams.get("heading");
  const image = searchParams.get("image");
  const date = searchParams.get("date");
  const avatar = searchParams.get("avatar");
  const description = searchParams.get("description");
  const AmountWanted = searchParams.get("targetAmount");
  const raisedAmount = searchParams.get("raisedAmount");

  const [targetAmount] = useState(AmountWanted); // Set the target amount here
  const [gatheredAmount] = useState(raisedAmount); // and the amount donated so far goes here
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

  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) {
      // Clicked inside the modal, do nothing
      return;
    }
    setModal(!modal);

    // Toggle body scroll and MainDonationPage_container position
    if (!modal) {
      document.body.classList.add("modal-open"); // Add a class to disable scrolling
      document.querySelector(".MainDonationPage_container").style.position =
        "fixed"; // Fix the background
    } else {
      document.body.classList.remove("modal-open"); // Remove the class to enable scrolling
      document.querySelector(".MainDonationPage_container").style.position =
        "relative"; // Reset the background position
    }
  };

  return (
    <section className="MainDonationPage_container">
      {modal && (
        <div onClick={toggleModal} className="modal-overlay">
          <div ref={modalRef} className="modal__content">
            <DonalModal title={organizationname} heading={heading} />
          </div>
        </div>
      )}
      <div className="MainDonationPage_left">
        <div className="MainDonationPage_left-header">
          <h2>{heading}</h2>
          <div className="MainDonation_profile">
            <img src={avatar} alt="" />
            <h4>{organizationname}</h4>
            <h5>{date}</h5>
          </div>
          <div className="MainDonationPage_Image">
            <img src={image} alt="" />
          </div>
          <p>{description}</p>
          <div className="MainDonationPage_buttons">
            <button onClick={toggleModal} className="btn btn-primary">
              Donate
            </button>
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
            <button onClick={toggleModal} className="btn btn-primary">
              Donate
            </button>
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
    </section>
  );
};

export default MainDonationPage;
