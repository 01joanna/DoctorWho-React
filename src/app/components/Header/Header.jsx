'use client'
import './header.css'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import SocialNetworks from '../SocialNetwork/SocialNetworks'
import SearchBar from '../SearchBar/SearchBar'
import NavBar from './NavBar'
import SideBar from './Sidebar'
export default function Header() {

    return (
        <header className='header__container'>
            <NavBar />
            <SideBar />
            <Logo />
            <SearchBar/>
            <SocialNetworks />
        </header>
    )
}
