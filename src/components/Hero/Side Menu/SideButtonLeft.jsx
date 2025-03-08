import React from 'react';
import { FaNoteSticky } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from 'react-router';

const SideButtonLeft = () => {
    const List = [
        { id: 1, title: 'All Notes', icon: <FaNoteSticky />, link: '/Notes-App/' },
        { id: 2, title: 'Favorites', icon: <FaHeart />, link: '/path/favorites' },
        { id: 3, title: 'Categories', icon: <BiSolidCategory />, link: '/path/categories' }
    ];

    return (
        <div className="p-5 space-y-10 w-full">
            {List.map((items) => (
                <Link to={items.link} key={items.id} className="bg-sky-500/10 p-3 rounded-2xl flex items-center space-x-4 hover:bg-sky-500 transition-all duration-300">
                    <span>{items.icon}</span>
                    <span>{items.title}</span>
                </Link>
            ))}
        </div>
    );
};

export default SideButtonLeft;
