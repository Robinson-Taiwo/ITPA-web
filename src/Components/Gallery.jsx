/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

import imageData from './gaall'; // Adjust the path based on your project structure

import PageLayout from './PageLayout'
import './Gallery.css'; // Import your custom CSS file for styling


const Gallery = () => {
    return (
        <PageLayout>

            <div className="events-container">
                <h2>ITPA'S Gallery</h2>
                
                <p></p>


                <div className="masonry-container">
                    {imageData.map((image) => (
                        <div key={image.id} className="masonry-item">
                            <img src={image.url} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>        </PageLayout>
    )
}

export default Gallery