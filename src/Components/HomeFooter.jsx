import React from 'react'
import {Link} from 'react-router-dom'

const HomeFooter = () => {
  return (
    <section className="HomeFooter_container">
        <div className="HomeFooter_main">
            <Link to= {'/'} className="HomeFooter-right">
                <h2>Dona.te</h2>
            </Link>
            <div className="HomeFooter-left">
                <article className="HomeFooter_wrapper">
                    <h3>Organization</h3>
                    <div className="HomeFooter_items">
                        <Link to ={'/about'}>About us</Link>
                        <Link to ="/blogs">Blogs</Link>
                        <Link to ="/careers">Careers</Link>
                        <Link to ="/contact">Contact</Link>
                    </div>
                </article>
                <article className="HomeFooter_wrapper">
                    <h3>Resources</h3>
                    <div className="HomeFooter_items">
                        <Link to ="/support">Support</Link>
                        <Link to ="/partnership">Partnership</Link>
                        <Link to ="/faq">FAQ's</Link>
                        <Link to ="/helpcenter">Help Center</Link>
                    </div>
                </article>
                <article className="HomeFooter_wrapper">
                    <h3>Legal</h3>
                    <div className="HomeFooter_items">
                        <Link to ="/terms">Terms</Link>
                        <Link to ="/privacy">Privacy</Link>
                        <Link to ="/licenses">Licenses</Link>
                        <Link to ="/policy">Policy</Link>
                    </div>
                </article>
            </div>
        </div>
        <div className="HomeFooter_copyright">
            <h3>© 2023 Dona.te Corp. All Rights Reserved</h3>
        </div>
    </section>
  )
}

export default HomeFooter