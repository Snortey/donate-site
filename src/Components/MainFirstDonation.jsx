import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { LuShare } from "react-icons/lu";
import { BiDonateHeart } from "react-icons/bi";
import AVATAR1 from "../Assets/photo_2023-07-07_22-47-15.jpg";
import AVATAR2 from "../Assets/photo_2023-07-07_22-47-18.jpg";
import AVATAR3 from "../Assets/photo_2023-07-07_22-47-25.jpg";
import AVATAR4 from "../Assets/photo_2023-07-07_22-47-29.jpg";
import IMG1 from "../Assets/1670487955908.jpg";
import IMG2 from "../Assets/1670487957332.jpg";
import IMG3 from "../Assets/1670487959827 (1).jpg";
import IMG4 from "../Assets/1670735162569.jpg";
import IMG5 from "../Assets/photo_2023-07-07_22-47-15.jpg";
import IMG6 from "../Assets/photo_2023-07-07_22-47-18.jpg";
import IMG7 from "../Assets/photo_2023-07-07_22-47-25.jpg";
import IMG8 from "../Assets/photo_2023-07-07_22-47-29.jpg";
import IMG9 from "../Assets/1670487955908.jpg";

// edit this section to insert the data for both MainfirstDonation(feed) and MainDonation page do not touch the main code
const data = [
  {
    id: 1,
    avatar: AVATAR1,
    heading: "Support the needy",
    title: "Osu Children home",
    image: IMG1,
    date: "3rd July, 2023",
    text: "Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue cras ullamcorper aliquet egestas mollis facilisi aliquam. Mattis nunc at in ut integer ornare urna in. Amet egestas diam eget eget feugiat pellentesque duis velit. Massa adipiscing eu sapien sollicitudin atfacilisi ullamcorper massa. Morbi pulvinar convallis gravida dictumst amet ut. Adipiscing donec mi dolor sit. Laoreet sed libero  bibendum commodo urna sociis et. Ut arcu aliquet adipiscing sollicitudin magnis egestas scelerisque vitae risus. Donec eget nunc imperdiet pretium ut dictumst. Auctor felis feugiat malesuada nisl sed. Cursus viverra viverra urna sit. Eu feugiat vitae id scelerisque neque. Et semper aenean semper diam netus eget massa urna purus. Ut adipiscing auctor donec vel nibh at. Sollicitudin ullamcorper donec nibh turpis dictum sodales pharetra. Pulvinar elit sed lacus facilisis sem nulla. Viverra eu ullamcorper adipiscing scelerisque etiam quam auctor vel. Amet nibh fringilla tristique diam aliquam a ut. Dictum elementum ultricies nec mattis sit eu.",
    targetAmount: "400000000000",
    raisedAmount: "300000000000",
  },
  {
    id: 2,
    avatar: AVATAR2,
    heading: "Christmas for children",
    title: "Ashakale Foundation",
    image: IMG2,
    date: "10th December, 2023",
    text: "Support underprivileged children during the holiday season.",
    description:
      "This Christmas, we are collecting donations to provide gifts and essentials to children in need. Your contributions can make this holiday season brighter for these kids. We believe that every child deserves the joy and warmth of the holiday season, and with your help, we can make it happen. By donating to the Ashakale Foundation, you'll be giving the gift of happiness to children who may not have experienced the magic of Christmas before. Let's come together and spread love and cheer to brighten their lives. Join us in making this holiday season unforgettable for these young hearts.",
    targetAmount: "100",
    raisedAmount: "50",
  },
  {
    id: 3,
    avatar: AVATAR3,
    heading: "Empowerment for Youth",
    title: "Youth Success Initiative",
    image: IMG3,
    date: "15th September, 2023",
    text: "Help young people achieve their dreams and build a brighter future.",
    description:
      "Our program focuses on mentoring and providing educational opportunities to empower the youth in our community. Your support can change lives. We understand that young people are the future, and it's our responsibility to help them reach their full potential. The Youth Success Initiative offers mentorship, scholarships, and skill-building programs to guide them towards a brighter future. Our goal is to ensure that every young person in our community has access to quality education and the support they need to achieve their dreams. With your contributions, you're investing in the leaders, innovators, and changemakers of tomorrow.",
    targetAmount: "990000000",
    raisedAmount: "300000",
  },
  {
    id: 4,
    avatar: AVATAR4,
    heading: "Helping Orphans in Need",
    title: "Ayeduasi Orphan Home",
    image: IMG4,
    date: "8th February, 2023",
    text: "Make a difference in the lives of orphans and provide them with love and care.",
    description:
      "Ayeduasi Orphan Home is home to many children who have no families. Your contributions help us provide them with a safe and loving environment. These children have faced unimaginable hardships, and the Ayeduasi Orphan Home aims to give them a second chance at a brighter future. We offer shelter, nutrition, education, and emotional support to these vulnerable children. With your generous donations, you can help us provide them with the love and care they deserve. Every child deserves a home, and your support can make this dream a reality for the children of Ayeduasi Orphan Home.",
    targetAmount: "980000",
    raisedAmount: "230000",
  },
  {
    id: 5,
    avatar: AVATAR4,
    heading: "Support Local Communities",
    title: "Community Development Project",
    image: IMG5,
    date: "20th May, 2023",
    text: "Join us in making local communities stronger and more resilient.",
    description:
      "We are working to improve local infrastructure, access to clean water, and educational facilities. Your support is vital for this community development project. Strong and resilient communities are the backbone of a prosperous society. The Community Development Project focuses on enhancing local infrastructure, providing clean water access, and improving educational facilities. Your contributions help us build a better future for these communities, ensuring that people have access to essential services and resources. By supporting this project, you're not only improving lives today but also creating a sustainable and brighter tomorrow for these local communities.",
    targetAmount: "400600",
    raisedAmount: "1000",
  },
  {
    id: 6,
    avatar: AVATAR4,
    heading: "Environmental Conservation",
    title: "Green Earth Initiative",
    image: IMG6,
    date: "5th June, 2023",
    text: "Contribute to the preservation of our planet and a greener future.",
    description:
      "Our initiative focuses on reforestation, clean energy, and reducing environmental impact. Your involvement can help us protect our environment. The Green Earth Initiative is committed to preserving our planet and building a greener and more sustainable future. We focus on reforestation efforts, promoting clean energy sources, and reducing our environmental impact. Your active involvement in this initiative is a step toward protecting our planet for future generations. Together, we can make a significant impact on climate change and create a better and more sustainable world for all.",
    targetAmount: "400000",
    raisedAmount: "370000",
  },
  {
    id: 7,
    avatar: AVATAR4,
    heading: "Emergency Relief Fund",
    title: "Disaster Relief Organization",
    image: IMG7,
    date: "27th August, 2023",
    text: "Support disaster-affected communities during their time of need.",
    description:
      "We provide rapid assistance to communities affected by natural disasters, ensuring they receive food, shelter, and medical care during emergencies. Natural disasters can strike at any moment, leaving communities in dire need. Our Disaster Relief Organization is dedicated to providing rapid assistance during these critical times. We ensure that affected communities receive essential items such as food, shelter, and medical care, helping them recover and rebuild their lives. Your support is a lifeline for these communities during their most challenging moments.",
    targetAmount: "25000000",
    raisedAmount: "470000",
  },
  {
    id: 8,
    avatar: AVATAR4,
    heading: "Education for All",
    title: "Bright Future Foundation",
    image: IMG8,
    date: "12th April, 2023",
    text: "Help us make quality education accessible to every child.",
    description:
      "We believe that every child deserves a quality education. Your contributions enable us to build schools and provide educational resources. The Bright Future Foundation is on a mission to make quality education accessible to every child. We build schools, provide educational resources, and support educators to ensure that children receive the best education possible. Your contributions are investments in the future of these young minds. Together, we can empower the next generation with the knowledge and skills they need to succeed.",
    targetAmount: "100000",
    raisedAmount: "5000",
  },
  {
    id: 9,
    avatar: AVATAR4,
    heading: "Healthcare for Vulnerable Communities",
    title: "Medical Outreach Program",
    image: IMG9,
    date: "19th July, 2023",
    text: "Support healthcare services for communities with limited access to medical care.",
    description:
      "Our medical outreach program brings healthcare services to remote areas, offering medical check-ups, vaccinations, and health education to underserved communities. Many communities have limited access to healthcare services, leaving them vulnerable to health issues. The Medical Outreach Program is committed to changing this. We take healthcare services to remote areas, providing medical check-ups, vaccinations, and health education to underserved communities. Your support ensures that everyone has access to essential healthcare services, regardless of their location.",
    targetAmount: "167000",
    raisedAmount: "166000",
  },
];

const MainFirstDonation = () => {
  const [Search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(data[0]); // Initialize selectedItem with the first item

  const handleNextItem = () => {
    const currentIndex = data.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % data.length;
    setSelectedItem(data[nextIndex]);
  };

  return (
    <section className="MainFirstDonation_header">
      <div className="MainFirstDonation_left">
        <form action="" className="search_bar">
          <div className="input_field">
            <BsSearch className="input_icon" />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
        <div className="MainFirstDonation_featuredDonation-wrapper">
          <div className="MainFirstDonation_featuredDonation">
            <h2>Featured Donation</h2>
            <div className="MainFirstDonation_featuredDonation-MainContent">
              <div className="MainFirstDonation_Main_profile">
                <div className="Main_avatar">
                  <img src={selectedItem.avatar} alt="" />
                  <div className="Main_avatar_content-details">
                    <h3>{selectedItem.title}</h3>
                    <small>1hr</small>
                  </div>
                </div>
                <p>{selectedItem.text}</p>
              </div>
              <div className="Main_MainFirstDonation_image">
                <img src={selectedItem.image} alt="" />
              </div>
              <div className="MainFirstDonation_button">
                <Link
                  to={`/donations/${selectedItem.id}?name=${encodeURIComponent(
                    selectedItem.title
                  )}&image=${encodeURIComponent(
                    selectedItem.image
                  )}&date=${encodeURIComponent(
                    selectedItem.date
                  )}&description=${encodeURIComponent(
                    selectedItem.description
                  )}&avatar=${encodeURIComponent(
                    selectedItem.avatar
                  )}&heading=${encodeURIComponent(
                    selectedItem.heading
                  )}&targetAmount=${encodeURIComponent(
                    selectedItem.targetAmount
                  )}&raisedAmount=${encodeURIComponent(
                    selectedItem.raisedAmount
                  )}`}
                  className="btn btn-primary"
                >
                  {" "}
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MainFirstDonation_right">
        <article className="MainFirstDonation_content">
          {data
            .filter((item) => {
              return (
                Search.trim() === "" ||
                item.title.toLowerCase().includes(Search.toLowerCase())
              );
            })
            .map((item, index) => {
              // Change 'index' to 'item' here
              return (
                <div key={index} className="MainFirstDonation_content-details">
                  <div className="MainFirstDonation_top_profile">
                    <div className="avatar_content">
                      <img src={item.avatar} alt="" />
                      <div className="avatar_content-details">
                        <h3>{item.title}</h3>
                        <small>1hr</small>
                      </div>
                    </div>
                    <p>{item.text}</p>
                  </div>
                  <div className="MainFirstDonation_image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="MainFirstDonation_icons">
                    <Link
                      to={`/donations/${item.id}?name=${encodeURIComponent(
                        item.title
                      )}&image=${encodeURIComponent(
                        item.image
                      )}&date=${encodeURIComponent(
                        item.date
                      )}&description=${encodeURIComponent(
                        item.description
                      )}&avatar=${encodeURIComponent(
                        item.avatar
                      )}&heading=${encodeURIComponent(item.heading)}
                      &targetAmount=${encodeURIComponent(
                        item.targetAmount
                      )}&raisedAmount=${encodeURIComponent(item.raisedAmount)}`}
                      className="icon"
                    >
                      <BiDonateHeart className="icons" />
                      <Link
                        to={`/donations/${item.id}?name=${encodeURIComponent(
                          item.title
                        )}&image=${encodeURIComponent(
                          item.image
                        )}&date=${encodeURIComponent(
                          item.date
                        )}&description=${encodeURIComponent(
                          item.description
                        )}&avatar=${encodeURIComponent(
                          item.avatar
                        )}&heading=${encodeURIComponent(item.heading)}
                      &targetAmount=${encodeURIComponent(
                        item.targetAmount
                      )}&raisedAmount=${encodeURIComponent(item.raisedAmount)}`}
                        className="linkicon"
                      >
                        {" "}
                        Donate
                      </Link>
                    </Link>
                    <Link to={"/"} className="icon">
                      <LuShare className="icons" />
                      <Link to={"/signin"} className="linkicon">
                        {" "}
                        Share
                      </Link>
                    </Link>
                  </div>
                </div>
              );
            })}
        </article>
      </div>
    </section>
  );
};

export default MainFirstDonation;
