import './contact.css';
import ButtonComponent from '../GeneralButton/GeneralButton';
import { lato } from '../../fonts'

export default function Contact() {
    return (
        <section className='contact__section'>
            <form className={lato.className}>
                <div className='name__container'>
                    <label htmlFor="name"></label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Nombre *"
                    />
                </div>
                <div className='email__container'>
                    <label htmlFor="email"></label>
                    <input 
                    type="text" 
                    id="email" 
                    name="email"
                    placeholder="Email *"
                    />
                </div>
                <div className='message__container'>
                    <label htmlFor="message"></label>
                    <textarea
                    type="text" 
                    id="message" 
                    name="message"
                    placeholder="Mensaje *"
                    />
                </div>
            </form>
            <ButtonComponent to="https://nextjs.org/docs/pages/api-reference/components/link" text="Send" className='submit__btn'/>
        </section>
    )
};