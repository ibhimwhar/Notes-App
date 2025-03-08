import React, { useState } from 'react';
import { FaDownload } from "react-icons/fa6";



const NoteInput = ({ onSave, onOutput }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleSave = () => {
        if (!title.trim() || !text.trim()) {
            alert("Title and text can't be empty!");
            return;
        }

        const newNote = {
            id: Date.now(),
            title,
            text,
            date: new Date().toLocaleString()
        };

        onSave(newNote);
        setTitle('');
        setText('');
    };

    return (
        <div className="w-full">
            <div className='flex mb-5 justify-end'>

                <button
                    onClick={handleSave}
                    className={`${!onOutput ? 'p-10' : 'p-5'} cursor-pointer py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-500/50 transition-all`}
                >
                    <span>{!onOutput ? 'Save' : <FaDownload />}</span>
                </button>

            </div>
            <input
                type="text"
                placeholder="Enter title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="font-bold w-full active:bg-sky-500/10 rounded-r-md text-2xl border-l-2 mb-10 border-sky-500 p-3 outline-0"
            />

            <textarea
                placeholder="Write your note here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-32 p-2 mt-3 active:bg-sky-500/10 rounded-r-md border-l-2 border-sky-500 outline-0 outline-none resize-none"
            />

        </div>
    );
};

export default NoteInput;
