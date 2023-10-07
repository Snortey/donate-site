import React from 'react'
import {Link} from 'react-router-dom'
import OrganizationImage from '../Assets/1670487957332.jpg'
import IndividualImage from '../Assets/1670487959827 (1).jpg'

const BecomePartner = () => {
  return (
    <section className="container become_container">
        <div className="become_content">
            <h2>Become a Partner</h2>
            <p className='becomeParagraph'>Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.</p>
            <div className="become_details">
                    <div className="become">
                        <img src={IndividualImage} alt="" className="become_image" />
                        <h3>Individual</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.</p>
                        <Link to={'/usersignup'} className="btn "> Sign up</Link>
                    </div>
                    <div className="become">
                    <img src={OrganizationImage} alt="" className="become_image" />
                        <h3>Organization</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.</p>
                        <Link to={'/organizationsignup'} className="btn "> Sign up</Link>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default BecomePartner