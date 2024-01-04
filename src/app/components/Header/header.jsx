import './header.css'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import SocialNetworks from '../SocialNetwork/SocialNetworks'
import SearchBar from '../SearchBar/SearchBar'
import HamburgerMenu from '../../../../public/assets/img/icons/hamburger-menu.svg'

const links = [{
    label: 'Conoce a',
    route: '/conoce-a'
}, {
    label: 'Doctores',
    route: '/doctores'
}, {
    label: 'Contacto',
    route: '/contacto'
}]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`header__container ${menuOpen ? 'menu-open' : ''}`}>
            <div className="burger-menu__navigation" onClick={toggleMenu}>
            <Image
                src={HamburgerMenu}
                alt="Menu hamburguesa en responsive"
                width={24}
                height={24}
                className='burger-menu__img'
                />
            </div>
            <nav className={menuOpen ? 'show' : ''}>
                <ul className='navigation' onClick={toggleMenu}>{links.map(({label, route}) => (
                    <li key={route}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))
                }
                </ul>
            </nav>
            <Logo />
            <SearchBar/>
            <SocialNetworks />
        </header>
    )
}
