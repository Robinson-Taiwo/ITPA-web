/* eslint-disable no-unused-vars */
import React from 'react'
import instagram from "../assets/Icons/mdi_instagram.svg"
import x from "../assets/Icons/x.svg"
import location from "../assets/Icons/location.svg"
import facebook from "../assets/Icons/facebook.svg"
import linkedin from "../assets/Icons/linkedin.svg"
import call from "../assets/Icons/call.svg"
import logo from "../assets/Icons/itpa-logo.webp"



import "./Footer.css"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-first-div">
        <div className="footer-first-section-col">

          <div className="footer-first-header">

            <img src={logo} className='footer-logo' alt="" />


            <p className="footer-text">
           Ilorin Technology Professionals Association was established
            </p>
          </div>


          <div className="demacate">
            Terms of Use <span className='patition'></span>  Privacy Policy
          </div>

        </div>




        <div className="footer-col">

          <h2>Useful Links</h2>

          <p>

            <Link to="/" >Home</Link>
          </p>
          <p>

            <Link to="/Books" >Books</Link>
          </p>
          <p>

            <Link to="/About" >About</Link>
          </p>
          <p>
            <Link to="/Achievements" >Achievement</Link>

          </p>
          <p>

            <Link to="/Team" >Team</Link>
          </p>
          <p>

            <Link to="/contact" >Contacts</Link>
          </p>



          <div>
            <h6 className='footer-socials' >follow us</h6>

            <img src={instagram} alt="" />
            <img src={x} alt="" />
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />


          </div>
        </div>

        <div className="footer-contacts">

          <h1>Contact Us</h1>

          <div>
            <img src={call} alt="" />

            <p> +2347039614411</p>
          </div>


          <div>
            <img src={location} alt="" />

            <h2> 25 Asa-Dam Rd, Ilorin,  Kwara State. 240281</h2>
          </div>

        </div>



      </div>


      <div className="reserved">

        <p >
          All rights reserved. © ITPA.
        </p>
        <p className='mt-[0rem]' >
          prudly designed by Omoyeni Taiwo
        </p>
      </div>



    </div>

  )
}

export default Footer
