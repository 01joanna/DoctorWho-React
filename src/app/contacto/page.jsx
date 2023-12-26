import Contact from '../components/Contact/Contact';
import { lato, montserrat } from '../fonts'
import React from 'react';

export default function ContactPage() {
    return (
        <main className='contacts__container'>
            <section>
                <h1>Envia tu mensaje al Doctor</h1>
            </section>
            <aside>
                <Contact />
            </aside>
        </main>
    );
};

            {/* <section id="contact" className={`${lato} contacts__title-wrapper`}><h1>Envia tu mensaje al Doctor</h1></section> */}
