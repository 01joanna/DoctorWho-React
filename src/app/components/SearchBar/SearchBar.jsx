'use client'
import { useState } from 'react';
import SearchIcon from '../../../../public/assets/img/icons/material-symbols-light_search.svg'
// import { useState } from "react";
import Image from "next/image";
import './searchbar.css'

export default function SearchBar() {
    const [searchItem, setSearchItem] = useState("");  
    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);
    }

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
            placeholder="Buscar"
            className='searchbar__placeholder'
            value={searchItem}
            onChange={handleInputChange}
            />
        </div>

        
    )
}