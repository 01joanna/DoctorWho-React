import React from "react";
import Image from "next/image";
import ThirteenDoctor from '../../../public/assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg'
import { lato, montserrat } from '../fonts'
import './about.css'


export default function AboutPage() {
    return (
        <main className="about__container">
            <section className="about__text-container">
                <h1>Conoce a ... decimotercera doctor</h1>
                <p className="about__text">Lorem ipsum dolor sit amet consectetur. Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.</p>
                <button>Ver más</button>
            </section>
            <aside className="about__image">
                <Image
                    src={ThirteenDoctor} 
                    alt="Imagen de decimotercera doctor" 
                    width={360}
                    height='auto' 
                    objectFit='cover'
                />
            </aside>
        </main>
    )
}