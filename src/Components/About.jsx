/* eslint-disable no-unused-vars */
import React from 'react'
import check from "../assets/Icons/check.svg"
import PageLayout from './PageLayout'
import "./About.css"

const About = () => {
  return (
    <PageLayout>

      <div className="About-pagel">

        <div className="about-page-head">
          HISTORY OF <span className='text-[#213e8c] loco' >ITPA </span>
        </div>

        <p>

          Information Technology Professionals Association (ITPA) which was incorporated on the 30th day of January with registration number CAC/IT/NO124097 , 2019 has it roots in Kwara State Computer Association (KWASCA).
          Kwara State Computer Association is an umbrella body  for all ICT professionals in the state which include: Computer Engineers, Programmers, Graphic Designers, Computer Business Centre Operators, Computer Training Institute/Educators, Web Developers, ICT Manufacturers, Cyber Café Business Owners, Graduate and students of Computer Science, Cyber Security, Educational Technologies and other Related Departments.



          Information Technology Professionals Association (ITPA)  has over 5000 members organized in zones spread across different states and countries in the world.

        </p>

        <h1 className="about-page-headt">
          Benefits of Membership
        </h1>

        <ul className='ul'>

          <li>
            <img src={check} className='checki' alt="" />
            <h4>Access to the latest industry news and trends</h4>

          </li>


          <li>
            <img src={check} alt="" className='checki' />
            <h4> Networking opportunities with other IT professionals</h4>


          </li>

          <li>
            <img src={check} className='checki' alt="" />
            <h4>          Professional development and training opportunities
            </h4>

          </li>

          <li>
            <img src={check} className='checki' alt="" />
            <h4>          Advocacy for the IT profession
            </h4>

          </li>




        </ul>


      </div>






    </PageLayout>
  )
}

export default About