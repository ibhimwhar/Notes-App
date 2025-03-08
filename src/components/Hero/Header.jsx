import React from 'react'
import { RiSettings4Fill } from "react-icons/ri";

const Header = ({ menu, onRotate }) => {
    return (
        <header className='fixed z-50 overflow-hidden top-0 flex items-center justify-between w-full border-b-2 border-sky-500 p-4 bg-sky-500/10 backdrop-blur-2xl'>
            <h1 className='text-4xl relative text-sky-500 font-bold rounded-md'>Notepad<span className='animate-bounce absolute'>.</span></h1>
            <button onClick={menu} className={`p-1 transition-all cursor-pointer duration-300 text-sky-500 ${!onRotate ? 'rotate-0' : 'rotate-90'}`}>
                <RiSettings4Fill size={20} />
            </button>
        </header>
    )
}

export default Header
