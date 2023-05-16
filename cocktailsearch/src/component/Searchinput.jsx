import React from 'react'
import {fetchSearchCocktail} from '../redux/action'

const Searchinput = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor='name'> Search Cocktail</label>
          <input type='text' name='name' id='name'/>
        </div>
      </form>
    </>
  )
}

export default Searchinput