import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {LuShare} from 'react-icons/lu'
import {BiDonateHeart} from 'react-icons/bi'
import AVATAR1 from '../Assets/photo_2023-07-07_22-47-15.jpg'
import AVATAR2 from '../Assets/photo_2023-07-07_22-47-18.jpg'
import AVATAR3 from '../Assets/photo_2023-07-07_22-47-25.jpg'
import AVATAR4 from '../Assets/photo_2023-07-07_22-47-29.jpg'
import IMG1 from '../Assets/1670487955908.jpg'
import IMG2 from '../Assets/1670487955908.jpg'
import IMG3 from '../Assets/1670487955908.jpg'
import IMG4 from '../Assets/1670487955908.jpg'
import IMG5 from '../Assets/1670487955908.jpg'
import IMG6 from '../Assets/1670487955908.jpg'
import IMG7 from '../Assets/1670487955908.jpg'
import IMG8 from '../Assets/1670487955908.jpg'
import IMG9 from '../Assets/1670487955908.jpg'


const data =[
    {
      id:1,
      avatar: AVATAR1,
      title:'Osu Children home',
      image: IMG1,
      text: 'Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.',
    },
    {
      id:2,
      avatar: AVATAR2,
      title:'Lorem ipsum',
      image: IMG2,
      text: 'Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.',
    },
    {
      id:3,
      avatar: AVATAR3,
      title:'Lorem ipsum',
      image: IMG3,
      text: 'Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.',
    },
    {
      id:4,
      avatar: AVATAR4,
      title:'Ayeduasi Orphan Home',
      image: IMG4,
      text: 'Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.',
    },
    {
      id:5,
      avatar: AVATAR4,
      title:'Lorem ipsum',
      image: IMG5,
      text: 'Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.',
    },
    {
      id:6,
      avatar: AVATAR4,
      title:'Lorem ipsum',
      image: IMG6,
      text: 'Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.',
    },
    {
      id:7,
      avatar: AVATAR4,
      title:'Lorem ipsum',
      image: IMG7,
      text: 'Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.',
    },
    {
      id:8,
      avatar: AVATAR4,
      title:'Lorem ipsum',
      image: IMG8,
      text: 'Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.',
    },
    {
      id:9,
      avatar: AVATAR4,
      title:'Lorem ipsum',
      image: IMG9,
      text: 'Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.',
    }
  ]

const MainFundraiser = () => {
    const[Search,setSearch] =useState(' ')
    console.log(Search)
  return (
    <section className="fundraiser_header">
        <div className="fundraiser_left">
            <form action="" className="search_bar">
                <div class="input_field">
                    <BsSearch className='input_icon'/>
                    <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                </div>
            </form>
            <div className="fundraiser_featuredDonation">
                <h2>Featured Donation</h2>
                <div className="fundraiser_featuredDonation-MainContent">
                    <div className="fundraiser_Main_profile">
                        <div className="Main_avatar">
                                <img src={AVATAR1} alt="" />
                                <div className="Main_avatar_content-details">
                                    <h3>Acacity Foundation</h3>
                                    <small>1hr</small>
                                </div>
                        </div>
                        <p>Donate clothes and other household materials to the children of the Accra Children's Home.</p>
                    </div>
                    <div className="Main_fundraiser_image">
                        <img src={IMG1} alt="" />
                    </div>
                    <div className="fundraiser_button">
                        <Link to={'/donations'} className="btn btn-primary"> Donate</Link>
                    </div>
                        
                </div>
            </div>
        </div>
        <div className="fundraiser_right">
            <article className="fundraiser_content">{
                data.filter((item)=>{
                    return Search.trim() === '' || item.title.toLowerCase().includes(Search.toLowerCase());
                }).map(({avatar,title, image, text}, index) =>{
                    return(
                        <div key={index} className="fundraiser_content-details">
                            <div className="fundraiser_top_profile">
                                <div className="avatar_content">
                                    <img src={avatar} alt="" />
                                    <div className="avatar_content-details">
                                        <h3>{title}</h3>
                                        <small>1hr</small>
                                    </div>
                                </div>
                                <p>{text}</p>
                            </div>
                            <div className="fundraiser_image">
                                <img src={image} alt="" />
                            </div>
                            <div className="fundraiser_icons">
                                <Link to = {'/'} className="icon">
                                    <BiDonateHeart className="icons"/>
                                    <Link to={'/signin'} className='linkicon'> Donate</Link> 
                                </Link>
                                <Link to = {'/'} className="icon">
                                    <LuShare className="icons"/>
                                    <Link to={'/signin'} className='linkicon'> Share</Link>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
                
            </article>
        </div>
    </section>
  )
}

export default MainFundraiser