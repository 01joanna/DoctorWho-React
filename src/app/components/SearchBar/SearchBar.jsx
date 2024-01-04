'use client'
// import { createContext, useState, useContext } from 'react';
import SearchIcon from '../../../../public/assets/img/icons/material-symbols-light_search.svg'
import Image from "next/image";
import './searchbar.css'

export default function SearchBar() {

    return (
        <div className="searchbar__container">
            <Image 
            src={SearchIcon}
            alt="Icono de buscador"
            width={24}
            height={24}
            className='searchbar__icon'
            />

            <input 
            type="text"
            name={'search'}
            placeholder={'Buscar'}
            className='searchbar__placeholder'
            // onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}