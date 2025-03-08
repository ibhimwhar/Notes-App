import React from 'react';
import { IoInvertMode } from "react-icons/io5";

const Page2 = ({ onToggle, onOpen }) => {
  return (
    <div className={`md:w-100 w-full border-l-2 border-sky-500 p-2 ${!onOpen && 'hidden'}`}>
      {onOpen && (
        <div className='sticky bg-black/5 rounded-md top-20 md:top-30'>
          <h1 className='text-2xl p-2 mb-5 font-bold text-sky-500'>Settings</h1>
          <div className=''>
            <div className='p-2 mb-5 md:mb-10'>
              <button onClick={onToggle} className='cursor-pointer'>
                <IoInvertMode size={20} />
              </button>
              <p className='text-[10px] opacity-45'>light and dark mode</p>
            </div>

            <div className=' mb-5 md:mb-10'>
              <h1 className='text-lg p-2 text-sky-500'>Password</h1>
              <div className='p-3 bg-sky-500/10 rounded-md cursor-pointer transition-all duration-400 hover:scale-97'>
                <h1 className='text-sm'>Set password</h1>
                <p className='text-[10px] opacity-45'>Set a password to lock the notes</p>
              </div>
            </div>

            <div className=''>
              <h1 className='text-lg p-2 text-sky-500'>Information</h1>
              <div className='p-3 space-y-5'>
                <p className='text-sm opacity-45'>More apps</p>
                <p className='text-sm opacity-45'>Share to friends</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page2;
