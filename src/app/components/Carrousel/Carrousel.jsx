'use client'
import { useState, useEffect } from 'react'
import './carrousel.css'
import ButtonComponent from '../GeneralButton/GeneralButton'
import { lato, montserrat } from '../../fonts'

const image1 = '/assets/img/carrusel/carrusel-2.jpg';
const image2 = '/assets/img/carrusel/carrusel-1.webp';
// const image3 = '/assets/img/carrusel/carrusel-3.jpeg';
// const image4 = '/assets/img/carrusel/carrusel-4.jpeg';
// const image5 = '/assets/img/carrusel/carrusel-5.jpeg';

const imagesCarousel = [{
    id: 0,
    title: 'The Giggle',
    imgUrl: image1,
},{
    id: 1,
    title: 'Allons-y!',
    imgUrl: image2,

},
// {
//     id: 2,
//     title: 'The Star Beast',
//     imgUrl: image3,
// },{
//     id: 3,
//     title: 'New Doctor!',
//     imgUrl: image4,

// },{
//     id: 4,
//     title: 'Explore!',
//     imgUrl: image5,
// }
]

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

    useEffect(() => {
        let intervalId = setInterval(() => {
            document.querySelector('.carrousel__img').classList.add('fade-out');
            setTimeout(() => {
                nextImage();
                setTimeout(() => {
                    document.querySelector('.carrousel__img').classList.remove('fade-out');
                }, 100);
            }, 500);
        }, 6000);

        return () => clearInterval(intervalId);
        }, [currentImageIndex]); 

    return (
        <div className='carrousel__container'>
            <div 
            className='carrousel__img'
            style={{ backgroundImage: `url(${imagesCarousel[currentImageIndex].imgUrl})` }}>
                <h2 className={`${'carrousel__title'} ${lato.className}`}>{imagesCarousel[currentImageIndex].title}</h2>
                <div className='main-btn__container'>
                    <ButtonComponent 
                        text='Ver ahora' 
                        to='https://www.doctorwho.tv/' 
                        className={`${lato.className} ${"main-btn"}`}/>
                </div>
            </div>
            <div className='carrousel__btns'>
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