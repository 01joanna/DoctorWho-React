import Contact from '../components/Contact/Contact';
import ButtonComponent from '../components/GeneralButton/GeneralButton'
import { lato, montserrat } from '../fonts'
import React from 'react';

export default function ContactPage() {
    return (
        <main className='contacts__container'>
            <section>
                <h1 className={lato.className}>Envia tu mensaje al Doctor</h1>
            </section>
            <aside>
                <Contact />
                <ButtonComponent to="https://nextjs.org/docs/pages/api-reference/components/link" text="Send"/>
            </aside>
        </main>
    );
};

            {/* <section id="contact" className={`${lato} contacts__title-wrapper`}><h1>Envia tu mensaje al Doctor</h1></section> */}
