import React from "react";
import { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSearchAnimals } from "../../animals";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [leftSearchInput, setLeftSearchInput] = useState("");
  const [rightSearchInput, setRightSearchInput] = useState("");
  const [searchIcon, setSearchIcon] = useState("");

  const leftHandleChange = e => {
    e.preventDefault();
    setLeftSearchInput(e.target.value);
    setSearchIcon(true);
    if (!(e.target.value)) setSearchIcon(false);
  }

  const rightHandleChange = e => {
    e.preventDefault();
    setRightSearchInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchSearchAnimals(leftSearchInput));
    history.push(`/search/${leftSearchInput}`);
  }

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSubmit}>
        {/* <div className="search-bar-left"> */}
          <input className="search-bar-left"
                type="text" 
                placeholder='Search Terrier, Kitten, etc.'
                onChange={leftHandleChange}
                value={leftSearchInput} />
        {/* </div> */}
        <div className='vertical-line'></div>
        {/* <div className='search-bar-right'> */}
          <input className='search-bar-right'
                type="text"
                placeholder='Enter City, State, or ZIP'
                onChange={rightHandleChange}
                value={rightSearchInput} />
        {/* </div> */}
        <div className='search-icon-container'>
          {!searchIcon && (<div className="search-icon-inactive"><RxMagnifyingGlass /></div>)}
          {searchIcon && (<button className='search-icon'><RxMagnifyingGlass /></button>)}
        </div>
      </form>
    </div>
  )
}

export default SearchBar;