import symbol1 from '../../../../public/assets/img/symbols/persistencia-2.png'
import symbol2 from '../../../../public/assets/img/symbols/resistencia.png'
import symbol3 from '../../../../public/assets/img/symbols/vencer.png'
import './symbolscontact.css'
import Image from 'next/image'

export default function SymbolsContact() {

    return (
        <div className='symbols__container'>
            <Image 
            src={symbol1}
            alt='Simbolo de persistencia num. 2'
            width={279}
            height={279}
            className='persistencia2__symbol-contact'
            />
            <Image 
            src={symbol2}
            alt='Simbolo de resistencia'
            width={440}
            height={440}
            className='resistencia__symbol-contact'
            />
            <Image 
            src={symbol3}
            alt='Simbolo de vencer'
            width={366}
            height={366}
            className='vencer__symbol-contact'
            />
        </div>
    )
}