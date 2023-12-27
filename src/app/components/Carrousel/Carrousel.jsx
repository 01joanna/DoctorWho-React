'use client'
import { useState } from 'react'
import './carrousel.css'

const image1 = '/assets/img/carrusel/carrusel-1.webp';
const image2 = '/assets/img/carrusel/carrusel-2.jpg';

const imagesCarousel = [{
    id: 0,
    title: 'The Giggle',
    imgUrl: image1,
},{
    id: 1,
    title: 'Allons-y!',
    imgUrl: image2,

}]

const Carrousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % imagesCarousel.length;
    setCurrentImageIndex(newIndex);
    };

    const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + imagesCarousel.length) % imagesCarousel.length;
    setCurrentImageIndex(newIndex);
    };

    return (
        <div className='carousel-container'>
            <div className='carousel-image' style={{ backgroundImage: `url(${imagesCarousel[currentImageIndex].imgUrl})` }}>
                <h2>{imagesCarousel[currentImageIndex].title}</h2>
            </div>
            <div className='carousel-buttons'>
                <button onClick={prevImage}>Hola1</button>
                <button onClick={nextImage}>Hola2</button>
            </div>
        </div>
    );
};

export default Carrousel;