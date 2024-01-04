'use client'
import { createContext, useState, useContext } from 'react';
import SearchIcon from '../../../../public/assets/img/icons/material-symbols-light_search.svg'
import Image from "next/image";
import './searchbar.css'

// const doctorsContext = createContext();
// export function useDoctorsContext() {
//     return useContext(doctorsContext);
// }
export default function SearchBar() {
    // const [item, setItem] = useState("Buscar")

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
            // value={item}
            placeholder={'Buscar'}
            className='searchbar__placeholder'
            // onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}