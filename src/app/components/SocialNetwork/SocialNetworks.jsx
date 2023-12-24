import Image from "next/image"
import "./socialnetworks.css"
import facebookIcon from '../../assets/img/icons/facebook.svg'
import xIcon from '../../assets/img/icons/simple-icons_x.svg'
import instagramIcon from '../../assets/img/icons/mdi_instagram.svg'
import tiktokIcon from '../../assets/img/icons/ic_baseline-tiktok.svg'

export default function SocialNetworks() {
    return (
        <div className='social__networks-container'>
            <a href="https://www.facebook.com/" target="_blank">
                <Image
                src={facebookIcon}
                alt="Facebook icon"
                width={24}
                height={24}
                />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
                <Image
                src={xIcon}
                alt="X icon"
                width={24}
                height={24}
                />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <Image
                src={instagramIcon}
                alt="Instagram icon"
                width={24}
                height={24}
                />
            </a>
            <a href="https://www.tiktok.com/" target="_blank">
                <Image
                src={tiktokIcon}
                alt="Tiktok icon"
                width={24}
                height={24}
                />
            </a>
        </div>
    )
}
