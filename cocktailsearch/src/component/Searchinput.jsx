import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchCocktail } from '../redux/action';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(fetchSearchCocktail(searchTerm));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div> 
          <label htmlFor='name'>Search Cocktail</label>
          <input type='text' name='name' id='name' value={searchTerm} onChange={handleChange} />
        </div>
       
      </form>
    </>
  );
};

export default SearchInput;
