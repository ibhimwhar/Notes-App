import React from 'react';
import { TbMenu } from "react-icons/tb";
import { RiSearch2Line } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";

const Footer = ({ buttonLeft, buttonRight, PathLeft, PathRight }) => {
    return (
        <footer className="fixed rounded-t-2xl z-50 bottom-0 w-full border-sky-500 border-t-2 bg-sky-500/10 backdrop-blur-2xl">
            <div className="flex justify-between items-center p-4">
                <button onClick={buttonLeft} className={`cursor-pointer p-2 ${PathLeft ? 'visible' : 'invisible'}`}>
                    <TbMenu size={20} />
                </button>

                <div className="relative w-14 h-14 flex justify-center items-center bg-sky-500 rounded-full shadow-xl">
                    <a href='/' className="bg-white/25 border-5 border-sky-600  p-2 rounded-full shadow-md cursor-pointer hover:scale-110 transition-all">
                        <IoIosAdd size={40} className="text-[var(--bgColor)] " />
                    </a>
                </div>

                <button onClick={buttonRight} className={`cursor-pointer p-2 ${PathRight ? 'visible' : 'invisible'}`}>
                    <RiSearch2Line size={20} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
