/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import rocket from "../assets/Icons/rocket.svg"
import vision from "../assets/Icons/vision.svg"

import kwa from "../assets/Images/kwac.webp"

import PageLayout from './PageLayout'
import "./Home.css"

const Home = () => {
     return (
          <PageLayout>

               <div className="Home-first" >
                    <div className="home-first-overlay">

                         <div className="home-big-text">

                              <h1>
                                   INFORMATION TECHNOLOGY PROFESSIONALS ASSOCIATION

                              </h1>
                         </div>

                         <p className="home-text-motto">
                              Welcome to ITPA – together, we shape the future of technology! Connecting, Empowering, and Advancing IT Professionals Worldwide
                         </p>

                         <button className="home-explore">
                              Learn More
                         </button>


                    </div>


               </div>


               <div className="home-stats">
                    <div>
                         <h2 className='text-[#3241e7]' >5000+</h2>
                         <h3>members world-wide</h3>
                    </div>
                    <div>
                         <h2 className='text-yellow-300' >10+</h2>
                         <h3>years of service</h3>
                    </div>
                    <div>
                         <h2>10+</h2>
                         <h3>Awards</h3>
                    </div>


               </div>


               <div className="our-mission">

                    <div className="mission-head">

                         <h1 className="text">
                              OUR MISSION
                         </h1>
                         <img src={rocket} alt="" className='rocket' />
                    </div>


                    <p>
                         Coalition of Information and Communication Technology Professionals for Societal Development.
                    </p>



               </div>


               <div className="our-vision">

                    <div className="vision-head">

                         <h1>Our Vision</h1>
                         <img src={vision} alt="" className="vision" />

                    </div>

                    <p>
                         Our vision is to generate new values to the world by developing end to end I.T solutions that meets the needs of modern day business.
                    </p>


               </div>

               <div className="about-section">

                    <div className="about-overlay">

{/* <img src={kwa} alt="" className="kwa" /> */}

<div className="kwac">
     
</div>


                         <h1>
                              About ITPA
                         </h1>


                         <p>The Information Technology Professionals Association (ITPA) is a global association that connects, empowers, and advances IT professionals worldwide. With over 5,000 members organized in zones spread across different states and countries, ITPA provides a platform for IT professionals to network, learn, and grow</p>


                         <button>
                              read more...
                         </button>

                    </div>


               </div>



          </PageLayout>
     )
}

export default Home