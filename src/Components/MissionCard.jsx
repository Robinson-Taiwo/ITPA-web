/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./MissionCard.css"

const MissionCard = ({ title, content, list }) => {

    
    return (
        <div className='mission-card' >

            <h1>{title}</h1>

            <p>{list== ""? content : list.map((data, index)=>  <ol key={data.id}>

<li className='goals-head' >{data.goal}:</li>

<li>{data.description}</li>


            </ol> )}</p>

        </div>)
}

export default MissionCard