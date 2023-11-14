/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./MissionCard.css"

const MissionCard = ({ title, content }) => {
    return (
        <div className='mission-card' >

            <h1>{title}</h1>

            <p>{content}</p>

        </div>)
}

export default MissionCard