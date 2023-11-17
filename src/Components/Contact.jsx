/* eslint-disable no-unused-vars */
import React from 'react'
import instagram from "../assets/Icons/instagram_icon.svg"
import x from "../assets/Icons/x_icon.svg"
import location from "../assets/Icons/location.svg"
import facebook from "../assets/Icons/facebook_icon.svg"
import linkedin from "../assets/Icons/linkedin_icon.svg"
import call from "../assets/Icons/call_icon.svg"
import logo from "../assets/Icons/itpa-logo.webp"
import PageLayout from './PageLayout'
import "./Contact.css"

const Contact = () => {
  return (
    <PageLayout>

      <div className="contacts-page">



        <div className="contact-header">

          <div className="contact-header-overlay">

            <h1>Contact Us</h1>

          </div>

        </div>

      </div>


      <div className="contacts-body">

        <div className="contact-body-content ">

          <div className="contacts-first-div">

            <h1>
              Get in touch
            </h1>

            <h2>
              Contact
              Information
            </h2>

            <h3>
              25 Asa-Dam Rd, Ilorin, Kwara State. 240281
            </h3>

            <h4>

              Call Us : +2347039614411
            </h4>

            <h5>

              ITPA is always at your reach. join or contact us at anytime
            </h5>


            <div className="sharon">
              contact us on:
            </div>

            <div className="contact-iconstl">

              <div>

                <img src={instagram} alt="" className="contact-icon" />

                <img src={x} alt="" className="contact-icon" />

                <img src={facebook} alt="" className="contact-icon" />

                <img src={linkedin} alt="" className="contact-icon" />

              </div>


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