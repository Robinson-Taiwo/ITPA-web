/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import check from "../assets/Icons/check.svg"
import PageLayout from './PageLayout'
import tech from "/Images/tech.jpg"
import AOS from 'aos';

import kwa from "/Images/kwac.webp"
import "./About.css"
import MissionCard from './MissionCard'

const About = () => {


  useEffect(() => {
    AOS.init({
      duration: 3000, // Set the default duration to 3000ms (3 seconds)
    });
  }, []);


  return (
    <PageLayout>

      <div className="About-pagel">


        <div className="about-top">

          <div className="about-top-overlay">

            <h1 data-aos="fade-up">About ITPA</h1>

          </div>


        </div>

        <div data-aos="fade-up" className="about-page-head">
          HISTORY OF <span className='text-[#213e8c] loco' >ITPA </span>
        </div>

        <p data-aos="fade-up">

          Information Technology Professionals Association (ITPA) which was incorporated on the 30th day of January with registration number CAC/IT/NO124097 , 2019 has it roots in Kwara State Computer Association (KWASCA).
          Kwara State Computer Association is an umbrella body  for all ICT professionals in the state which include: Computer Engineers, Programmers, Graphic Designers, Computer Business Centre Operators, Computer Training Institute/Educators, Web Developers, ICT Manufacturers, Cyber Café Business Owners, Graduate and students of Computer Science, Cyber Security, Educational Technologies and other Related Departments.



          Information Technology Professionals Association (ITPA)  has over 5000 members organized in zones spread across different states and countries in the world.

        </p>


        <div data-aos="fade-up" className="statement-cards">

          <MissionCard data-aos="fade-up" title=" Our Mission" content="Coalition of Information and Communication Technology Professionals for Societal Development.

" />

          <MissionCard data-aos="fade-up" title=" Our Vision" content="Our vision is to generate new values to the world by developing end to end I.T solutions that meets the needs of modern day business.

" />

          <MissionCard data-aos="fade-up" title=" Our Goal" content="Extending Technology and building professionals" />

          {/* title="Vision" content="Your vision statement goes here." */}
        </div>


        <div className="about-quote">

          <h5 data-aos="fade-up">
            "We Believe anyone can be productive with ITPA.

            Become a Ready made"
          </h5>

        </div>

        <div data-aos="fade-up" className="about-partners">

          <h1>
            ITPA'S PARTNERS

          </h1>


          <h4 data-aos="fade-up">
            ITPA  has an impeccable partnership with ICT owners and tech inclined personel to foster tech
          </h4>

          <div className="part-img">

            <img data-aos="fade-up" src={kwa} alt="" />

          </div>

        </div>



        <h1 data-aos="fade-up" className="about-page-headt">
          Benefits of Membership
        </h1>

        <div className="contain-about">

          <div className="blue-about">

          </div>


          <ul className='ul'>

            <li data-aos="fade-up">
              <img src={check} className='checki' alt="" />
              <h4>Access to the latest industry news and trends</h4>

            </li>


            <li data-aos="fade-up">
              <img src={check} alt="" className='checki' />
              <h4> Networking opportunities with other IT professionals</h4>


            </li>

            <li data-aos="fade-up">
              <img src={check} className='checki' alt="" />
              <h4>          Professional development and training opportunities
              </h4>

            </li>

            <li data-aos="fade-up">
              <img src={check} className='checki' alt="" />
              <h4>          Advocacy for the IT profession
              </h4>

            </li>




          </ul>


        </div>



      </div>






    </PageLayout>
  )
}

export default About