import './header.css'
import Link from 'next/link'
// import Logo from '../Logo/Logo'
// import SearchBar from '../SearchBar/SearchBar'
// import SocialNetworks from '../SocialNetwork/SocialNetworks'
// import SearchBar from '../SearchBar/SearchBar'


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

export default function NavBar() {
    return (
        <div className="navbar">
        <nav>
                <ul className='navigation'>{links.map(({label, route}) => (
                    <li key={route}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))
                }
                </ul>
            </nav>
            {/* <Logo />
            <SearchBar/>
            <SocialNetworks /> */}
            </div>
    )
}