/* eslint-disable no-unused-vars */
import React from 'react'
import PageLayout from './PageLayout'
import instagram from "../assets/Icons/mdi_instagram.svg"
import x from "../assets/Icons/x.svg"
import location from "../assets/Icons/location.svg"
import facebook from "../assets/Icons/facebook.svg"
import linkedin from "../assets/Icons/linkedin.svg"
import call from "../assets/Icons/call.svg"
import logo from "../assets/Icons/itpa-logo.webp"
import "./Contact.css"

const Contact = () => {
  return (
    <PageLayout>

      <div className="contacts-page">



        <div className="contact-header">

          <h1>Contact Us</h1>
        </div>

      </div>


      <div className="contacts-body">

        <div className="contact-body-content">
          <div className="contacts-first-div">

            <h1>
              Get in touch
            </h1>

            <h2>
              Contact
              Information
            </h2>

            <h3>
              27,Alara Street
              Yaba 100012
              Lagos State
            </h3>

            <h4>

              Call Us : 07067981819
            </h4>

            <h5>

              we are open from Monday-Friday
              08:00am - 05:00pm
            </h5>


            <div className="sharon">
              Share on
            </div>

            <div className="contact-iconst">

              <img src={instagram} alt="" className="contact-icon" />

              <img src={x} alt="" className="contact-icon" />

              <img src={facebook} alt="" className="contact-icon" />

              <img src={linkedin} alt="" className="contact-icon" />

            </div>

          </div>

        </div>

        <div className="contact-body-image">


        </div>

      </div>




    </PageLayout>
  )
}

export default Contact