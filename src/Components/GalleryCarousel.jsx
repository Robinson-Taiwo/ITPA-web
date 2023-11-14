/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './GalleryCarousel.css'; // Import your custom CSS file for styling
import imagesData from './Data'; // Adjust the path based on your project structure

const GalleryCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

    useEffect(() => {
        let interval;

        if (isAutoplayEnabled) {
            interval = setInterval(() => {
                nextImage();
            }, 3000); // Adjust the autoplay interval as needed
        }

        return () => {
            clearInterval(interval);
        };
    }, [currentImageIndex, isAutoplayEnabled]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagesData.length) % imagesData.length);
    };

    const toggleAutoplay = () => {
        setIsAutoplayEnabled((prevValue) => !prevValue);
    };

    return (
        <div className="gallery-carousel-container">
            <div className="gallery-main-slide">
                <img src={imagesData[currentImageIndex].url} alt={imagesData[currentImageIndex].alt} />
            </div>
            {/* <div className="gallery-thumbnails">
                {imagesData.map((image, index) => (
                    <div
                        key={image.id}
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                    >
                        <img src={image.url} alt={image.alt} />
                    </div>
                ))}
            </div> */}
            {/* <div className="carousel-buttons">
                <button className="carousel-button prev" onClick={prevImage}>
                    &#10094;
                </button>
                <button className="carousel-button next" onClick={nextImage}>
                    &#10095;
                </button>


               
            </div> */}
        </div>
    );
};

export default GalleryCarousel;
