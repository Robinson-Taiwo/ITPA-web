/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

import imageData from './gaall'; // Adjust the path based on your project structure

import PageLayout from './PageLayout'
import './Gallery.css'; // Import your custom CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS

const Gallery = () => {




    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            console.log('Scroll Y Position:', scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 3000, // Set the default duration to 3000ms (3 seconds)
        });
    }, []);


    return (
        <PageLayout>

            <div className="events-container">
                <h2 data-aos="fade-up" >ITPA'S Gallery</h2>

                <p data-aos="fade-up" >Embark on a visual exploration of the Information Technology Professionals Association (ITPA) Gallery. Immerse yourself in the dynamic world of technology through a curated collection of images capturing the essence of IT professionals at work.</p>


                <div className="masonry-container">
                    {imageData.map((image, index) => (
                        <div key={image.id} className="masonry-item">
                            <img data-aos="fade-up" data-aos-delay={`${index * 2000}`} src={image.url} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>        </PageLayout>
    )
}

export default Gallery