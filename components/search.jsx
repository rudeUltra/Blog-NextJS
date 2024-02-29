'use client'

import React, { useState } from 'react';

const SearchForm = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    
  };

  function handleSearch(){
    props.handleSearch(searchQuery)
  }
  function handleClear(){
    setSearchQuery('');
    props.handleClear();
  }

  

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Perform search based on searchQuery and selected formats
//     console.log('Search query:', searchQuery);
//     console.log('Selected formats:', formats);
//   };

  return (
    <main className="py-10">
      <div className="container mx-auto shadow-lg shadow-orange-300">
        <form className="rounded-lg bg-white p-10 shadow-lg">
          <div className="mb-4 flex items-center">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-400 p-2"
              placeholder="Filter News by Title"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="ml-2 rounded-lg bg-blue-500 p-2 text-white before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40" type="button" onClick={handleSearch}>
            <span className="relative z-10">Search</span>
            </button>
            <button className="ml-2 rounded-lg bg-blue-500 p-2 text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full" type="button" onClick={handleClear}>
            <span className="relative z-10">Clear</span>
            </button>
          </div>
          
        </form>
      </div>
    </main>
  );
};

export default SearchForm;
