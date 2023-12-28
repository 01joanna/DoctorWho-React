
import Link from 'next/link';
import LogoImage from '../../../../public/assets/img/logos/logo.png'
import Image  from 'next/image';
import './logo.css'


export default function Logo() {
    return (
        <div className='logo__img'>
            <Link href='/' >
                <Image 
                src={LogoImage} 
                alt='Dr. Who Home' 
                width={170} 
                height={170}
                priority={true}/>
            </Link>
        </div>
    )
}