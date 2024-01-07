'use client'
import './header.css'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import SocialNetworks from '../SocialNetwork/SocialNetworks'
import SearchBar from '../SearchBar/SearchBar'
import NavBar from './NavBar'
import SideBar from './Sidebar'
// import { useState } from 'react'

    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // }

export default function Header() {

    return (
        <header className='header__container'>
            <NavBar 
            // toggle={toggle} 
            />
            <SideBar 
            // isOpen={isOpen} toggle={toggle} 
            />
            <Logo />
            <SearchBar/>
            <SocialNetworks />
        </header>
    )
}
