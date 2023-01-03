import React from "react";
import { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";

const SearchBar = () => {
  const [leftSearchInput, setLeftSearchInput] = useState("");
  const [rightSearchInput, setRightSearchInput] = useState("");

  const leftHandleChange = e => {
    e.preventDefault();
    setLeftSearchInput(e.target.value);
  }

  const rightHandleChange = e => {
    e.preventDefault();
    setRightSearchInput(e.target.value);
  }

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-bar-left">
          <input 
                type="text" 
                placeholder='Search Terrier, Kitten, etc.'
                onChange={leftHandleChange}
                value={leftSearchInput} />
        </div>
        <div className='vertical-line'></div>
        <div className='search-bar-right'>
          <input 
                type="text"
                placeholder='Enter City, State, or ZIP'
                onChange={rightHandleChange}
                value={rightSearchInput} />
        </div>
        <div className='search-icon-container'>
          <button className='search-icon'><RxMagnifyingGlass /></button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;