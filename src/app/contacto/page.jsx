import Contact from '../components/Contact/Contact';
import { lato, montserrat } from '../fonts'
import React from 'react';
import './contactpage.css'
import SymbolsContact from '../components/BackgroundImages/SymbolsContact';

export default function ContactPage() {
    return (
        <main className='contacts__container'>
            <section>
                <h1 className={`${lato.className} ${'contacts__title'}`}>Envia tu mensaje al Doctor</h1>
                <SymbolsContact />
            </section>
            <aside>
                <Contact />
            </aside>
        </main>
    );
};
