import './contact.css';
import ButtonComponent from '../GeneralButton/GeneralButton';
import { lato } from '../../fonts'

export default function Contact() {
    return (
        <section className={`${lato.className} ${'contact__section'}`}>
            <form className={lato.className}>
                <div className='name__container'>
                    <label htmlFor="name"></label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Nombre *"
                    className={lato.className}
                    />
                </div>
                <div className='email__container'>
                    <label htmlFor="email"></label>
                    <input 
                    type="text" 
                    id="email" 
                    name="email"
                    placeholder="Email *"
                    className={lato.className}
                    />
                </div>
                <div className='message__container'>
                    <label htmlFor="message"></label>
                    <textarea
                    type="text" 
                    id="message" 
                    name="message"
                    placeholder="Mensaje *"
                    className={lato.className}
                    />
                </div>
            </form>
            <ButtonComponent 
            to="" 
            text="Send" 
            className={`${'submit__btn'}`}/>
        </section>
    )
};