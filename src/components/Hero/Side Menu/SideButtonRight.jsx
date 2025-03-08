import React from 'react';
import { IoChevronBack } from "react-icons/io5";

const SideButtonRight = () => {
    return (
        <div className='w-full'>
            <div className="flex justify-center items-center w-full mt-5 mb-10">
                <IoChevronBack size={25} className="text-sky-500 ml-5 md:ml-10" />
                <input
                    type="text"
                    placeholder="Search your note here..."
                    className="w-full text-xl m-5 p-2 active:bg-sky-500/10 rounded-t-md border-b-2 border-sky-500 outline-0"
                />
            </div>

            <p className='text-center'>You've got nothing to see</p>

        </div>
    );
}

export default SideButtonRight;
