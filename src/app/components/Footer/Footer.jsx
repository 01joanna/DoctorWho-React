
import Image from 'next/image'
import './footer.css'
import SocialNetworks from '../SocialNetwork/SocialNetworks'
import logoCadena from '../../assets/img/logos/logo-cadena.png'

export default function Footer() {
    return (
        <footer>
            <Image
            src={logoCadena}
            alt='Foto del simbolo del footer'
            width={35}
            height={34}/>
            <SocialNetworks />
        </footer>
    )
}