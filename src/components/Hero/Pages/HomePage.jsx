import React, { useState, useEffect } from 'react';
import NoteInput from './NoteInput';
import NoteModal from './NoteModal';
import { GoTrash } from "react-icons/go";

const Page1 = ({ onOutput }) => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);
    }, []);

    useEffect(() => {
        if (notes.length > 0) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes]);

    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

    const deleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    return (
        <>
            {!selectedNote && (
                <div className="p-2 w-full">

                    <NoteInput onOutput={onOutput} onSave={addNote} />

                    <div className="mt-5 mb-10">
                        <h2 className="text-xl font-semibold">Your Notes</h2>
                        {notes.length === 0 ? <p className="opacity-40">No notes yet...</p> : (
                            <div className="grid gap-4 mt-3 border-l-2 border-sky-500 p-3">
                                {notes.map((note) => (
                                    <div
                                        key={note.id}
                                        className="p-4 bg-sky-500/10 border-l-4 transition-all duration-400 hover:scale-97 border-sky-500 rounded-lg shadow-sm relative cursor-pointer"
                                        onClick={() => setSelectedNote(note)}
                                    >
                                        <h3 className="font-bold">{note.title}</h3>
                                        <p className="opacity-50 mt-1 truncate">{note.text}</p>
                                        <p className="text-xs opacity-20 mt-2">{note.date}</p>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}
                                            className="absolute flex flex-col transition-all duration-500 items-center group top-2 right-2 text-red-500 cursor-pointer hover:text-red-700 text-sm"
                                        >
                                            <GoTrash size={20} />
                                            <span className='group-hover:block hidden text-[10px]'>Delete</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
            {selectedNote && <NoteModal note={selectedNote} onClose={() => setSelectedNote(null)} />}
        </>
    );
};

export default Page1;
