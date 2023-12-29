/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import check from "../assets/Icons/check.svg"
import PageLayout from './PageLayout'
import tech from "/Images/tech.jpg"
import AOS from 'aos';
import goals from './Goals';
import kwa from "/Images/kwac.webp"
import "./About.css"
import MissionCard from './MissionCard'

const About = () => {


  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000, // Adjust the duration (in milliseconds)
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

          <MissionCard data-aos="fade-up" title=" Our Mission" list=""  content="The mission of the Information Technology Professionals Association (ITPA) is to promote and advance the field of information technology, foster professional development, and create a thriving community of IT professionals in Kwara State and beyond.

" />

          <MissionCard data-aos="fade-up" title=" Our Vision" list="" content="Our vision is to be a leading professional association that empowers and supports IT professionals in achieving excellence in their careers, while contributing to the growth and development of the IT industry.

" />

          <MissionCard data-aos="fade-up" title=" Our Goal" list={goals} content="" />

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




          <div className="part-img">

            <div className="part-img-div">

              <h4  className='fol' data-aos="fade-up">
                INFORMATION TECHNOLOGY PROFESSIONALS ASSOCIATION  has an impeccable partnership with ICT owners, tech inclined personel and several agencies in Nigeria to foster tech Worldwide
              </h4>

            </div>
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