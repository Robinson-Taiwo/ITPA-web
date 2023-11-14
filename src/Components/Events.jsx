/* eslint-disable no-unused-vars */
import React from 'react'
import PageLayout from './PageLayout'
import event from "../assets/Icons/eventt.svg"
import "./Events.css"

const Events = () => {
  return (
    <PageLayout>


      <section className="events-containerl">

          <h1>No Event yet. check back later!</h1>
          <img src={event} alt="" />


        


      </section>

    </PageLayout>
  )
}

export default Events