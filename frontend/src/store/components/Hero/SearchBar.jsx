import React from "react";
import { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSearchAnimals } from "../../animals";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const [searchIcon, setSearchIcon] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setSearchIcon(true);
    if (!(e.target.value)) setSearchIcon(false);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchSearchAnimals(searchInput))
      .then(()=>history.push(`/search/${searchInput}`));
  }

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
              type="text" 
              placeholder='Search Husky, Kitten, etc.'
              onChange={handleChange}
              value={searchInput} />
        <div className='search-icon-container'>
          {!searchIcon && (<div className="search-icon-inactive"><RxMagnifyingGlass /></div>)}
          {searchIcon && (<button className='search-icon'><RxMagnifyingGlass /></button>)}
        </div>
      </form>
    </div>
  )
}

export default SearchBar;