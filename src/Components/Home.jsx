/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import rocket from "../assets/Icons/rocket.svg"
import vision from "../assets/Icons/vision.svg"
import call from "../assets/Icons/cal.svg"
import event from "../assets/Icons/event.svg"
import PageLayout from './PageLayout'
import AOS from 'aos';
import nasa from "/Images/nasa.jpg"
import tech from "/Images/tech.jpg"
// import video from "/Images/connectedo.mp4"
// import net from "/Images/connect.mp4"

// import net from "/Images/tst.mp4"









import 'aos/dist/aos.css'; // Import the CSS
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "./Home.css"
import { Link } from 'react-router-dom'
import imagesData from './Data'; // Adjust the path based on your project structure
import GalleryCarousel from './GalleryCarousel'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Home = () => {
     const membersRef = useRef(null);
     const serviceYearsRef = useRef(null);
     const awardsRef = useRef(null);

     const animateCount = (target, endValue) => {
          let startValue = 0;
          const duration = 2000;
          const increment = Math.ceil(endValue / (duration / 20)); // Adjust the increment for smoother animation

          const updateCount = () => {
               if (startValue <= endValue) {
                    target.innerText = startValue;
                    startValue += increment;
                    setTimeout(updateCount, 20);
               }
          };

          updateCount();
     };

     const handleIntersection = (entry, target, endValue) => {
          if (entry.isIntersecting) {
               animateCount(target.querySelector('.count'), endValue);
          }
     };

     useEffect(() => {
          const membersObserver = new IntersectionObserver((entries) => handleIntersection(entries[0], membersRef.current, 5000), {
               threshold: 0.5,
          });

          const serviceYearsObserver = new IntersectionObserver((entries) => handleIntersection(entries[0], serviceYearsRef.current, 10), {
               threshold: 0.5,
          });

          const awardsObserver = new IntersectionObserver((entries) => handleIntersection(entries[0], awardsRef.current, 10), {
               threshold: 0.5,
          });

          membersObserver.observe(membersRef.current);
          serviceYearsObserver.observe(serviceYearsRef.current);
          awardsObserver.observe(awardsRef.current);

          // Clean up observers
          return () => {
               membersObserver.disconnect();
               serviceYearsObserver.disconnect();
               awardsObserver.disconnect();
          };
     }, []);



     useEffect(() => {
          AOS.init({
               offset: 50,
               duration: 1000, // Adjust the duration (in milliseconds)
          });
     }, []);




     return (
          <PageLayout>

               <div className="Home-first" >


                    <div className="Home-container">


                         {/* <video autoPlay loop muted>
                              <source
                                   src={net}
                                   type="video/mp4"
                                   media="(min-width: 768px)"
                              />
                              <source
                                   src={video}
                                   type="video/mp4"
                                   media="(max-width: 767px)"
                              />

  <source src="video-1920x1080.mp4" type="video/mp4" media="(min-width: 1200px)"/>
  <source src="video-1024x768.mp4" type="video/mp4" media="(min-width: 768px)"/>
  <source src="video-720x480.mp4" type="video/mp4" media="(max-width: 767px)"/>

                              Your browser does not support the video tag.
                         </video> */}
                         {/* Add other content over the video as needed */}
                              <div className="home-first-overlay">

                                   <div data-aos="fade-up" className="home-big-text">

                                        <h1>
                                             INFORMATION TECHNOLOGY PROFESSIONALS ASSOCIATION

                                        </h1>
                                   </div>

                                   <p data-aos="fade-up" className="home-text-motto">
                                        Welcome to ITPA – together, we shape the future of technology! Connecting, Empowering, and Advancing IT Professionals Worldwide
                                   </p>




                              </div>
                         {/* <div className="content">
                         </div> */}

                    </div>


               </div>
               <div className="home-stats">
                    <div data-aos="fade-up" ref={membersRef}>
                         <h2 className='text-[#3241e7]'><span className="count">0</span>+</h2>
                         <h3>members world-wide</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" ref={serviceYearsRef}>
                         <h2 className='text-yellow-300'><span className="count">0</span>+</h2>
                         <h3>years of service</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" ref={awardsRef}>
                         <h2><span className="count">0</span>+</h2>
                         <h3>Awards</h3>
                    </div>
               </div>








               <div className="about-section">

                    <div className="about-overlay">




                         <h1 data-aos="fade-up">
                              About ITPA
                         </h1>


                         <p data-aos="fade-up">The Information Technology Professionals Association (ITPA) is a global association that connects, empowers, and advances IT professionals worldwide. With over 5,000   members organized in zones spread across different states and countries, ITPA provides a platform for IT professionals to network, learn, and grow</p>



                         <button data-aos="fade-up" className='see-more' >
                              <Link to="/About" >
                                   see more ..

                              </Link>                         </button>



                    </div>



               </div>



               <div className="service-dept">


                    <h1 data-aos="fade-up" className="service-dept-header">
                         Services
                    </h1>


                    <div className="services-sect">

                         <div data-aos="fade-up" className="service-divo ">

                              <div className="service-div-overlay">
                                   <h1 data-aos="fade-up" className="se">
                                        Promoting  Technology
                                   </h1>
                              </div>


                         </div>
                         <div data-aos="fade-up" className="service-divt">
                              <div className="service-div-overlay">
                                   <h1 data-aos="fade-up" className="se">
                                        Extending The Tech Ecosystem
                                   </h1>
                              </div>

                         </div>
                         <div data-aos="fade-up" className="service-divth">
                              <div className="service-div-overlay">
                                   <h1 data-aos="fade-up" className="se">
                                        Inovation
                                   </h1>
                              </div>

                         </div>
                         <div data-aos="fade-up" className="service-div">
                              <div className="service-div-overlay">
                                   <h1 data-aos="fade-up" className="se">
                                        Innovative Trainings
                                   </h1>
                              </div>
                         </div>


                    </div>
               </div>



               <div className="trusted-by">
                    <h1 data-aos="fade-up" className="trusted-header">
                         Trusted By
                    </h1>

                    <section className="trusted-container">

                         <img data-aos="fade-up" src="/Images/kwirs.jpeg" alt="" className="trusted-logo" />

                         <img data-aos="fade-up" src="/Images/ksg.jpeg" alt="" className="trusted-logo" />

                         <img data-aos="fade-up" src="/Images/kwasca.jpeg" alt="" className="trusted-logo" />

                         <img data-aos="fade-up" src="/Images/police.jpeg" alt="" className="trusted-logo" />

                         <img data-aos="fade-up" src="/Images/nitda.jpeg" alt="" className="trusted-logo" />

                         <img data-aos="fade-up" src="/Images/kwartma.jpeg" alt="" className="trusted-logo" />

                         <img data-aos="fade-up" src="/Images/fmc.jpeg" alt="" className="trusted-logo" />

                         <img data-aos="fade-up" src="/Images/optics.jpeg" alt="" className="trusted-logo" />
                         <img data-aos="fade-up" src="/Images/coa.jpeg" alt="" className="trusted-logo" />

                         <img data-aos="fade-up" src="/Images/civil.jpeg" alt="" className="trusted-logo" />



                    </section>
               </div>










               <section className="contact-section">

                    <h1 data-aos="fade-up"  >Contact US    <img data-aos="fade-up" src={call} alt="" className='rocket' />  </h1>
                    <p data-aos="fade-up">
                         Have questions, suggestions, or just want to say hello? We'd love to hear from you! Our team is ready to assist you with anything you need. Feel free to reach out through the contact form or find our contact details below.

                    </p>



                    <button data-aos="fade-up" className='see-more' >
                         <Link to="/Contact" >

                              Contact us
                         </Link>
                    </button>


               </section>



               <section className="Gallery">

                    <h1 data-aos="fade-up" className="gallery-head">
                         Check our Gallery
                    </h1>


                    <section data-aos="fade-up" className="gallery-container">



                         <GalleryCarousel images={imagesData} />



                    </section>

                    <button data-aos="fade-up" className='see-more' >
                         <Link to="/Gallery" >
                              see more ..

                         </Link>                         </button>


               </section>


               <div className="events">
                    <h2 data-aos="fade-up">Upcoming Events    <img src={event} alt="" className='rocket' />   </h2>
                    <p data-aos="fade-up" >
                         The ITPA Event Calendar lists upcoming events and webinars hosted by ITPA and its chapters. These events cover a wide range of topics, from technical skills training to career development to networking opportunities.
                    </p>

                    <button data-aos="fade-up" className='see-more' >
                         <Link to="/Event" >


                              Check events
                         </Link>
                    </button>

               </div>





          </PageLayout>
     )
}

export default Home