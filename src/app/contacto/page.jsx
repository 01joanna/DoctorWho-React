import Contact from './Contact';
import { lato, montserrat } from '../fonts'
import React from 'react';

export default function ContactPage() {
    return (
        <div>
            <h1 className={lato.className}>Envia tu mensaje al Doctor</h1>
            <Contact />
        </div>
    );
};
