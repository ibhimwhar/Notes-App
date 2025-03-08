import React, { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import { Routes, Route } from 'react-router';
import NoPage from './components/NoPage';
import Favorites from './components/Hero/Pages/Favorites';
import Categories from './components/Hero/Pages/Categories';


function App() {

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };


  return (
    <div>
      <Routes>
        <Route path='/Notes-App' element={<Hero onToggle={toggleDarkMode} />} />
        <Route path='/path/favorites' element={<Favorites />} />
        <Route path='/path/categories' element={<Categories />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
