import React from 'react'
import './Footer.css'

export default function Footer() {
    return ( 
        <>
            <section id='Footer-section' className="footer">
                <div className="footer_top">
                    <div className="footer_top_left"> 
                        <a href="">Home</a>
                        <a href="">Solutions</a>
                        <a href="">About</a>
                        <a href="">Team</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="footer_top_middle">
                        <h1>
                            Join our mailing list for <br />
                            the latest updates.
                        </h1>
                        <input type="email" placeholder="Enter your Email Address..." />
                        <button>
                            Anuj prajapati <i className="ri-arrow-right-up-line" />
                        </button>
                    </div>
                    <div className="footer_top_left">
                        <a href="">Home</a>
                        <a href="">Solutions</a>
                        <a href="">About</a>
                        <a href="">Team</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="image_and_bottom_container">
                        <img src="" alt="IS AREA M APNE HISAAB SE IMAGE LAGA LO " />
                        <div className="bottom_container">
                            <div className="bottom_left">
                                <a href="">Privacy Policy</a>
                                <a href="">Terms of USe</a>
                            </div>
                            <div className="bottom_middle">
                                <p>© 2024 HYPER HELP. All rights reserved.</p>
                            </div>
                            <div className="bottom_right">
                                <i className="ri-instagram-line" />
                                <i className="ri-linkedin-box-fill" />
                                <i className="ri-github-fill" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
