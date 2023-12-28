import symbolbig from '../../../../public/assets/img/symbols/resistencia.png'
import symbolsmall from '../../../../public/assets/img/symbols/persistencia.png'
import Image from 'next/image'
import './symbolsdoctors.css'

export default function SymbolsDoctors() {

    return (
        <div className='symbols-doctors__container'>
            <Image
            src={symbolsmall}
            alt='Simbología de persistencia'
            width={375}
            height={375}
            className='persistencia__symbol-doctor'
            objectPosition='center'
            />
            <Image
            src={symbolbig}
            alt='Simbología de resistencia'
            width={640}
            height={640}
            className='resistencia__symbol-doctor'
            />
        </div>
    )
}