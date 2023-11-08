/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import rocket from "../assets/Icons/rocket.svg"
import vision from "../assets/Icons/vision.svg"
import call from "../assets/Icons/cal.svg"
import event from "../assets/Icons/event.svg"
import PageLayout from './PageLayout'
import AOS from 'aos';
import nasa from "../assets/Images/nasa.jpg"
import tech from "../assets/Images/tech.jpg"

import 'aos/dist/aos.css'; // Import the CSS
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "./Home.css"
const Home = () => {


     const images = [
          'nasa',
          'tech',
          'nasa',
          'tech',
          'nasa',
          'tech',



     ]

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

               <div className="vision-mision">


                    <div className="our-mission">

                         <div className="mission-head">

                              <h1 className="text">
                                   OUR MISSION
                              </h1>
                              <img src={rocket} alt="" className='rocket' />
                         </div>


                         <p>
                              "Coalition of Information and Communication Technology Professionals for Societal Development."
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
               </div>



               <div className="about-section">

                    <div className="about-overlay">




                         <h1>
                              About ITPA
                         </h1>


                         <p>The Information Technology Professionals Association (ITPA) is a global association that connects, empowers, and advances IT professionals worldwide. With over 5,000 members organized in zones spread across different states and countries, ITPA provides a platform for IT professionals to network, learn, and grow</p>


                         <button>
                              read more...
                         </button>

                    </div>



               </div>


               <section className="Gallery">

                    <h1 className="gallery-head">
                         Check our Gallery
                    </h1>


                    <section className="gallery-container">


                         <div className="left-gallery">
                              <div className="image-grid">
                                   {images.map((image, index) => (
                                        <div className="image-item" key={index}>
                                             <img src={tech} alt={`Image ${index + 1}`} />
                                        </div>
                                   ))}
                              </div>

                         </div>


                         <Carousel className='carousel' infiniteLoop={true} autoPlay={true} interval={3000}>
                              <div>
                                   <img className='ima' src={tech} alt="Image 1" />
                              </div>
                              <div>
                                   <img className='ima' src={nasa} alt="Image 2" />
                              </div>
                              <div>
                                   <img className='ima' src={tech} alt="Image 3" />
                              </div>
                         </Carousel>


                         {/* <Carousel showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true}>
                              <div>
                                   <img src="image1.jpg" alt="Image 1" />
                              </div>
                              <div>
                                   <img src="image2.jpg" alt="Image 2" />
                              </div>
                              <div>
                                   <img src="image3.jpg" alt="Image 3" />
                              </div>
                              <div>
                                   <img src="image4.jpg" alt="Image 4" />
                              </div>
                         </Carousel> */}

                         <div className="left-gallery">
                              <div className="image-grid">
                                   {images.map((image, index) => (
                                        <div className="image-item" key={index}>
                                             <img src={tech} alt={`Image ${index + 1}`} />
                                        </div>
                                   ))}
                              </div>


                         </div>
                    </section>


                    <button className='see-more' >
                         view more
                    </button>
               </section>


               <div className="events">
                    <h2>Upcoming Events    <img src={event} alt="" className='rocket' />   </h2>
                    <p>
                         The ITPA Event Calendar lists upcoming events and webinars hosted by ITPA and its chapters. These events cover a wide range of topics, from technical skills training to career development to networking opportunities.
                    </p>

                    <button className='see-more' >
                         Check events
                    </button>

               </div>


               <section className="contact-section">

                    <h1>Contact US    <img src={call} alt="" className='rocket' />  </h1>
                    <p>
                         The ITPA Contact page provides contact information for the ITPA National Office and its chapters. Visitors can also use this page to submit a general inquiry to ITPA.
                    </p>

                    <button className='see-more' >
                         Conact us
                    </button>

               </section>



          </PageLayout>
     )
}

export default Home