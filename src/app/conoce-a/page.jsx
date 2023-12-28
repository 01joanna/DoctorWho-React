import React from "react";
import Image from "next/image";
import ThirteenDoctor from '../../../public/assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg'
import { lato, montserrat } from '../fonts'
import './about.css'
import SymbolsDoctors from "../components/BackgroundImages/SymbolsDoctors";
import ButtonComponent from "../components/GeneralButton/GeneralButton";


export default function AboutPage() {
    return (
        <main className="about__container">
            <SymbolsDoctors />
            <section className="about__text-container">
                <h1 className={lato.className}>Conoce a ... decimotercera doctor</h1>
                <p className={`${montserrat.className} ${"about__text"}`} >Lorem ipsum dolor sit amet consectetur. Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.</p>
                <ButtonComponent 
                text={'Ver más'} 
                to={'https://www.doctorwho.tv/'} 
                className={`${montserrat.className} ${'vermas__btn'}`}/>
            </section>
            <aside className="about__image-container">
                <Image
                    src={ThirteenDoctor} 
                    alt="Imagen de decimotercera doctor" 
                    objectFit="auto"
                    className="about__image"
                />
            </aside>
        </main>
    )
}