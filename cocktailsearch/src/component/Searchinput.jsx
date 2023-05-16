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
        <div style={{ display:"flex"}}>  
          <label htmlFor='name'>Search Cocktail </label>
          <div style={{border : "2px solid black" , marginLeft : "20px"}}>
          <input type='text' name='name' id='name' value={searchTerm} onChange={handleChange} />
          </div>
        </div>
       
      </form>
    </>
  );
};

export default SearchInput;
