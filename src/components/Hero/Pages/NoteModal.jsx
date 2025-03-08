import React from 'react';

const NoteModal = ({ note, onClose }) => {
    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center">
            <div className="p-5 m-3 border-t-2 border-sky-600 bg-sky-500/10 rounded-b-md max-w-lg w-full">
                <h2 className="text-xl font-bold text-sky-500">{note.title}</h2>
                <p className="opacity-60 mt-3">{note.text}</p>
                <p className="text-xs opacity-40 mt-2">{note.date}</p>
                <button onClick={onClose} className="mt-5 w-full bg-sky-500 text-white py-2 rounded-lg cursor-pointer hover:bg-sky-500/10">
                    Close
                </button>
            </div>
        </div>
    );
};

export default NoteModal;
