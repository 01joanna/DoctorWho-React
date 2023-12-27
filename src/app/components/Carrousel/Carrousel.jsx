'use client'
import { useState } from 'react'
import './carrousel.css'
import ButtonComponent from '../GeneralButton/GeneralButton'

const image1 = '/assets/img/carrusel/carrusel-2.jpg';
const image2 = '/assets/img/carrusel/carrusel-1.webp';
const image3 = '/assets/img/carrusel/carrusel-3.jpeg';
const image4 = '/assets/img/carrusel/carrusel-4.jpeg';
const image5 = '/assets/img/carrusel/carrusel-5.jpeg';

const imagesCarousel = [{
    id: 0,
    title: 'The Giggle',
    imgUrl: image1,
},{
    id: 1,
    title: 'Allons-y!',
    imgUrl: image2,

},{
    id: 2,
    title: 'The Giggle',
    imgUrl: image3,
},{
    id: 3,
    title: 'Allons-y!',
    imgUrl: image4,

},{
    id: 4,
    title: 'The Giggle',
    imgUrl: image5,
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
            <div 
            className='carousel-image' 
            style={{ backgroundImage: `url(${imagesCarousel[currentImageIndex].imgUrl})` }}>
                <h2>{imagesCarousel[currentImageIndex].title}</h2>
                <ButtonComponent text='Ver más' to='https://www.doctorwho.tv/' className="carrousel__main-btn"/>
            </div>
            <div className='carousel-buttons'>
                <button onClick={prevImage}></button>
                <button onClick={nextImage}></button>
                <button onClick={prevImage}></button>
                <button onClick={nextImage}></button>
                <button onClick={prevImage}></button>
            </div>
        </div>
    );
};

export default Carrousel;