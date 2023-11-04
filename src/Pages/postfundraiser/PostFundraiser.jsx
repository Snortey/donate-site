import React, { useState, useEffect, useRef } from "react";
import "./PostFundraiser.css";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import IMG1 from "../../Assets/1670487955908.jpg";
import IMG2 from "../../Assets/1670487957332.jpg";
import IMG3 from "../../Assets/1670487959827 (1).jpg";
import IMG4 from "../../Assets/1670735162569.jpg";
import IMG5 from "../../Assets/1670487955908.jpg";
import IMG6 from "../../Assets/1670487955908.jpg";
import { IoWalletOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

const post_commentdata = [
  {
    id: 1,
    post_commentnameperson: "Solomon Nortey",
    post_commentprofileimg: IMG1,
    time: "2 days",
    post_commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "400.00",
  },
  {
    id: 2,
    post_commentnameperson: "Caleb Johnson",
    post_commentprofileimg: IMG2,
    time: "1 hour",
    post_commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "300.00",
  },
  {
    id: 3,
    post_commentnameperson: "Gilbert Amo",
    post_commentprofileimg: IMG3,
    time: "5 days",
    post_commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "800.00",
  },
  {
    id: 4,
    post_commentnameperson: "Sandra Ayivi",
    post_commentprofileimg: IMG4,
    time: "6 months",
    post_commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "1000.00",
  },
  {
    id: 5,
    post_commentnameperson: "Vivian Lumor",
    post_commentprofileimg: IMG5,
    time: "2 months",
    post_commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "2500.00",
  },
  {
    id: 6,
    post_commentnameperson: "Obed Sika",
    post_commentprofileimg: IMG6,
    time: "1 day",
    post_commentmessage: "Get yourself a place Paul. Such a great soul. ",
    amount: "230.00",
  },
];

const PostFundraiser = () => {
  const [statisticstargetAmount] = useState(4000000); // Set the target amount here
  const [statisticsAmount] = useState(2000000); // and the amount donated so far goes here
  const [filled, setFilled] = useState(0);

  // New state variables
  const [numpost_CommentsToShow, setNumpost_CommentsToShow] = useState(4);
  const [showViewLess, setShowViewLess] = useState(false);

  // Function to handle "View more" click
  const handleViewMoreClick = () => {
    setNumpost_CommentsToShow(numpost_CommentsToShow + 4);
    if (numpost_CommentsToShow + 4 >= post_commentdata.length) {
      setShowViewLess(true);
    }
  };

  // Function to handle "View less" click
  const handleViewLessClick = () => {
    setNumpost_CommentsToShow(4);
    setShowViewLess(false);
  };

  useEffect(() => {
    if (statisticsAmount > 0 && statisticstargetAmount > 0) {
      const percentage = (statisticsAmount / statisticstargetAmount) * 100;
      setFilled(percentage);
    }
  }, [statisticsAmount, statisticstargetAmount]);

  const [deletemodal, setdeleteModal] = useState(false);

  const toggleDeleteModal = () => {
    setdeleteModal(!deletemodal);
  };
  return (
    <section className="PostFundraiser">
      {deletemodal && (
        <div className="delete_modal">
          <div onClick={toggleDeleteModal} className="delete_overlay">
            <div className="delete_modal_content ">
              <div className="delete_modal_top">
                <h4>Are you sure you want to delete?</h4>
              </div>
              <div className="delete_modal_bottom">
                <Link to={"/postfundraiser"} className="btn ">
                  Cancel
                </Link>
                <Link to={"/fundraiser"} className="btn btn-primary">
                  Confirm
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="PostFundraiser_top">
        <Link to={"/fundraiser"} className="PostFundraiser_back-button">
          <IoArrowBackOutline className="post_back-arrow" />
          <h5>Back</h5>
        </Link>
      </div>
      <div className="PostFundraiser_bottom">
        <div className="PostFundraiser_left">
          <img src={IMG2} alt="" />
          <h4>Life4Kids Charity Organization</h4>
          <button className="btn">Contact</button>
        </div>
        <div className="PostFundraiser_middle">
          <div className="PostFundraiser_middle-container">
            <h2>Christmas for children</h2>
            <div className="PostFundraiser_middle-profile">
              <img src={IMG1} alt="" />
              <div className="PostFundraiser_middle-profile-content">
                <h4>Ashakale Foundation</h4>
                <h5>31st August, 2023</h5>
              </div>
            </div>
            <div className="PostFundraiser_image">
              <img src={IMG3} alt="" />
            </div>
            <div className="PostFundraiser_paragraph">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate necessitatibus iste iure nulla eius quia ratione
                velit quas quaerat alias saepe mollitia magni tempore iusto
                vero, similique enim qui sunt quasi eligendi laborum. Quidem ex
                cumque tenetur dignissimos magnam ad enim nisi, similique et
                nihil veniam quod temporibus? Ex assumenda aliquam
                exercitationem consectetur eaque eos, sint optio facere qui
                maxime, cupiditate dicta sequi nesciunt.
              </p>
            </div>
          </div>
          <div className="PostFundraiser_right2">
            <div className="PostFundraiser_statistics">
              <h3>Statistics</h3>
              <div
                className="PostFundraiser_statistics-progressbar"
                data-percent={`${filled}%`}
              >
                <div
                  className="statistics_progress"
                  style={{ width: `${filled}%` }}
                ></div>
              </div>
              <div className="statistics_money">
                <div className="statistics_target">
                  <h4>Target Amount:</h4>
                  <h3>${statisticstargetAmount}</h3>
                </div>
                <div className="statistics_amount">
                  <h4>Amount Gathered:</h4>
                  <h3>${statisticsAmount}</h3>
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
                <button onClick={toggleDeleteModal} className="btn ">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="PostFundraiser_middle-post_comment">
            <div className="post_comment">
              <h3>Comment</h3>
              <div className="post_comment_section">
                {post_commentdata
                  .slice(0, numpost_CommentsToShow)
                  .map(
                    (
                      {
                        post_commentnameperson,
                        post_commentprofileimg,
                        time,
                        post_commentmessage,
                        amount,
                      },
                      index
                    ) => {
                      return (
                        <div className="single_post_comment">
                          <div className="post_comment_profile">
                            <div className="post_comment_profile-left">
                              <img src={post_commentprofileimg} alt="" />
                              <div className="post_comment_content-details">
                                <h4>{post_commentnameperson}</h4>
                                <small>{time}</small>
                              </div>
                            </div>
                            <div className="dot">
                              <BsDot className="doticon" />
                            </div>
                            <div className="post_comment_profile-right">
                              <IoWalletOutline className="wallet_icon" />
                              <span>GHS{amount}</span>
                            </div>
                          </div>
                          <div className="post_comment_footer">
                            <p>{post_commentmessage}</p>
                          </div>
                        </div>
                      );
                    }
                  )}
              </div>
              <div className="post_comment_btn">
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
        <div className="PostFundraiser_right">
          <div className="PostFundraiser_statistics">
            <h3>Statistics</h3>
            <div
              className="PostFundraiser_statistics-progressbar"
              data-percent={`${filled}%`}
            >
              <div
                className="statistics_progress"
                style={{ width: `${filled}%` }}
              ></div>
            </div>
            <div className="statistics_money">
              <div className="statistics_target">
                <h4>Target Amount:</h4>
                <h3>${statisticstargetAmount}</h3>
              </div>
              <div className="statistics_amount">
                <h4>Amount Gathered:</h4>
                <h3>${statisticsAmount}</h3>
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
              <button onClick={toggleDeleteModal} className="btn ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostFundraiser;
